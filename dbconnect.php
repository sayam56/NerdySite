<?php

try{
     $conn=new PDO("mysql:host=localhost;dbname=nerdysite;",'root','');
     echo "<script>console.log('connection successful');</script>";
     
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 }
 catch(PDOException $e){
     echo "<script>window.alert('connection error');</script>";
 }

?>