
$(function () {
  $("#loadMore").on('click', function (e) {
    e.preventDefault();

    var loadbtnName = document.getElementById("loadBtnID");
  

    let classList = ["gallery-block","mix", "all" , "col-lg-4", "col-md-6" , "col-sm-12"];

    if(loadbtnName.innerHTML.localeCompare("View Less") == 0){

      for(var i=1 ; i<=12 ; i++){
        var element;
        element = document.getElementById("hiddenBox"+i);
        $(element).fadeOut("slow");
        // element.classList.remove(...classList);
      }

      loadbtnName.innerHTML = "View More";
    }
    else if(loadbtnName.innerHTML.localeCompare("View More") == 0){

      for(var i=1 ; i<=12 ; i++){
        var element;
        element = document.getElementById("hiddenBox"+i);
        element.classList.add(...classList);
        $(element).fadeIn("slow");
      }

      loadbtnName.innerHTML = "View Less";

    }

    
   




    // document.getElementById("loadBtnID").innerHTML = 'View Less';
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