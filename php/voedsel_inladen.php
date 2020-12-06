<?php
require "../env.php";
$data = [];
$result = mysqli_query($conn, "SELECT voedsel.id, voedsel.product, voedsel.aantal, voedsel.overdatum, opslag.name FROM voedsel, opslag WHERE voedsel.opslagplek = opslag.id ORDER BY voedsel.overdatum");
while ($row = mysqli_fetch_array($result)) {
 $data[] = $row;
}
echo json_encode($data);

?>