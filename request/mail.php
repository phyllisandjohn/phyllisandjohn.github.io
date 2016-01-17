<?php
if(isset($_POST["submit"])){
  $message = $_POST['song'];
  $email = 'kirstenrauffer@gmail.com'
  $headers = 'From:'. $email . "\r\n"; // Sender's Email
  $headers .= 'Cc:'. $email . "\r\n"; // Carbon copy to Sender
  mail("phyllisandjohn.guestlist@gmail.com", "Song Request", $message, "From: kirstenrauffer@gmail.com");
  echo "Requested ".$message." to be added to the playlist!"
}
?>
