<?php
require "../env.php";
$product = htmlentities($_POST["product"], ENT_QUOTES);
$aantal = htmlentities($_POST["aantal"], ENT_QUOTES);
$houdbaar = htmlentities($_POST["houdbaar"], ENT_QUOTES);
$opslag = htmlentities($_POST["opslag"], ENT_QUOTES);
$id = htmlentities($_POST["id"], ENT_QUOTES);
$result = mysqli_query($conn, "UPDATE voedsel SET product='$product', aantal=$aantal, overdatum='$houdbaar', opslagplek=$opslag WHERE id = $id");
echo $product;
echo $aantal;
echo $houdbaar;
echo $opslag;
echo $id;
var_dump($result);
?>
