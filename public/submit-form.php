<?php
   $to_email = "intouch@azarties.com";
   $subject = '[azarties.com] New message from ' . $_POST['name'];
   $body = $_POST['message'] . "\r\n" . 'Phone: ' . $_POST['phone'] . "\r\n" . 'Email: ' . $_POST['email'];
   $headers = "From: intouch@azarties.com";

   if ( mail($to_email, $subject, $body, $headers)) {
      echo("{success: true}");
   } else {
      echo("{success: false}");
   }
?>