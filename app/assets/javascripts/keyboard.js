

function consoleprint() {
	$('.key').click(function(){
		console.log($(this).text());
	});
}

$(document).ready(function(){
	consoleprint();
  KeyboardHide();
  KeyboardShow();
  $("button").click(function(){
    $("#test").hide();

  });
});

class Keyboard {
	constructor(id){
		this.id = id;
	}
}

function myFunction(text) {
	if (text == "Bksp"){
		var t = ''
		var d = document.getElementById("field2").value.split("")
		var contador = 0
		for (e in d){
			if (contador < document.getElementById("field2").value.length -1){
				t += d[e];
				contador += 1;
			}				
		}
		document.getElementById("field2").value = t;
	}

	else if (text == "comillas"){
		document.getElementById("field2").value += '"';
	}
		

    else {
    	document.getElementById("field2").value += text;
    } 
    	
}

function KeyboardHide(){
  $("#p").click(function(){
    $('.key').hide();
  });
};

function KeyboardShow(){
  $("#p2").click(function(){
    $('.key').show();
  });
};
