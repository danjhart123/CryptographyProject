<!DOCTYPE html>
<script type="text/javascript" src="quizScript.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<html>
    <head>
        <title>Quiz </title>
        <link rel="stylesheet" href ="mystyle.css">
    </head>
    <header>
        <div class="topnav">
            <a class="active" href="index.html">Home</a>
            <a href="caesar.html">Caesar Cipher</a>
            <a href="vigenere.html">Vigen&egrave;re Cipher</a>
            <a href="railfence.html">Rail-fence Cipher</a>
            <a href="columnar.html">Columnar Transposition Cipher</a>
            <a href="lessonIndex.html">Learning</a>
            <a href="tasks.html">Tasks and Games</a>
            <a href="quiz.php">Quiz</a>
            <a href="leaderboard.php">Leaderboard</a>
        </div>
    </header>
    <body>
        <h1> Quiz </h1>



        <div id="startButton">
            <input type="button" onclick="loadQuestion()" value="Start Quiz"/>
        </div>
        
        <div id="finishMessage">
            <p>
                Congratulations! You completed the quiz! Share your
        score with everyone by entering your name to the leaderboard!
            </p>
        </div>

        <div id="wholeQuiz">
            <div id="question"></div>
            <br>
            <div id="answer1"></div>
            <br>
            <div id="answer2"></div>
            <br>
            <div id="answer3"></div>
            <br>
            <div id="answer4"></div>
            <br>
            <div id="quizInput">
                <form name="quizAnswer">
                    Answer:<br><input type="text" id="answer"/>
                    <input type="button" onclick="checkQuestion()" value="Submit"/>
                </form>
            </div>
            <br>
            <div id="scoreCount"></div>

        </div>
        <div id="leaderBoardEntry">
            <form name="quizAnswer">
                Name for leaderboard:<input type="text" id="name"/>
                <br>
                Score: <div id="score"></div>
                <input type="button" onclick="addScore()" value="Submit"/>
            </form>
        </div>
    </body>


</html>