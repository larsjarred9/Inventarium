<?php
require "../env.php";
$id = htmlentities($_POST["id"], ENT_QUOTES);
$aantal = htmlentities($_POST["aantal"], ENT_QUOTES);
$aantal = $aantal + 1;
$result = mysqli_query($conn, "UPDATE `voedsel` SET `aantal`= $aantal WHERE `id` = $id");
?>
