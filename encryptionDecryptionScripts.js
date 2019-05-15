var columnOne; //variables to be used in the encryption process
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


/**
 * Method to encrypt a string using the vigenere cipher.
 * @param {string} vPlainText - string to be encrypted
 * @param {int array} vKeyArray - array of encryption key values
 * @returns null
 */
function vEncrypt(vPlainText, vKeyArray) {
    var vResult = ""; //result string
    var j = 0; //counter
    var htmlAlphabetStart = 65; ////character code of the start of the alphabet in HTML
    var htmlAlphabetEnd = 90; //character code of the end of the alphabet in HTML
    var htmlUppercaseAlphabetStart = 97; //character code of the start of the uppercase alphabet in HTML
    var spaceValue = 32; //character code of the key space
    var alphabetOffset = 26; //number of letters in the alphabet

    for (var i = 0; i < vPlainText.length; i++) {
        if (j === vKeyArray.length) {
            j = 0;
        }
        var cipherChar = vPlainText.charCodeAt(i);
        if (cipherChar === spaceValue) {
            vResult += String.fromCharCode(cipherChar);
        } else {
            if (cipherChar >= htmlAlphabetStart && cipherChar <= htmlAlphabetEnd) { //checks for the case of the letter
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

/**
 * Method to decrypt a string using the vigenere cipher.
 * @param {string} vCipherText - string to be decrypted
 * @param {int array} dKeyArray - array of decryption key values
 * @returns null
 */
function vDecrypt(vCipherText, dKeyArray) {
    var plainText = ""; //result string
    var j = 0; //counter
    var htmlAlphabetStart = 65; ////character code of the start of the alphabet in HTML
    var htmlAlphabetEnd = 90; //character code of the end of the alphabet in HTML
    var htmlLowercaseAlphabetStart = 97; //character code of the start of the lowercase alphabet in HTML
    var spaceValue = 32; //character code of the key space
    var alphabetOffset = 26; //number of letters in the alphabet, used to ensure value is always positive

    for (var i = 0; i < vCipherText.length; i++) {
        if (j === dKeyArray.length) {
            j = 0;
        }
        var cipherChar = vCipherText.charCodeAt(i);
        if (cipherChar === spaceValue) {
            plainText += String.fromCharCode(cipherChar);
        } else {
            if (cipherChar >= htmlAlphabetStart && cipherChar <= htmlAlphabetEnd) { //checks for case of letter
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

/**
 * Method to set the values for vigenere decryption.
 * @returns null
 */
function setVigenereDecryptValues() {
    var vPlainText = document.getElementById("vCipherText").value;
    var vKey = document.getElementById("vDecryptKey").value;

    if (isNaN(vKey)) {
        getDecryptKeyValues(vPlainText, vKey);
    } else {
        alert("Incorrect input - letters needed");
    }
}

/**
 * Method to fill the int array that is used for vigenere decryption.
 * @param {string} vCipherText - string to be decrypted
 * @param {int array} vKey - the int array to be filled
 * @returns {undefined}
 */
function getDecryptKeyValues(vCipherText, vKey) {
    var keyValueArray = [];
    for (var i = 0; i < vKey.length; i++) {
        var keyCharValue = vKey.charCodeAt(i);
        keyValueArray.push((keyCharValue - 65) % 32); //% 32 done to ensure 
        //numbers are stored in array correctly
    }
    vDecrypt(vCipherText, keyValueArray);
}

/**
 * Method to fill the int array that is used for vigenere encryption.
 * @param {string} vPlainText - string to be encrypted
 * @param {int array} vKey - the int array to be filled
 * @returns {undefined}
 */
function getKeyValues(vPlainText, vKey) {
    var keyValueArray = [];
    var htmlAlphabetStart = 65;
    var keyOffset = 32;

    for (var i = 0; i < vKey.length; i++) {
        var keyCharValue = vKey.charCodeAt(i);
        keyValueArray.push((keyCharValue - htmlAlphabetStart) % keyOffset); 
        //% keyOffset done to ensure numbers are stored correctly
    }
    vEncrypt(vPlainText, keyValueArray);
}

/**
 * Method to set the values for vigenere encryption.
 * @returns null
 */
function setVigenereValues() {
    var vPlainText = document.getElementById("vPlainText").value;
    var vKey = document.getElementById("vKey").value;
    if (isNaN(vKey)) {
        getKeyValues(vPlainText, vKey);
    } else {
        alert("Incorrect input - letters needed");
    }
}

/**
 * Method to set the values for Caesar encryption.
 * @returns null
 */
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

/**
 * Method used to encrypt a string using a Caesar cipher.
 * @param {string} plainText - string to be encrypted
 * @param {int} key - number of values to shift
 * @returns {null}
 */
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
}

/**
 * Method to set the values for Caesar encryption.
 * @returns null
 */
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

/**
 * Method used to encrypt a string using a Caesar cipher.
 * @param {string} plainText - string to be encrypted
 * @param {int} key - number of values to shift
 * @returns {null}
 */
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
    }

/**
 * Method to set values for rail-fence cipher.
 * @returns null
 */
function setRailValue() {
    var plainText = document.getElementById("railPlainText").value;
    var key = parseInt(document.getElementById("railKey").value);
    //checks value of key and calls appropriate code
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

/**
 * Method to reset the values of the rails use in encryption.
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and three rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and two rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and four rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and five rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and six rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and seven rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to encrypt a string using the rail-fence cipher and eight rails.
 * @param {string} plainText - string to be encrypted
 * @returns null
 */
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

/**
 * Method to set the values for encryption using the rail-fence cipher
 * @returns null
 */
function setColumnValue() {

    var plainText = document.getElementById("columnarPlainText").value;
    var key = parseInt(document.getElementById("columnarKey").value);
    //checks the key value and calls the corresponding code
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

/**
 * Method to reset the columns used in encryption.
 * @returns null
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and two columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and three columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and four columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and five columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and six columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and seven columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

/**
 * Method to encrypt a string using the columnar transposition cipher and eight columns.
 * @param {string} plaintext - string to be encrypted
 * @returns {null}
 */
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

