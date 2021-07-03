<?php

try{
    $conn=new PDO("mysql:host=aisayam.com;dbname=aisayamc_nerdySite;",'aisayamc_nerdyadmin','Nerdypass123');
    echo "<script>console.log('connection successful');</script>";
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    // echo $e;
    echo "<script>window.alert('connection error');</script>";
}

?>