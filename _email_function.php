<?php 
  $EmailFrom = "jairus@manic.com.sg";            // test sender

  $EmailTo = "jairus.aragon@gmail.com";           // test email

  $Subject = "Contact Us Form";

  

  $salutation = "";
  if( isset($_POST['contact-salutation']) ) {
    $salutation             = Trim(stripslashes($_POST['contact-salutation'])); 
  }
  $emailaddress = "";
  if( isset($_POST['contact-email-address']) ) {
    $emailaddress           = Trim(stripslashes($_POST['contact-email-address'])); 
  }
  $fullname = "";
  if( isset($_POST['contact-full-name']) ) {
    $fullname              = Trim(stripslashes($_POST['contact-full-name'])); 
  }
  $number = "";
  if( isset($_POST['contact-contact-number']) ) {
    $number               = Trim(stripslashes($_POST['contact-contact-number'])); 
  }
  $reason = "";
  if( isset($_POST['contact-subject']) ) {
    $reason             = Trim(stripslashes($_POST['contact-subject'])); 
  } 
  $message = "";
  if( isset($_POST['contact-message']) ) {
    $message          = Trim(stripslashes($_POST['contact-message'])); 
  }



  
  

  

  $dial_number = "";
  if( isset($_POST['contact-dial-phone-txt']) ) {
    $dial_number               = Trim(stripslashes($_POST['contact-dial-phone-txt'])); 
  }

  

  

  
  // prepare email body text
  $Body = "";
  $Body .= "Subject: ";
  $Body .= $reason;
  $Body .= "\n";
  $Body .= "Message: ";
  $Body .= "\n";
  $Body .= $message;
  $Body .= "\n";
  $Body .= "\n";


  $Body .= "Salutation: ";
  $Body .= $salutation;
  $Body .= "\n";
  $Body .= "Full name: ";
  $Body .= $fullname;
  $Body .= "\n";
  $Body .= "\n";
  
  $Body .= "Email: ";
  $Body .= $emailaddress;
  $Body .= "\n";
  $Body .= "Contact Number: ";
  $Body .= $number;
  $Body .= "\n";
  

  // send email 
  $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

  // redirect to success page 
  if ($success){
    //print "<meta http-equiv=\"refresh\" content=\"0;URL=" . $referer . "about_us.html\">";
    print "success";
  } else{
    //print "<meta http-equiv=\"refresh\" content=\"0;URL=" . $referer . "about_us.html\">";
    print "error";
  }


?>