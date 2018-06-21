<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>	
</body>
<?php

$username=$_POST['username'];
$password=$_POST['password'];

if ($username=='Ivan' and $password=='qwerty') {
	echo "Hello ".$username;
}
else{
	echo "Wrong login or password.";
}



?>