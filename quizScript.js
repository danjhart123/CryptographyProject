const quizQuestions = [
    {
        prompt: "Question 1: What type of cipher uses substitution and one alphabet?",
        answer1: "a: Vigen&egrave;re",
        answer2: "b: Caesar",
        answer3: "c: Rail-fence",
        answer4: "d: Columnar transpostion",
        correctAnswer: "b"
    },
    {
        prompt: "Question 2: What type of arithmetic makes the Caesar cipher possible?",
        answer1: "a: Modular",
        answer2: "b: Multiplication",
        answer3: "c: Fractions",
        answer4: "d: Polynomial",
        correctAnswer: "a"
    },
    {
        prompt: "Question 3: What is the correct encryption of the word 'goodmorning'\n\
                when encrpyted using the Caesar cipher with a shifting value of 8?",
        answer1: "a: lffiepqwmfp",
        answer2: "b: okkqwopfdbv",
        answer3: "c: ammthfiwpdj",
        answer4: "d: owwluwzvqvo",
        correctAnswer: "d"
    },
    {
        prompt: "Question 4: What is the correct decryption of the ciphertext 'nzxafepcdntpynp'\n\
                which has been encrpyted using the Caesar cipher with a shifting value of 11?\n\
                (ignore spaces)",
        answer1: "a: i do not know help",
        answer2: "b: encryption rules",
        answer3: "c: computer science",
        answer4: "d: software engineer",
        correctAnswer: "c"
    },
    {
        prompt: "Question 5: What does a transposition cipher do?",
        answer1: "a: replaces letters in the plaintext for different letters",
        answer2: "b: i do not know help",
        answer3: "c: removes random letters, changing the length of the plaintext",
        answer4: "d: re-orders the letters in the plaintext but does not replace them",
        correctAnswer: "d"
    },
    {
        prompt: "Question 6: Which of these ciphers are transposistion ciphers?",
        answer1: "a: caesar cipher and viginere cipher",
        answer2: "b: rail-fence cipher and caesar cipher",
        answer3: "c: rail-fence cipher and columnar transposition cipher",
        answer4: "d: vigenere cipher and columnar transposition cipher",
        correctAnswer: "c"
    },
    {
    prompt: "Question 7: What is the correct encryption of the word 'helloworld'\n\
                when encrpyted using the rail-fence cipher with 6 rails?",
        answer1: "a: holelwrdlo",
        answer2: "b: hedlllroow",
        answer3: "c: helldolwro",
        answer4: "d: hloolelwrd",
        correctAnswer: "b"
    },
    {
    prompt: "Question 8: What is the correct encryption of the word 'railfencecipher'\n\
                when encrpyted using the rail-fence cipher with 8 rails?",
        answer1: "a: rraeihlpfiecnec",
        answer2: "b: rifneihraleccpe",
        answer3: "c: rnhaecpeifeirlc",
        answer4: "d: reaccinirlepefh",
        correctAnswer: "a"
    },
    {
    prompt: "Question 9: What is the correct encryption of the word 'computerscientist'\n\
                when encrpyted using the columnar transpostion cipher with 6 columns?",
        answer1: "a: criossmctpiuetnet",
        answer2: "b: cstocmipeuntteirs",
        answer3: "c: cusntotctmeiipres",
        answer4: "d: cmuesinitoptrcets",
        correctAnswer: "c"
    },
    {
    prompt: "Question 10: What is the correct encryption of the word 'columnartranspositioncipher'\n\
                when encrpyted using the columnar transpostion cipher with 3 columns?",
        answer1: "a: cuarssichomrapioielntnotnpr",
        answer2: "b: cmtsinhonrptcelaaoiirurnsop",
        answer3: "c: casihorpoeltonrurscmaiinntp",
        answer4: "d: crocotsilripuathmniensorapn",
        correctAnswer: "a"
    },
    {
    prompt: "Question 11: Which cipher uses a look-up table to aid in its encryption\n\
/decryption?",
        answer1: "a: columnar transposition",
        answer2: "b: rail-fence",
        answer3: "c: caesar",
        answer4: "d: Vigen&egrave;re",
        correctAnswer: "d"
    },
    {
    prompt: "Question 12: Which cipher uses a wheel to aid in its encryption/decryption?",
        answer1: "a: columnar transposition",
        answer2: "b: rail-fence",
        answer3: "c: caesar",
        answer4: "d: Vigen&egrave;re",
        correctAnswer: "c"
    },
    {
    prompt: "Question 13: What is the correct encryption of the word 'softwareengineering'\n\
                when encrpyted using the Vigen&egrave;re cipher with a key of 'year'?",
        answer1: "a: qsfkuervcrgzlieigrg",
        answer2: "b: zsqekhvppbnmypsymyr",
        answer3: "c: ocwezwfvpqcwephnwer",
        answer4: "d: sphwwbtheoilnfguioi",
        correctAnswer: "a"
    },
    {
    prompt: "Question 14: What is the correct encryption of the word 'vigenerecipher'\n\
                when encrpyted using the Vigen&egrave;re cipher with a key of 'hello'?",
        answer1: "a: rwxpqafvnllvvc",
        answer2: "b: vjihnfthcjrkes",
        answer3: "c: omyxgijxvmhaxv",
        answer4: "d: cmrpblvpnwwlpc",
        correctAnswer: "d"
    },
    {
        prompt: "Question 15: What is the correct decryption of the ciphertext 'xwsthxvvewbwyk'\n\
                which has been encrpyted using the Vigen&egrave;re cipher with a key of 'computer'?\n\
                (ignore spaces)",
        answer1: "a: vigenere cipher",
        answer2: "b: this is the one",
        answer3: "c: caesar cipher",
        answer4: "d: software engineer",
        correctAnswer: "a"
    },
    {
        prompt: "Question 1: What type of cipher uses substitution and multiple alphabet?",
        answer1: "a: Vigen&egrave;re",
        answer2: "b: Caesar",
        answer3: "c: Rail-fence",
        answer4: "d: Columnar transpostion",
        correctAnswer: "a"
    }
];

