var img = null;
var img2 = null;
var context = null;
var canvas = null;

function rotate() {
    img = document.getElementById("dial");

    var key = document.getElementById("shift").value;
    if (isNaN(key)) {
        alert("Incorrect input - number needed");
    } else {
        var angle = Math.floor((360 / 26) * key);
        img.style.transform = "rotate(" + angle + "deg)";
    }
}

function onPageLoad() {
    canvas = document.getElementById("testing");

    if (canvas.getContext) {
        context = canvas.getContext("2d");
        img = document.getElementById("dial");
        img2 = document.getElementById("wheel");
        context.drawImage(img2, 0, 0);
        context.drawImage(img, 0, 0);
    } else {
        alert("Canvas not supported by browser!");
    }
}

