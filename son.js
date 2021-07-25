//setting all variables
var setupsidetoggle = document.getElementById("setuptoggle");
var gamesidetoggle = document.getElementById("participants_button");
var geimar = document.getElementById("geimar");
var setup = document.getElementById("setup");


//togglee functions
setupsidetoggle.addEventListener('click',function(){
setup.className="close";
geimar.className= "open";
});
gamesidetoggle.addEventListener('click',function(){
setup.className="open";
geimar.className= "close";
});
//Setting all variables

var display = document.getElementById("adder");
var textbox = document.getElementById("box");
var ada = document.getElementById("eda");
var names = [ "HOST" ];


//setting the functions that get the names

ada.addEventListener("click", function(){
if(textbox.value==""){
alert("You have not entered a name");
}else{
var newName = document.createElement("li");
newName.innerHTML = textbox.value;
display.appendChild(newName);
names.push(textbox.value);
console.log(names);
textbox.value = "";
}
});
document.addEventListener("keyup", function(){
if(event.keyCode==13){
if(textbox.value==""){
alert("You have not entered a name");
}else{
var newName = document.createElement("li");
newName.innerHTML = textbox.value;
display.appendChild(newName);
names.push(textbox.value);
console.log(names);
textbox.value = "";
}
}
});
// now its real js goin on here

// some more variables

var chal = document.getElementById("display");
var sound = document.getElementById("sond");
var spark = document.getElementById("play");

var com = [ "car","goat","dog","cat","welding machine","grinding mill","singer","ocean","zebra","cobra","phone ringing","lion roaring","airplane","ship","doorbell","a kid throwing a tantrum","a phone ringing","microwave","car braking","busy street","person typing","piano","flute","harmonica"] ;

spark.addEventListener("click",function(){
var mix = "Hey there,"+names[Math.floor(Math.random()*names.length)]+",your challenge is to try to sound like a          "+com[Math.floor(Math.random()*com.length)]+"      for five seconds";
chal.innerHTML = mix;
talk();
});
function talk(){
var ut = new SpeechSynthesisUtterance(chal.innerHTML);
ut.rate = 1;
speechSynthesis.speak(ut);
}

var timerdisplay = document.getElementById("timerdisplay");
var timerbutton = document.getElementById("timertap");

timerbutton.addEventListener('click',function(){
var counter = 6;
setInterval( function(){
counter--;
if(counter >= 0){
timerdisplay.innerHTML = counter;
}
if(counter === 0){
timerdisplay.innerHTML ="COMPLETE";
}
},1000);
});
