


var start = new Date ().getTime();
function makeShapeAppear(params) {
    document.getElementById("shape").style.display="block";
}
function appearShapeAfterDelay (){
    setTimeout(makeShapeAppear,Math.random()*2000);
}
appearShapeAfterDelay();



document.getElementById("shape").onclick = function(){

    var end = new Date ().getTime();

    var timeTaken = (end-start)/1000;
    document.getElementById("shape").style.display="none";
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
  appearShapeAfterDelay();
};




