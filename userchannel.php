<?php
$usertag = $_POST['tag'];
$chns= $_POST['chns'];
$file = 'user/' . $usertag . '.chn';
file_put_contents($file, str_replace(',', PHP_EOL, $chns));
$userip = $_SERVER['REMOTE_ADDR'];
$useragent = $_SERVER['HTTP_USER_AGENT'].'';
header('Location: usertv.php?tag=' . $usertag . '&userip=' . $userip . '&useragent=' . $useragent);
?>
