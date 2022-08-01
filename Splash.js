$(function() {
    $("#submenu").hide();
	$("#button").click(function() {
        $("#submenu").slideToggle(450);
    });
}); 

function function1() {
  document.getElementById("results").classList.add("results");
  
}

function function2() {
  document.getElementById("subResults1").classList.toggle("results");
  document.getElementById("subResults2").classList.remove("results");
  document.getElementById("subResults3").classList.remove("results");
  document.getElementById("subResults4").classList.remove("results");
}
function function3() {
  document.getElementById("subResults2").classList.toggle("results");
  document.getElementById("subResults1").classList.remove("results");
  document.getElementById("subResults3").classList.remove("results");
  document.getElementById("subResults4").classList.remove("results");
}
function function4() {
  document.getElementById("subResults3").classList.toggle("results");
  document.getElementById("subResults1").classList.remove("results");
  document.getElementById("subResults2").classList.remove("results");
  document.getElementById("subResults4").classList.remove("results");
}
function function5() {
  document.getElementById("subResults4").classList.toggle("results");
  document.getElementById("subResults1").classList.remove("results");
  document.getElementById("subResults2").classList.remove("results");
  document.getElementById("subResults3").classList.remove("results");
}
