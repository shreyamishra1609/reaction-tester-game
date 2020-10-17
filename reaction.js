
window.start=new Date().getTime();

function color(){
  var letters = '0123456789ABCDEF';
  var color="#";
  for(i=0;i<6;i++){
      color=color+letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function shape(){
var top=Math.random ()*400+20;
var left=Math.random ()*400+20;
var width=Math.random ()*400+20;
var height=Math.random ()*400+20;
if (Math.random()>0.5)
document.getElementById("shape").style.borderRadius="50%";
else
document.getElementById("shape").style.borderRadius="0%";

document.getElementById("shape").style.marginTop= top+"px";
document.getElementById("shape").style.marginLeft= left+"px";
document.getElementById("shape").style.width= width+"px";
document.getElementById("shape").style.height= height+"px";
 document.getElementById("shape").style.backgroundColor=color();
}


function myfunc(){
shape();
 var end=new Date().getTime();
 var time=(end - start) / 1000;
 if(time<1){
  document.getElementById("time").innerHTML = time + "s" +" " + "wowww keep going! you are doing great";}
  else{
       document.getElementById("time").innerHTML = time + "s" +" " + " keep going! you can do it more quick";}
  
  start=end;
                
}