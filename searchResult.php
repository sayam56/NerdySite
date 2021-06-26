<?php
 require "dbconnect.php";


 if(isset($_POST['search-field'])) $searchText=$_POST['search-field'];

 if(empty($searchText)){
      echo "<script> console.log('searchText empty'); </script>";
     //  header('Location: index.html');
 }else{

     try{
          $search_query="SELECT destination_page FROM `search_router` WHERE keywords LIKE '%".$searchText."' ";
          $object=$conn->query($search_query);
          $row= $object->rowCount();
          while($row>0) {
               $row1= $object->fetchAll();
                    foreach ($row1 as $key) {
                         header('Location: '.$key[0]);
                         break;
                    }
               break;
          }
          if ($row==0)
          {
               header("Location: not-found.html");
               // echo "
               // <script> 
               // window.alert('No Search Result Found'); 
               // window.location = 'index.html';
               // </script>
               // ";
          }


          }/* try ends */

     catch(PDOException $e){
          echo "<script>window.alert('validation error');</script>";
          }

} /* else ends */


?>