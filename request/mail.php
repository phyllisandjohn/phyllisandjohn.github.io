<?php
if(isset($_POST["submit"])){
  $message = $_POST['msg'];
  mail("phyllisandjohn.guestlist@gmail.com", "Song Request", $message, "From: kirstenrauffer@gmail.com");
}
?>
