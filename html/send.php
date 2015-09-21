<?php

$name = $_POST['name'];
$email = $_POST['email'];
$topic = $_POST['topic'];
$message = $_POST['message'];

$to = "adriangoetz@gmail.com";
$subject = "$name: $topic";

$body = "This is an automated message. Please don't reply to this email. \n\n E-Mail: $email \n\n Topic: $topic \n\n $message";

mail($to, $subject, $body);

echo "Message Sent!";

?>