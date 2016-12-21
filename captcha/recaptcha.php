<?php
require_once('../res/x5engine.php');

$captcha = new ReCaptcha('6LeFsRATAAAAAAffh0yUNhojngX142YPiQBvC2UE');
echo $captcha->check($_POST['rsp']);
