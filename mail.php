<?php

echo 'mailing...';

$to = 'haidukwork@gmail.com';
$subject = 'Work';
$message = $_POST['message'];
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);