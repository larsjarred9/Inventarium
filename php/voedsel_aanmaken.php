<?php
require "../env.php";
$product = htmlentities($_POST["product"], ENT_QUOTES);
$aantal = htmlentities($_POST["aantal"], ENT_QUOTES);
$houdbaar = htmlentities($_POST["houdbaar"], ENT_QUOTES);
$opslag = htmlentities($_POST["opslag"], ENT_QUOTES);
$result = mysqli_query($conn, "INSERT INTO `voedsel` (`id`, `product`, `aantal`, `overdatum`, `opslagplek`)
VALUES (NULL, '{$product}', '{$aantal}', '{$houdbaar}', '{$opslag}')");
?>
