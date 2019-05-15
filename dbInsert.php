<?php
/**
 * PHP code used to connect to a database and insert a new entry.
 */

    $servername = "localhost"; //name of server
    $username = "root"; //username for database access
    $password = "password"; //password for database access
    $dbname = "quiz"; //name of database being accessed
    
    $name = strip_tags($_POST['name']);
    $score = strip_tags($_POST['score']);

    $connection = new mysqli($servername, $username, $password,$dbname);
    
    if($connection->connect_error){
        die("Connection to database failed: " . $connection->connect_error);
    }
    
    $statement = "INSERT INTO `quizscores`(`Name`, `Score`) VALUES ('$name', '$score')";
    //SQL statement for insertion
    
    if($connection->query($statement) === TRUE){
        echo "Score added to database!";
    } else {
        echo "Error";
    }
    $connection->close();
