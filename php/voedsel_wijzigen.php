<?php
require "../env.php";
$id = htmlentities($_POST["id"], ENT_QUOTES);
$result = mysqli_query($conn, "SELECT * FROM `voedsel` WHERE `id` = $id LIMIT 1");
while ($row = mysqli_fetch_array($result)) {
echo '<form>
<div class="form-row">
    <div class="form-group col-6">
        <label>Product</label>
        <input class="form-control" value="'.$row["product"].'" id="product2" type="text">
    </div>
    <div class="form-group col-6">
        <label>Aantal / Hoeveelheid</label>
        <input class="form-control" value="'.$row["aantal"].'" id="aantal2" min="0.1" type="number">
    </div>
</div>
<div class="form-row">
    <div class="form-group col-6">
        <label>Houdbaarheidsdatum</label>
        <input class="form-control" value="'.$row["overdatum"].'" id="houdbaar2" type="date">
        <input class="form-control" value="'.$row["id"].'" id="id2" type="hidden">
    </div>
    <div class="form-group col-6">
        <label>Opslagruimte</label>
        <div id="opslagplekoutput2"></div>
    </div>
</div>
<small class="text-danger"><b>Letop!</b> Opslagruimte word niet opgehaald vanuit de informatie.</small><br><small><b>Opmerking</b> Vul bij een ingevroren product de houdbaarheidsdatum + 6 maanden in en
    bekijk na deze periode of u dit wilt verlengen.</small>
</form>';
return;
}
?>
