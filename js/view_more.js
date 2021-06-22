// $(function(){
//     $(".image-hidden").slice(0,3).show();
//     $("#viewMore").on('click',function(e){
//         e.preventDefault();
//         $(".image-hidden:hidden").slice(0,3).slideDown();
//         if($("image-hidden:hidden").length==0){
//             $()
//         }
//     });
// });

$(function () {
    $(".moreBox").slice(0, 3).show();
      if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
      }   
      $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).slideDown();
        if ($(".moreBox:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
      });
    });