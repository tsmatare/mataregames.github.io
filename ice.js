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
var sound = document.getElementById("sond");

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
var spark = document.getElementById("play");

var com = [ "Would you rather eat a rat or cockroach","What is your favourite food","What is your favourite animal","What is your worst food","Would you rather have a pet snake or bat","What is your favourite sports team","Have you ever broken a limb","What is your dream car","What is your dream location","What is your worst fear","Who is your favourate musician","What are your hobbies","What is your most embarrassing moment tha you have had","Have you ever pranked someone","Have you ever been pranked","Have you ever been to another country","What would you do if you won a million dollars"] ;

spark.addEventListener("click",function(){
var mix = "Hey there,"+names[Math.floor(Math.random()*names.length)]+",  your question is:    "+com[Math.floor(Math.random()*com.length)]+"?";
chal.innerHTML = mix;
talk();
});
function talk(){
var ut = new SpeechSynthesisUtterance(chal.innerHTML);
ut.rate = 1;
speechSynthesis.speak(ut);
}


