var img = null;
var img2 = null;
var context = null;
var canvas = null;
var cCounter = 0;
var vCounter = 0;
var rCounter = 0;
var ctCounter = 0;

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

function caesarLoadNextSection() {
    cCounter++;
    var startMessage = document.getElementById("cStartMessage");
    var sectionOne = document.getElementById("cSectionOne");
    var sectionTwo = document.getElementById("cSectionTwo");
    var sectionThree = document.getElementById("cSectionThree");
    var sectionFour = document.getElementById("cSectionFour");
    var sectionFive = document.getElementById("cSectionFive");
    var tool = document.getElementById("caesarLessonTool");
    var tool2 = document.getElementById("caesarLessonTool2");
    
    if (cCounter === 1) {
        startMessage.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (cCounter === 2) {
        sectionOne.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (cCounter === 3) {
        sectionTwo.style.display = "none";
        sectionThree.style.display = "block";
        tool.style.display = "block";
    }
    if (cCounter === 4) {
        sectionThree.style.display = "none";
        tool.style.display = "none";
        sectionFour.style.display = "block";
        tool2.style.display = "block";
    }
    if (cCounter === 5) {
        sectionFour.style.display = "none";
        tool2.style.display = "none";
        sectionFive.style.display = "block";
    }

}

function caesarLoadPreviousSection() {
    cCounter--;
    var startMessage = document.getElementById("cStartMessage");
    var sectionOne = document.getElementById("cSectionOne");
    var sectionTwo = document.getElementById("cSectionTwo");
    var sectionThree = document.getElementById("cSectionThree");
    var sectionFour = document.getElementById("cSectionFour");
    var tool = document.getElementById("caesarLessonTool");
    var tool2 = document.getElementById("caesarLessonTool2");

    if (cCounter === 0) {
        sectionOne.style.display = "none";
        startMessage.style.display = "block";
    }
    if (cCounter === 1) {
        sectionTwo.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (cCounter === 2) {
        sectionThree.style.display = "none";
        tool.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (cCounter === 3) {
        sectionFour.style.display = "none";
        tool2.style.display = "none";
        sectionThree.style.display = "block";
        tool.style.display = "block";
    }
}

function vigenereLoadNextSection() {
    vCounter++;
    var startMessage = document.getElementById("vStartMessage");
    var sectionOne = document.getElementById("vSectionOne");
    var sectionTwo = document.getElementById("vSectionTwo");
    var sectionThree = document.getElementById("vSectionThree");
    var sectionFour = document.getElementById("vSectionFour");
    var sectionFive = document.getElementById("vSectionFive");
    var tool = document.getElementById("vigenereLessonTool");
    var tool2 = document.getElementById("vigenereLessonTool2");


    if (vCounter === 1) {
        startMessage.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (vCounter === 2) {
        sectionOne.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (vCounter === 3) {
        sectionTwo.style.display = "none";
        sectionThree.style.display = "block";
        tool.style.display = "block";
    }
    if (vCounter === 4) {
        sectionThree.style.display = "none";
        tool.style.display = "none";
        sectionFour.style.display = "block";
        tool2.style.display = "block";
    }
    if (vCounter === 5) {
        sectionFour.style.display = "none";
        sectionFive.style.display = "block";
        tool2.style.display = "none";
    }
}

function vigenereLoadPreviousSection() {
    vCounter--;
    var startMessage = document.getElementById("vStartMessage");
    var sectionOne = document.getElementById("vSectionOne");
    var sectionTwo = document.getElementById("vSectionTwo");
    var sectionThree = document.getElementById("vSectionThree");
    var sectionFour = document.getElementById("vSectionFour");
    var tool = document.getElementById("vigenereLessonTool");
    var tool2 = document.getElementById("vigenereLessonTool2");

    if (vCounter === 0) {
        sectionOne.style.display = "none";
        startMessage.style.display = "block";
    }
    if (vCounter === 1) {
        sectionTwo.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (vCounter === 2) {
        sectionThree.style.display = "none";
        tool.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (vCounter === 3) {
        sectionFour.style.display = "none";
        tool2.style.display = "none";
        sectionThree.style.display = "block";
        tool.style.display = "block";
    }
}

function railLoadNextSection() {
    rCounter++;
    var startMessage = document.getElementById("rStartMessage");
    var sectionOne = document.getElementById("rSectionOne");
    var sectionTwo = document.getElementById("rSectionTwo");
    var sectionThree = document.getElementById("rSectionThree");
    var sectionFour = document.getElementById("rSectionFour");
    var sectionFive = document.getElementById("rSectionFive");
    var tool = document.getElementById("railLessonTool");
    var tool2 = document.getElementById("railLessonTool2");


    if (rCounter === 1) {
        startMessage.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (rCounter === 2) {
        sectionOne.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (rCounter === 3) {
        sectionTwo.style.display = "none";
        sectionThree.style.display = "block";
        //tool.style.display = "block";
    }
    if (rCounter === 4) {
        sectionThree.style.display = "none";
        //tool.style.display = "none";
        sectionFour.style.display = "block";
        //tool2.style.display = "block";
    }
    if (rCounter === 5) {
        sectionFour.style.display = "none";
        sectionFive.style.display = "block";
        //tool2.style.display = "none";
    }
}

function railLoadPreviousSection() {
    rCounter--;
    var startMessage = document.getElementById("rStartMessage");
    var sectionOne = document.getElementById("rSectionOne");
    var sectionTwo = document.getElementById("rSectionTwo");
    var sectionThree = document.getElementById("rSectionThree");
    var sectionFour = document.getElementById("rSectionFour");
    var tool = document.getElementById("railLessonTool");
    var tool2 = document.getElementById("railLessonTool2");

    if (rCounter === 0) {
        sectionOne.style.display = "none";
        startMessage.style.display = "block";
    }
    if (rCounter === 1) {
        sectionTwo.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (rCounter === 2) {
        sectionThree.style.display = "none";
        //tool.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (rCounter === 3) {
        sectionFour.style.display = "none";
        //tool2.style.display = "none";
        sectionThree.style.display = "block";
        //tool.style.display = "block";
    }
}

function columnLoadNextSection() {
    ctCounter++;
    var startMessage = document.getElementById("ctStartMessage");
    var sectionOne = document.getElementById("ctSectionOne");
    var sectionTwo = document.getElementById("ctSectionTwo");
    var sectionThree = document.getElementById("ctSectionThree");
    var sectionFour = document.getElementById("ctSectionFour");
    var sectionFive = document.getElementById("ctSectionFive");
    var tool = document.getElementById("columnLessonTool");
    var tool2 = document.getElementById("columnLessonTool2");

    if (ctCounter === 1) {
        startMessage.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (ctCounter === 2) {
        sectionOne.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (ctCounter === 3) {
        sectionTwo.style.display = "none";
        sectionThree.style.display = "block";
        //tool.style.display = "block";
    }
    if (ctCounter === 4) {
        sectionThree.style.display = "none";
        //tool.style.display = "none";
        sectionFour.style.display = "block";
        //tool2.style.display = "block";
    }
    if (ctCounter === 5) {
        sectionFour.style.display = "none";
        sectionFive.style.display = "block";
        //tool2.style.display = "none";
    }
}

function railLoadPreviousSection() {
    ctCounter--;
    var startMessage = document.getElementById("ctStartMessage");
    var sectionOne = document.getElementById("ctSectionOne");
    var sectionTwo = document.getElementById("ctSectionTwo");
    var sectionThree = document.getElementById("ctSectionThree");
    var sectionFour = document.getElementById("ctSectionFour");
    var tool = document.getElementById("columnLessonTool");
    var tool2 = document.getElementById("columnLessonTool2");

    if (ctCounter === 0) {
        sectionOne.style.display = "none";
        startMessage.style.display = "block";
    }
    if (ctCounter === 1) {
        sectionTwo.style.display = "none";
        sectionOne.style.display = "block";
    }
    if (ctCounter === 2) {
        sectionThree.style.display = "none";
        //tool.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (ctCounter === 3) {
        sectionFour.style.display = "none";
        //tool2.style.display = "none";
        sectionThree.style.display = "block";
        //tool.style.display = "block";
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

function vEncrypt(vPlainText, vKeyArray) {
    var vResult = "";
    for (var i = 0, j = 0; i < vPlainText.length; i++) {
        var cipherChar = vPlainText.charCodeAt(i);
        if (cipherChar === 32) {
            vResult += String.fromCharCode(cipherChar);
        } else {
            if (cipherChar >= 65 && cipherChar <= 90) {
                vResult += String.fromCharCode((cipherChar - 65 + vKeyArray[j % vKeyArray.length]) % 26 + 65);
                j++;
            } else {
                vResult += String.fromCharCode((cipherChar - 97 + vKeyArray[j % vKeyArray.length]) % 26 + 97);
                j++;
            }
        }
    }
    document.getElementById("vResultDisplay").innerHTML = "Result: " + vResult;
}

function vDecrypt(vCipherText, dKeyArray) {
    var plainText = "";
    for (var i = 0, j = 0; i < vCipherText.length; i++) {
        var cipherChar = vCipherText.charCodeAt(i);
        if (cipherChar === 32) {
            plainText += String.fromCharCode(cipherChar);
        } else {
            if (cipherChar >= 65 && cipherChar <= 90) {
                plainText += String.fromCharCode((cipherChar - 65 - dKeyArray[j % dKeyArray.length] + 26) % 26 + 65);
                j++;
            } else {
                plainText += String.fromCharCode((cipherChar - 97 - dKeyArray[j % dKeyArray.length] + 26) % 26 + 97);
                j++;
            }
        }
    }
    document.getElementById("vPlainTextDisplay").innerHTML = "Result: " + plainText;
}

function setVigenereDecryptValues() {
    var vPlainText = document.getElementById("vCipherText").value;
    var vKey = document.getElementById("vDecryptKey").value;

    if (isNaN(vKey)) {
        getDecryptKeyValues(vPlainText, vKey);
    } else {
        alert("Incorrect input - letters needed");
    }
}

function getDecryptKeyValues(vCipherText, vKey) {
    var keyValueArray = [];
    for (var i = 0; i < vKey.length; i++) {
        var keyCharValue = vKey.charCodeAt(i);
        keyValueArray.push((keyCharValue - 65) % 32);
    }
    vDecrypt(vCipherText, keyValueArray);
}

function getKeyValues(vPlainText, vKey) {
    var keyValueArray = [];
    for (var i = 0; i < vKey.length; i++) {
        var keyCharValue = vKey.charCodeAt(i);
        keyValueArray.push((keyCharValue - 65) % 32);
    }
    vEncrypt(vPlainText, keyValueArray);
}

function setVigenereValues() {
    var vPlainText = document.getElementById("vPlainText").value;
    var vKey = document.getElementById("vKey").value;
    if (isNaN(vKey)) {
        getKeyValues(vPlainText, vKey);
    } else {
        alert("Incorrect input - letters needed");
    }
}

function setValues() {

    var plainText = document.getElementById("plainText").value;
    plainText = plainText.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    if (isNaN(key)) {
        alert("Invalid input - number needed");
    } else {
        caesarCipher(plainText, key);
    }
}

function caesarCipher(plainText, key) {
    var result = '';
    for (var i = 0; i < plainText.length; i++) {
        var plainTextChar = plainText[i].charCodeAt(0);
        if (plainTextChar === 32) {
            result = result + String.fromCharCode(plainTextChar);
        } else {
            var cipherTextChar = ((plainTextChar - 65 + key) % 26) + 97;
            result = result + String.fromCharCode(cipherTextChar);
        }

    }
    document.getElementById('resultDisplay').innerHTML = "Result: " + result;
    return result;
}

function setDecryptValues() {
    var cipherText = document.getElementById("cipherText").value;
    cipherText = cipherText.toUpperCase();
    var key = document.getElementById("decryptKey").value;
    if (isNaN(key)) {
        alert("Invalid input - number needed");
    } else {
        caesarCipherDecrypt(cipherText, key);
    }
}

function caesarCipherDecrypt(plainText, key) {
    var result = '';
    for (var i = 0; i < plainText.length; i++) {
        var plainTextChar = plainText[i].charCodeAt(0);
        if (plainTextChar === 32) {
            result = result + String.fromCharCode(plainTextChar);
        } else {
            var cipherTextChar = ((plainTextChar - 65 - key + 26) % 26) + 97;
            result = result + String.fromCharCode(cipherTextChar);
        }
    }
    document.getElementById('plainTextDisplay').innerHTML = "Result: " + result;
    return result;
}

function setRailValue() {
    var plainText = document.getElementById("railPlainText").value;
    var key = parseInt(document.getElementById("railKey").value);

    if (isNaN(key)) {
        alert("Invalid input - number needed");
    } else if (key > 8 || key < 2) {
        alert("Number not in range!");
    } else if (key === 2) {
        railCipher(plainText);
    } else if (key === 3) {
        railCipher2(plainText);
    } else if (key === 4) {
        railCipher3(plainText);
    } else if (key === 5) {
        railCipher4(plainText);
    } else if (key === 6) {
        railCipher5(plainText);
    } else if (key === 7) {
        railCipher6(plainText);
    } else if (key === 8) {
        railCipher7(plainText);
    }

}

function railCipher2(plainText) {
    var railOne = '';
    var railTwo = '';
    var railThree = '';

    for (var i = 0; i < plainText.length; i++) {

        if (i % 4 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);
            railThree += plainText.charAt(i + 2);
            railTwo += plainText.charAt(i + 3);
        }
    }
    var result = railOne + railTwo + railThree;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function railCipher(plainText) {
    var railOne = '';
    var railTwo = '';

    for (var i = 0; i < plainText.length; i++) {
        if (i % 2 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);

        }
    }
    var result = railOne + railTwo;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function railCipher3(plainText) {
    var railOne = '';
    var railTwo = '';
    var railThree = '';
    var railFour = '';

    for (var i = 0; i < plainText.length; i++) {
        if (i % 6 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);
            railThree += plainText.charAt(i + 2);
            railFour += plainText.charAt(i + 3);
            railThree += plainText.charAt(i + 4);
            railTwo += plainText.charAt(i + 5);
        }
    }
    var result = railOne + railTwo + railThree + railFour;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function railCipher4(plainText) {
    var railOne = '';
    var railTwo = '';
    var railThree = '';
    var railFour = '';
    var railFive = '';

    for (var i = 0; i < plainText.length; i++) {
        if (i % 8 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);
            railThree += plainText.charAt(i + 2);
            railFour += plainText.charAt(i + 3);
            railFive += plainText.charAt(i + 4);
            railFour += plainText.charAt(i + 5);
            railThree += plainText.charAt(i + 6);
            railTwo += plainText.charAt(i + 7);
        }
    }
    var result = railOne + railTwo + railThree + railFour + railFive;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function railCipher5(plainText) {
    var railOne = '';
    var railTwo = '';
    var railThree = '';
    var railFour = '';
    var railFive = '';
    var railSix = '';

    for (var i = 0; i < plainText.length; i++) {
        if (i % 10 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);
            railThree += plainText.charAt(i + 2);
            railFour += plainText.charAt(i + 3);
            railFive += plainText.charAt(i + 4);
            railSix += plainText.charAt(i + 5);
            railFive += plainText.charAt(i + 6);
            railFour += plainText.charAt(i + 7);
            railThree += plainText.charAt(i + 8);
            railTwo += plainText.charAt(i + 9);
        }
    }
    var result = railOne + railTwo + railThree + railFour + railFive + railSix;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function railCipher6(plainText) {
    var railOne = '';
    var railTwo = '';
    var railThree = '';
    var railFour = '';
    var railFive = '';
    var railSix = '';
    var railSeven = '';

    for (var i = 0; i < plainText.length; i++) {
        if (i % 12 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);
            railThree += plainText.charAt(i + 2);
            railFour += plainText.charAt(i + 3);
            railFive += plainText.charAt(i + 4);
            railSix += plainText.charAt(i + 5);
            railSeven += plainText.charAt(i + 6);
            railSix += plainText.charAt(i + 7);
            railFive += plainText.charAt(i + 8);
            railFour += plainText.charAt(i + 9);
            railThree += plainText.charAt(i + 10);
            railTwo += plainText.charAt(i + 11);
        }
    }
    var result = railOne + railTwo + railThree + railFour + railFive + railSix +
            railSeven;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function railCipher7(plainText) {
    var railOne = '';
    var railTwo = '';
    var railThree = '';
    var railFour = '';
    var railFive = '';
    var railSix = '';
    var railSeven = '';
    var railEight = '';

    for (var i = 0; i < plainText.length; i++) {
        if (i % 14 === 0) {
            railOne += plainText.charAt(i);
            railTwo += plainText.charAt(i + 1);
            railThree += plainText.charAt(i + 2);
            railFour += plainText.charAt(i + 3);
            railFive += plainText.charAt(i + 4);
            railSix += plainText.charAt(i + 5);
            railSeven += plainText.charAt(i + 6);
            railEight += plainText.charAt(i + 7);
            railSeven += plainText.charAt(i + 8);
            railSix += plainText.charAt(i + 9);
            railFive += plainText.charAt(i + 10);
            railFour += plainText.charAt(i + 11);
            railThree += plainText.charAt(i + 12);
            railTwo += plainText.charAt(i + 13);
        }
    }
    var result = railOne + railTwo + railThree + railFour + railFive + railSix +
            railSeven + railEight;
    document.getElementById("railResultDisplay").innerHTML = "Result: " + result;
}

function setColumnValue() {
    var plainText = document.getElementById("columnarPlainText").value;
    var key = parseInt(document.getElementById("columnarKey").value);
    if (isNaN(key)) {
        alert("Invalid input - number needed");
    } else if (key > 8 || key < 2) {
        alert("Number out of allowed range!");
    } else if (key === 2) {
        columnarCipher(plainText);
    } else if (key === 3) {
        columnarCipher2(plainText);
    } else if (key === 4) {
        columnarCipher3(plainText);
    } else if (key === 5) {
        columnarCipher4(plainText);
    } else if (key === 6) {
        columnarCipher5(plainText);
    } else if (key === 7) {
        columnarCipher6(plainText);
    } else if (key === 8) {
        columnarCipher7(plainText);
    }

}

function columnarCipher(plaintext) {

    var columnOne = '';
    var columnTwo = '';


    for (var i = 0; i < plaintext.length; i++) {
        if (i % 2 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
        }
    }
    var result = columnOne + columnTwo;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

function columnarCipher2(plaintext) {

    var columnOne = '';
    var columnTwo = '';
    var columnThree = '';


    for (var i = 0; i < plaintext.length; i++) {
        if (i % 3 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
            columnThree += plaintext.charAt(i + 2);
        }
    }
    var result = columnOne + columnTwo + columnThree;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

function columnarCipher3(plaintext) {

    var columnOne = '';
    var columnTwo = '';
    var columnThree = '';
    var columnFour = '';

    for (var i = 0; i < plaintext.length; i++) {
        if (i % 4 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
            columnThree += plaintext.charAt(i + 2);
            columnFour += plaintext.charAt(i + 3);
        }
    }
    var result = columnOne + columnTwo + columnThree + columnFour;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

function columnarCipher4(plaintext) {

    var columnOne = '';
    var columnTwo = '';
    var columnThree = '';
    var columnFour = '';
    var columnFive = '';

    for (var i = 0; i < plaintext.length; i++) {
        if (i % 5 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
            columnThree += plaintext.charAt(i + 2);
            columnFour += plaintext.charAt(i + 3);
            columnFive += plaintext.charAt(i + 4);
        }
    }
    var result = columnOne + columnTwo + columnThree + columnFour + columnFive;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

function columnarCipher5(plaintext) {

    var columnOne = '';
    var columnTwo = '';
    var columnThree = '';
    var columnFour = '';
    var columnFive = '';
    var columnSix = '';

    for (var i = 0; i < plaintext.length; i++) {
        if (i % 6 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
            columnThree += plaintext.charAt(i + 2);
            columnFour += plaintext.charAt(i + 3);
            columnFive += plaintext.charAt(i + 4);
            columnSix += plaintext.charAt(i + 5);
        }
    }
    var result = columnOne + columnTwo + columnThree + columnFour + columnFive
            + columnSix;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

function columnarCipher6(plaintext) {

    var columnOne = '';
    var columnTwo = '';
    var columnThree = '';
    var columnFour = '';
    var columnFive = '';
    var columnSix = '';
    var columnSeven = '';

    for (var i = 0; i < plaintext.length; i++) {
        if (i % 7 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
            columnThree += plaintext.charAt(i + 2);
            columnFour += plaintext.charAt(i + 3);
            columnFive += plaintext.charAt(i + 4);
            columnSix += plaintext.charAt(i + 5);
            columnSeven += plaintext.charAt(i + 6);
        }
    }
    var result = columnOne + columnTwo + columnThree + columnFour + columnFive
            + columnSix + columnSeven;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

function columnarCipher7(plaintext) {

    var columnOne = '';
    var columnTwo = '';
    var columnThree = '';
    var columnFour = '';
    var columnFive = '';
    var columnSix = '';
    var columnSeven = '';
    var columnEight = '';

    for (var i = 0; i < plaintext.length; i++) {
        if (i % 8 === 0) {
            columnOne += plaintext.charAt(i);
            columnTwo += plaintext.charAt(i + 1);
            columnThree += plaintext.charAt(i + 2);
            columnFour += plaintext.charAt(i + 3);
            columnFive += plaintext.charAt(i + 4);
            columnSix += plaintext.charAt(i + 5);
            columnSeven += plaintext.charAt(i + 6);
            columnEight += plaintext.charAt(i + 7);
        }
    }
    var result = columnOne + columnTwo + columnThree + columnFour + columnFive
            + columnSix + columnSeven + columnEight;
    document.getElementById("columnarResultDisplay").innerHTML = "Result: " + result;
}

