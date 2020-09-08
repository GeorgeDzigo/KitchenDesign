<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_from = "mr.georgegamertv@gmail.vom";

$email_subject = "New Form Submission";

$email_body = "User's name: $name.\n".
                "User's Email: $visitor_email.\n".
                    "User's Message: $message.\n";

                    
                    $to = "mr.georgegamertv@gmail.com";
                    
                    $headers = "From: $email_from.\r\n";
                    
                    $headers .="Reply-To: $visitor_email\r\n";
                    

                    mail($to,$email_subject,$email_body,$headers);
                    
                    $header("Location: index.html")


?>