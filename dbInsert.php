<?php
    $servername = "localhost";
    $username = "root";
    $password = "password";
    $dbname = "quiz";
    
    $name = strip_tags($_POST['name']);
    $score = strip_tags($_POST['score']);

    $connection = new mysqli($servername, $username, $password,$dbname);
    
    if($connection->connect_error){
        die("Connection to database failed: " . $connection->connect_error);
    }
    
    $statement = "INSERT INTO `quizscores`(`Name`, `Score`) VALUES ('$name', '$score')";
    
    if($connection->query($statement) === TRUE){
        echo "Score added to database!";
    } else {
        echo "Error";
    }
    $connection->close();
