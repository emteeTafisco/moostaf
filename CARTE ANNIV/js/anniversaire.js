$(function(){
 
 //apparition du boutton 2 apres click sur b1
 // avec un delai de 1000 ms

 $("#b1").click(function(){    
 	$("#b2").show(1000);
 })

//idem pour b3

 $("#b2").click(function(){
	$("#b3").show(1000);
 })

// Aussi pour b4

 $("#b3").click(function(){
 	$("#b4").show(1000);	
 })

 //Sur b4, tous mes boutons disparaissent et le background 
 // Rafraichir la page pour redemarrer la carte svp

 $("#b4").click(function() 
 {
 	$("body").css("background-image","url('../anniv.gif')");
    $("#b1,#v1,#v2,#v3").hide(500);
   	
 })

 


});