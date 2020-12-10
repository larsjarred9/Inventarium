<?php
require "../env.php";
$data = [];
if (isset($_GET["id"])) {
    $id = htmlentities($_GET["id"], ENT_QUOTES);
    $result = mysqli_query($conn, "SELECT voedsel.id, voedsel.product, voedsel.aantal, voedsel.overdatum, opslag.name FROM voedsel, opslag WHERE voedsel.opslagplek = opslag.id AND voedsel.product LIKE '%".$id."%' ORDER BY voedsel.overdatum");
}
else {
    $result = mysqli_query($conn, "SELECT voedsel.id, voedsel.product, voedsel.aantal, voedsel.overdatum, opslag.name FROM voedsel, opslag WHERE voedsel.opslagplek = opslag.id ORDER BY voedsel.overdatum");
}
while ($row = mysqli_fetch_array($result)) {
$data[] = $row;
}
echo json_encode($data);
?>