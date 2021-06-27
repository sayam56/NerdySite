<?php

// Define some constants
define( "RECIPIENT_NAME", "NerdEvolution Admin" );
define( "RECIPIENT_EMAIL", "admin@nerdevolution.tech" );

// Read the form values
$success = false;
$userName = isset( $_POST['username'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $userName . "";
  $msgBody = " Name: ". $userName .  "\n Email: ". $senderEmail . "\n Subject: FAQ \n Message: " . $message . "";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successful Submission
  header('Location: contact.html?message=Successful');
}

else{
	//Set Location After Unsuccessful Submission
  	header('Location: contact.html?message=Failed');	
}

?>