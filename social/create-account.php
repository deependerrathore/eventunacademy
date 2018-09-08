<?php
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


<h1>Register</h1>
<form action='create-account.php' method='post'>
<input type='text' name='username'  value='' placeholder='Username...'/><p>
<input type='password' name='password' value='' placeholder='password' /><p>
<input type='email' name='email' value='' placeholder='someonce@somesite.com' /><p>
<input type='submit' name='createaccount' value='Create Account'/><p>
</form>
