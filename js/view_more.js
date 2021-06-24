
$(function () {
  $("#loadMore").on('click', function (e) {
    e.preventDefault();

    let classList = ["gallery-block","mix", "all" , "col-lg-4", "col-md-6" , "col-sm-12"];


    for(var i=1 ; i<=7 ; i++){
      var element;
      element = document.getElementById("hiddenBox"+i);
      element.classList.add(...classList);
      $(element).fadeIn("slow");
    }

    // var element1 = document.getElementById("hiddenBox1");
    // var element2 = document.getElementById("hiddenBox2");
    // var element3 = document.getElementById("hiddenBox3");


    // console.log(element1);
    // element1.classList.add(...classList);
    // element1.style.display = "inline-block";

    // element2.classList.add(...classList);
    // element2.style.display = "inline-block";

    // element3.classList.add(...classList);
    // element3.style.display = "inline-block";
  });
});