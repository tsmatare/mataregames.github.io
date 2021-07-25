function toggleFullscreen(elem) {
elem = elem || document.documentElement;

if( !document.fullscreenElement && !document.mozFullScreenElement &&
!document.webkitFullScreenElement && !document.msFullscreenElement){
if (elem.requestFullScreen) {
elem.requestFullScreen();
} else if (elem.msRequestFullscreen) {
elem.msRequestFullScreen();
} else if (elem.mozRequestFullScreen) {
elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
elem.webkitRequestFullcreen(Element.ALLOW_KEYBOARD_INPUT);
}
}else{
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.msExitFullscreen) {
document.msExitFullscreen();
} else if (document.mozCancelFullScreen){
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen){
document.webkitExitFullscreen();
}
}
}
document.getElementById("full_button").addEventListener('click', function(){
toggleFullscreen();
});