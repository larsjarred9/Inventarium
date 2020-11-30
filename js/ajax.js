$(document).ready(function () {
    $.ajax({
        url: "php/voedsel_inladen.php",
        dataType: "json"
    })
        .done(function (data) {
            var output = "<table class='table table-striped'><thead class='thead-dark'><tr><th>Product</th><th>Aantal</th><th>Overdatum</th><th>Opslag</th><th></th><th></th></thead><tbody>";
            for (var i in data) {
                output += "<tr><td>" + data[i].product + "</td><td>" + data[i].aantal + "</td><td>" + data[i].overdatum + "</td><td>" + data[i].name + "</td><td><button onclick='veranderProduct("+ data[i].id +")' class='btn btn-warning btn-sm'>Wijzigen</button></td><td><button onclick='verwijderProduct("+ data[i].id +")' class='btn btn-danger btn-sm'>Wijzigen</button></td>";
                output += "</tr>";
            }
            output += "</tbody></table>";
            $("#voedseloutput").html(output);
        });
});