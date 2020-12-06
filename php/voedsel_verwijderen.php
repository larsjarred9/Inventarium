<?php
require "../env.php";
$id = htmlentities($_POST["id"], ENT_QUOTES);
$result = mysqli_query($conn, "DELETE FROM `voedsel` WHERE `id` = $id");
?>
