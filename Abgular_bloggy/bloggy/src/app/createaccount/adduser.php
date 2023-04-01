<?php
session_start();

$servername = "localhost";
$username = "root";
$password = " ";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// initializing variables
$username = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'bloggy');

// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $password = mysqli_real_escape_string($db, $_POST['pass']);
  $tel = mysqli_real_escape_string($db, $_POST['tel']);
  $age = mysqli_real_escape_string($db, $_POST['age']);



  // Finally, register user if there are no errors in the form


  	$query = "INSERT INTO user (username, password, tel,age) 
  			  VALUES('$username', '$password', '$tel','$age')";
  	mysqli_query($db, $query);

  
}


?>