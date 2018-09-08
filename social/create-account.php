<?php
include('design/design.html');
include('classes/DB.php');
if(isset($_POST['createaccount'])){
    $username= $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    
    //We have to put : in front of all column value as if we don't put that than these will be same as database column names which will result in error
    DB::query('INSERT INTO users VALUES (null, :username,:password,:email)',array(':username'=>$username,':password'=>$password,':email'=>$email));
    echo 'success';
}


?>



<div class='row'>
    <div class="loginandrego">
        
        <h2 class="header-secondary static">
            Registration
        </h2>
        <form action='create-account.php' method='post' class='form'>
            <div class="form__group">
                <input type='text' name='username' class="form__input" placeholder='Username'>
                <label for="name" class="form__label">Username</label>
            </div>
            <div class="form__group">
                <input type='password' name='password' class="form__input" placeholder='Password'>
                <label for="name" class="form__label">Password</label>
            </div>
            <div class="form__group">
                <input type='email' name='email' class="form__input" placeholder='Someonce@somesite.com'>
                <label for="name" class="form__label">Email</label>
            </div>
            <div class="form__group">
                <button class="btn btn--primary left">Sign Up &rarr;</button> 
                <button class="btn btn--primary right">Login &rarr;</button> 
            </div>
        </form>
    </div>
    
</div>