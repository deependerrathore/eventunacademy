//SOCIAL CONTROLLER
var socialController = (function(){
    var response;
    //PRIVATE functions
    var ajaxRequest = function(type,serverPage,obj){
        
        //create a boolean variable to check for a valid IE instance
        var request = false;
        
        //Check if we are using IE
        try{
            //If the javascript version is greate than 5.
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            //If not, then use the older active x object
            try{
                //If we are using IE
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                //Else we must be using a non-IE browser.
                request = false;
            }
        }
        
        //If we are using a non-IE browser, create a javascript instance of the object.
        if(!request && typeof XMLHttpRequest != 'undefined'){ //typeof XMLHttpRequest is function
            request = new XMLHttpRequest();
        }
        
        request.open(type,serverPage);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        var json = encodeURIComponent(JSON.stringify(obj));
        request.send("data="+json);
        request.onreadystatechange=function() {
            if(request.readyState < 4){
                response = 'loading';
            }else if(request.readyState === 4 && request.status === 200){
                response = request.responseText;
            }
            return this.response;
            
        }
         
        
    };
    
    
    //PUBLIC functions
    return{
        
        checkUsernameExistDB:function(usernameObj){
            ajaxRequest('POST','create-account.php',usernameObj);
            
        }
       
        
    }
})();

//UI CONTROLLER
var UIController = (function(){
    var DOMStrings = {
        inputUsername: '#username',
        inputPassword: '#password',
        inputEmail: '#email',
        btnRegister: '#register'
    }
    //PRIVATE
    
    //PUBLIC
    return{
        getInput:function(inputName){
            if(inputName === 'username'){
                return {
                    username: document.querySelector(DOMStrings.inputUsername).value
                }
            }else if(inputName === 'password'){
                return {
                    password: document.querySelector(DOMStrings.inputPassword).value
                }
            }else if(inputName === 'email'){
                return{
                    email: document.querySelector(DOMStrings.inputEmail).value
                }
            }
            
        },
        addSpinner:function(postion){
            var spinner = '<i class="fa fa-circle-o-notch fa-spin"></i>';
            document.querySelector(DOMStrings.inputUsername).nextElementSibling.insertAdjacentHTML(postion,spinner);
        },
        getDOMStrings:function(){ // this will return all of the DOM strings to GLOBAL APP CONTROLLER
            return DOMStrings;
        }
        
    }
})();

//GLOBAL APP CONTROLLER
var controller = (function(socialCtrl,UICtrl){
    
    //All of the event listerner
    var setupEventListeners = function(){
        
        //Setting up all of the event listerner here
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputUsername).addEventListener('keyup',checkUsernameExist);
    };
    
    var checkUsernameExist = function(){
        var input;
        input = UICtrl.getInput('username');
        
        if(input.username !== "" && isNaN(input.username) && input.username.length > 4){
            console.log(socialCtrl.checkUsernameExistDB(input));
            
        }
    }
    
    
    return{
        init:function(){
            console.log('application started');
            setupEventListeners();
        }
    }
})(socialController,UIController);

//Calling the initalization funciton from GLOBAL APP CONTOLLER
controller.init();