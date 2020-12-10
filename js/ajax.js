$(document).ready(function () {
    laadlijst();
    opslagladen(1);

    $("#producttoevoeg").click(function () {
        var product = $("#product").val();
        var aantal = $("#aantal").val();
        var houdbaar = $("#houdbaar").val();
        var opslag = document.getElementById("opslag").selectedIndex;
        $.ajax({
            url: "php/voedsel_aanmaken.php",
            method: "POST",
            data: {
                'product': product,
                'aantal': aantal,
                'houdbaar': houdbaar,
                'opslag': document.getElementsByTagName("option")[opslag].value
            }
        })
            .done(function (data) {
                $('#exampleModal').modal('toggle');
                laadlijst();
            });
    });

    $("#productwijzig").click(function () {
        var id = $("#id2").val();
        var product = $("#product2").val();
        var aantal = $("#aantal2").val();
        var houdbaar = $("#houdbaar2").val();
        var opslag = document.getElementById("opslag2").selectedIndex;
        $.ajax({
            url: "php/voedsel_update.php",
            method: "POST",
            data: {
                'product': product,
                'aantal': aantal,
                'houdbaar': houdbaar,
                'opslag': document.getElementsByTagName("option")[opslag].value,
                'id': id
            }
        })
            .done(function (data) {
                $('#exampleModal2').modal('toggle');
                laadlijst();
            });
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
        $('.modal-body').find('lable,input,textarea').val('');
    });
});

function laadlijst() {
    $.ajax({
        url: "php/voedsel_inladen.php",
        dataType: "json"
    })
        .done(function (data) {
            var output = "<table class='table table-striped'><thead class='thead-dark'><tr><th>Product</th><th>Aantal</th><th>Houdbaarheidsdatum</th><th>Opslag</th><th></th><th></th><th></th></thead><tbody>";
            for (var i in data) {
                output += "<tr><td>" + data[i].product + "</td><td>" + data[i].aantal + "</td><td>" + data[i].overdatum + "</td><td>" + data[i].name + "</td><td>";
                if (data[i].aantal > 1) {
                    output += "<button onclick='removeAantal(" + data[i].id + ", " + data[i].aantal + ")' class='btn btn-primary btn-sm'><b>-</b>";
                }
                output += "</button><button onclick='addAantal(" + data[i].id + ", " + data[i].aantal + ")' class='btn btn-primary btn-sm'><b>+</b></button></td><td><button onclick='veranderProduct(" + data[i].id + ")' class='btn btn-warning btn-sm'>Wijzigen</button></td><td><button onclick='verwijderProduct(" + data[i].id + ")' class='btn btn-danger btn-sm'>Verwijderen</button></td>";
                output += "</tr>";
            }
            output += "</tbody></table>";
            $("#voedseloutput").html(output);
        });
}

function verwijderProduct(id) {
    $.ajax({
        url: "php/voedsel_verwijderen.php",
        method: "POST",
        data: {
            'id': id
        }
    })
        .done(function (data) {
            laadlijst();
        });
}

function veranderProduct(id) {
    $.ajax({
        url: "php/voedsel_wijzigen.php",
        method: "POST",
        data: {
            'id': id
        }
    })
        .done(function (data) {
            $('#wijzigmodel').html(data);
            opslagladen(2);
            $('#exampleModal2').modal('toggle');
        });
}

function opslagladen(aantal) {
    $.ajax({
        url: "php/opslagplek_inladen.php",
        dataType: "json"
    })
        .done(function (opslag) {
            if (aantal == 1) {
                var opslagout = "<select id='opslag' class='form-control'>";
                for (var i in opslag) {
                    opslagout += "<option value='" + opslag[i].id + "'>" + opslag[i].name + "</option>";
                }
                opslagout += "</select>"
                $("#opslagplekoutput").html(opslagout);
            }
            else {
                var opslagout = "<select id='opslag2' class='form-control'>";
                for (var i in opslag) {
                    opslagout += "<option value='" + opslag[i].id + "'>" + opslag[i].name + "</option>";
                }
                opslagout += "</select>"
                $("#opslagplekoutput2").html(opslagout);
            }
        });
}

function removeAantal(id, aantal) {
    $.ajax({
        url: "php/voedsel_vween.php",
        method: "POST",
        data: {
            'id': id,
            'aantal': aantal
        }
    })
        .done(function (data) {
            laadlijst();
        });
}

function addAantal(id, aantal) {
    $.ajax({
        url: "php/voedsel_addeen.php",
        method: "POST",
        data: {
            'id': id,
            'aantal': aantal
        }
    })
        .done(function (data) {
            laadlijst();
        });
}

function zoekproduct() {
    var zoek = $("#productzoek").val();
    $.ajax({
        url: "php/voedsel_inladen.php?id="+zoek,
        dataType: "json"
    })
        .done(function (data) {
            var output = "<table class='table table-striped'><thead class='thead-dark'><tr><th>Product</th><th>Aantal</th><th>Houdbaarheidsdatum</th><th>Opslag</th><th></th><th></th><th></th></thead><tbody>";
            for (var i in data) {
                output += "<tr><td>" + data[i].product + "</td><td>" + data[i].aantal + "</td><td>" + data[i].overdatum + "</td><td>" + data[i].name + "</td><td>";
                if (data[i].aantal > 1) {
                    output += "<button onclick='removeAantal(" + data[i].id + ", " + data[i].aantal + ")' class='btn btn-primary btn-sm'><b>-</b>";
                }
                output += "</button><button onclick='addAantal(" + data[i].id + ", " + data[i].aantal + ")' class='btn btn-primary btn-sm'><b>+</b></button></td><td><button onclick='veranderProduct(" + data[i].id + ")' class='btn btn-warning btn-sm'>Wijzigen</button></td><td><button onclick='verwijderProduct(" + data[i].id + ")' class='btn btn-danger btn-sm'>Verwijderen</button></td>";
                output += "</tr>";
            }
            output += "</tbody></table>";
            $("#voedseloutput").html(output);
        });

}