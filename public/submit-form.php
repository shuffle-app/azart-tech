<?php
   // header("Access-Control-Allow-Origin: *");
   $to_email = "intouch@azarties.com";
   $subject = '[azarties.com] New lead';
   $headers = "From: intouch@azarties.com";

   $variables = array();

   $variables['name'] = $_POST['name'];
   $variables['email'] = $_POST['email'];
   $variables['phone'] = empty($_POST['phone']) ? 'none' : $_POST['phone'];
   $variables['widget'] = empty($_POST['widget']) ? 'none' : $_POST['widget'];
   $variables['utm_source'] = empty($_POST['utm_source']) ? 'none' : $_POST['utm_source'];
   $variables['utm_medium'] = empty($_POST['utm_medium']) ? 'none' : $_POST['utm_medium'];
   $variables['utm_campaign'] = empty($_POST['utm_campaign']) ? 'none' : $_POST['utm_campaign'];
   $variables['utm_term'] = empty($_POST['utm_term']) ? 'none' : $_POST['utm_term'];
   $variables['utm_content'] = empty($_POST['utm_content']) ? 'none' : $_POST['utm_content'];
   $variables['utm_calltouch_tm'] = empty($_POST['utm_calltouch_tm']) ? 'none' : $_POST['utm_calltouch_tm'];
   $variables['cookies'] = empty($_POST['cookies']) ? 'none' : $_POST['cookies'];
   $variables['message'] = empty($_POST['message']) ? '' : $_POST['cookies'];

   $template = file_get_contents("lead_template.html");

   foreach($variables as $key => $value)
   {
      $template = str_replace('{{ '.$key.' }}', $value, $template);
   }

   echo $template;

   if ( mail($to_email, $subject, $template, $headers)) {
      echo("{success: true}");
   } else {
      echo("{success: false}");
   }
?>