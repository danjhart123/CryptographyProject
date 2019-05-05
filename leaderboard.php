<!DOCTYPE html>
<html>
    <head>
        <title>Quiz Leaderboard</title>
        <link rel="stylesheet" href ="mystyle.css">
        <link rel="stylesheet" href ="tableStyle.css">
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
        <h1>Quiz Leaderboard</h1>
        
            <table class="center">
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                <?php
                $connection = mysqli_connect("localhost", "root", "password", "quiz");
                if ($connection->connect_error) {
                    die("Connection to database failed: " . $connection->connect_error);
                }

                $statement = "SELECT * FROM `quizscores` ORDER BY `quizscores`.`Score` DESC";

                $result = $connection->query($statement);
                $rank = 1;
                if ($result->num_rows > 0) {

                    while ($row = $result->fetch_assoc()) {
                        echo "<tr><td>{$rank}</td>
                    <td>{$row["Name"]}</td>
                    <td>{$row["Score"]}</td></tr>";
                        $rank++;
                    }
                    echo "</table>";
                } else {
                    echo "No entries yet";
                }
                $connection->close();
                ?>

            </table>
        
    </body>


</html>