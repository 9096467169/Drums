
for(var i= 0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function(){
 
   keyword(this.innerHTML);
   animation(this.innerHTML);

});
}
document.addEventListener("keypress",function(event){
   keyword(event.key);
   animation(event.key);
});
 
function keyword(key)
{
   switch(key)
   {
    case 'w':
       var audio=new Audio('sounds/tom-4.mp3');
       audio.play();
       break;
 
       case 'a':
          var audio=new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
        
          case 's':
             var audio=new Audio('sounds/tom-2.mp3');
             audio.play();
             break;
 
             case 'd':
                var audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
 
                case 'j':
                   var audio=new Audio('sounds/kick-bass.mp3');
                   audio.play();
                   break;
        
                   case 'k':
                      var audio=new Audio('sounds/crash.mp3');
                      audio.play();
                      break;
 
                      case 'l':
                         var audio=new Audio('sounds/snare.mp3');
                         audio.play();
                         break;
 
                         default:
                            alert("Please press a valid button");
 
   }
}

function animation(currentkey)
{
   document.querySelector("."+ currentkey).classList.add("pressed");

   setTimeout(function(){
      document.querySelector("."+ currentkey).classList.remove("pressed");
   },100);

}