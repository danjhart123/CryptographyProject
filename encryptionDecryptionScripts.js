var columnOne;
var columnTwo;
var columnThree;
var columnFour;
var columnFive;
var columnSix;
var columnSeven;
var columnEight;
var railOne;
var railTwo;
var railThree;
var railFour;
var railFive;
var railSix;
var railSeven;
var railEight;


function vEncrypt(vPlainText, vKeyArray) {
    var vResult = "";
    var j = 0;
    var htmlAlphabetStart = 65;
    var htmlAlphabetEnd = 90;
    var htmlUppercaseAlphabetStart = 97;
    var spaceValue = 32;
    var alphabetOffset = 26;

    for (var i = 0; i < vPlainText.length; i++) {
        if (j === vKeyArray.length) {
            j = 0;
        }
        var cipherChar = vPlainText.charCodeAt(i);
        if (cipherChar === spaceValue) {
            vResult += String.fromCharCode(cipherChar);
        } else {
            if (cipherChar >= htmlAlphabetStart && cipherChar <= htmlAlphabetEnd) {
                vResult += String.fromCharCode((cipherChar - htmlAlphabetStart +
                        vKeyArray[j]) % alphabetOffset + htmlAlphabetStart);
                j++;
            } else {
                vResult += String.fromCharCode((cipherChar - htmlUppercaseAlphabetStart +
                        vKeyArray[j]) % alphabetOffset + htmlUppercaseAlphabetStart);
                j++;
            }
        }
    }
    document.getElementById("vResultDisplay").innerHTML = "Result: " + vResult;
}

function vDecrypt(vCipherText, dKeyArray) {
    var plainText = "";
    var j = 0;
    var htmlAlphabetStart = 65;
    var htmlAlphabetEnd = 90;
    var htmlLowercaseAlphabetStart = 97;
    var spaceValue = 32;
    var alphabetOffset = 26;

    for (var i = 0; i < vCipherText.length; i++) {
        if (j === dKeyArray.length) {
            j = 0;
        }
        var cipherChar = vCipherText.charCodeAt(i);
        if (cipherChar === spaceValue) {
            plainText += String.fromCharCode(cipherChar);
        } else {
            if (cipherChar >= htmlAlphabetStart && cipherChar <= htmlAlphabetEnd) {
                plainText += String.fromCharCode((cipherChar - htmlAlphabetStart
                        - dKeyArray[j] + alphabetOffset) % alphabetOffset + htmlAlphabetStart);
                j++;
            } else {
                plainText += String.fromCharCode((cipherChar - htmlLowercaseAlphabetStart
                        - dKeyArray[j] + alphabetOffset) % alphabetOffset + htmlLowercaseAlphabetStart);
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
    var htmlAlphabetStart = 65;
    var keyOffset = 32;

    for (var i = 0; i < vKey.length; i++) {
        var keyCharValue = vKey.charCodeAt(i);
        keyValueArray.push((keyCharValue - htmlAlphabetStart) % keyOffset);
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
    var htmlAlphabetStart = 65;
    var htmlLowercaseAlphabetStart = 97;
    var spaceValue = 32;
    var alphabetOffset = 26;

    for (var i = 0; i < plainText.length; i++) {
        var plainTextChar = plainText[i].charCodeAt();
        if (plainTextChar === spaceValue) {
            result = result + String.fromCharCode(plainTextChar);
        } else {
            var cipherTextChar = ((plainTextChar - htmlAlphabetStart + key) %
                    alphabetOffset) + htmlLowercaseAlphabetStart;
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
    var htmlAlphabetStart = 65;
    var htmlLowercaseAlphabetStart = 97;
    var spaceValue = 32;
    var alphabetOffset = 26;

    for (var i = 0; i < plainText.length; i++) {
        var plainTextChar = plainText[i].charCodeAt();
        if (plainTextChar === spaceValue) {
            result = result + String.fromCharCode(plainTextChar);
        } else {
            var cipherTextChar = ((plainTextChar - htmlAlphabetStart - key +
                    alphabetOffset) % 26) + htmlLowercaseAlphabetStart;
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

function clearRails(){
    railOne = '';
    railTwo = '';
    railThree = '';
    railFour = '';
    railFive = '';
    railSix = '';
    railSeven = '';
    railEight = '';
}

function railCipher2(plainText) {
    
    clearRails();

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
    
    clearRails();

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
    
    clearRails();

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
    clearRails();

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
    clearRails();

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
    clearRails();

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
    
    clearRails();
    
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

function clearColumns(){
    columnOne = '';
    columnTwo = '';
    columnThree = '';
    columnFour = '';
    columnFive = '';
    columnSix = '';
    columnSeven = '';
    columnEight = '';
}

function columnarCipher(plaintext) {
    
    clearColumns();
    
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
    
    clearColumns();

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

    clearColumns();

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

    clearColumns();
    
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

    clearColumns();

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

    clearColumns();

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

    clearColumns();

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

