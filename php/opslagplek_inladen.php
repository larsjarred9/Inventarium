<?php
require "../env.php";
$opslag = [];
$result = mysqli_query($conn, "SELECT * FROM opslag");
while ($row = mysqli_fetch_array($result)) {
 $opslag[] = $row;
}
echo json_encode($opslag);

?>