var score = 0;
var questionNumber = 0;

function checkQuestion() {
    var answer = document.getElementById("answer").value;
    var correct = quizQuestions[questionNumber].correctAnswer;
    if(answer === ""){
        alert("Please enter an answer before submitting");
    }
    else if (answer.length > 1){
        alert("invalid answer - please choose a,b,c or d!");
    }
    else if (answer === correct) {
        alert("Correct Answer!");
        score++;
        questionNumber++;
    } else {
        alert("Incorrect Answer!");
        questionNumber++;
    }

    var count = document.getElementById("scoreCount");
    count.innerHTML = score + "/" + quizQuestions.length;
    
    if(questionNumber === quizQuestions.length){
    setScore();
    }
    loadQuestion();
}
function hideStartButton(){
    var button = document.getElementById("startButton");
    button.style.display = "none";
}
function loadQuestion() {
    hideStartButton();
    loadAnswerBox();
    var display = document.getElementById("question");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var count = document.getElementById("scoreCount");
    display.innerHTML = quizQuestions[questionNumber].prompt;
    answer1.innerHTML = quizQuestions[questionNumber].answer1;
    answer2.innerHTML = quizQuestions[questionNumber].answer2;
    answer3.innerHTML = quizQuestions[questionNumber].answer3;
    answer4.innerHTML = quizQuestions[questionNumber].answer4;
    count.innerHTML = score + "/" + quizQuestions.length;


}

function loadAnswerBox() {
    var input = document.getElementById("quizInput");
    input.style.display = "block";
}

function setScore() {
    var scoreDiv = document.getElementById("leaderBoardEntry");
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = score;
    scoreDisplay.value = score;
    scoreDiv.style.display = "block";
    
}

function addScore(){
    var name = document.getElementById("name").value;
    var score = parseInt(document.getElementById("score").value);
    var dataString = "name=" + name + "&score=" + score;
    
    $.ajax({
        type: "POST",
        url: "dbInsert.php",
        data: dataString,
        cache: false,
        success: function(html){
            alert(html);
        }
    });
}