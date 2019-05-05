var cCounter = 0;
var vCounter = 0;
var rCounter = 0;
var ctCounter = 0;
var startMessage;
var sectionOne;
var sectionTwo;
var sectionThree;
var sectionFour;
var sectionFive;
var tool;
var tool2;

function setCaesarValues(){
    startMessage = document.getElementById("cStartMessage");
    sectionOne = document.getElementById("cSectionOne");
    sectionTwo = document.getElementById("cSectionTwo");
    sectionThree = document.getElementById("cSectionThree");
    sectionFour = document.getElementById("cSectionFour");
    sectionFive = document.getElementById("cSectionFive");
    tool = document.getElementById("caesarLessonTool");
    tool2 = document.getElementById("caesarLessonTool2");
}

function caesarLoadNextSection() {
    cCounter++;
    setCaesarValues();

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
    setCaesarValues();

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

function setVigenereValues(){
    startMessage = document.getElementById("vStartMessage");
    sectionOne = document.getElementById("vSectionOne");
    sectionTwo = document.getElementById("vSectionTwo");
    sectionThree = document.getElementById("vSectionThree");
    sectionFour = document.getElementById("vSectionFour");
    sectionFive = document.getElementById("vSectionFive");
    tool = document.getElementById("vigenereLessonTool");
    tool2 = document.getElementById("vigenereLessonTool2");
}

function vigenereLoadNextSection() {
    vCounter++;
    setVigenereValues();

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
    setVigenereValues();

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

function setRailValues(){
    startMessage = document.getElementById("rStartMessage");
    sectionOne = document.getElementById("rSectionOne");
    sectionTwo = document.getElementById("rSectionTwo");
    sectionThree = document.getElementById("rSectionThree");
    sectionFour = document.getElementById("rSectionFour");
    sectionFive = document.getElementById("rSectionFive");
    tool = document.getElementById("railTool");
}

function railLoadNextSection() {
    rCounter++;
    setRailValues();

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
        tool.style.display = "block";
    }
    if (rCounter === 4) {
        sectionThree.style.display = "none";
        tool.style.display = "none";
        sectionFour.style.display = "block";
    }
    if (rCounter === 5) {
        sectionFour.style.display = "none";
        sectionFive.style.display = "block";
    }
}

function railLoadPreviousSection() {
    rCounter--;
    setRailValues();

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
        tool.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (rCounter === 3) {
        sectionFour.style.display = "none";
        sectionThree.style.display = "block";
        tool.style.display = "block";
    }
}

function setColumnValues(){
    startMessage = document.getElementById("ctStartMessage");
    sectionOne = document.getElementById("ctSectionOne");
    sectionTwo = document.getElementById("ctSectionTwo");
    sectionThree = document.getElementById("ctSectionThree");
    sectionFour = document.getElementById("ctSectionFour");
    sectionFive = document.getElementById("ctSectionFive");
    tool = document.getElementById("columnLessonTool");    
}
function columnLoadNextSection() {
    ctCounter++;
    setColumnValues();
    
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
        tool.style.display = "block";
    }
    if (ctCounter === 4) {
        sectionThree.style.display = "none";
        tool.style.display = "none";
        sectionFour.style.display = "block";
        
    }
    if (ctCounter === 5) {
        sectionFour.style.display = "none";
        sectionFive.style.display = "block";
    }
}

function columnLoadPreviousSection() {
    ctCounter--;
    setColumnValues();

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
        tool.style.display = "none";
        sectionTwo.style.display = "block";
    }
    if (ctCounter === 3) {
        sectionFour.style.display = "none";
        sectionThree.style.display = "block";
        tool.style.display = "block";
    }
}



