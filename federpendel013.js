﻿var canvas = document.getElementById('canvas');
var sliderMasse = document.getElementById("masse");
var sliderErdbeschleunigung = document.getElementById("erdbeschleunigung");
var r;
var schwerkraft; 
var erdbeschleunigung;
var letzteMausPos = new Vector2D(0, 0);
var aufhaengung = new Vector2D(canvas_bg.width / 2, canvas_bg.height * 0.10);	
var isDragging = false;
	
	ball.velo2D = new Vector2D(0, 0);

	
   canvas.addEventListener('mousedown', function () {
      canvas.addEventListener('mousemove',onDrag,false);
      canvas.addEventListener('mouseup',onDrop,false);
   
   }, false);	
	
	


function onDrag(evt){
	
	if ((ball.x - evt.clientX)*(ball.x - evt.clientX) + (ball.y - evt.clientY) * (ball.y - evt.clientY) < 3000) {
		//var maus = new Vector2D(mouseX, mouseY);		
		isDragging = true;
		ball.x = (ball.x - evt.clientX) / 3 + evt.clientX;
		ball.y = (ball.y - evt.clientY) / 3 + evt.clientY;
		
	}
}

function onDrop(evt){
	isDragging = false;
	canvas.removeEventListener('mousemove',onDrag,false);
	canvas.removeEventListener('mouseup',onDrop,false);
	ball.velo2D = new Vector2D(0, 0);	
}



	D = sliderFederkonstante.value;
	m = sliderMasse.value;
	g = sliderErdbeschleunigung.value;
	schwerkraft = new Vector2D(0, m * g);
	
	if (isDragging==false){
	}		
	else {
		
	}
   //var radius = 20;

	context.lineWidth = 2;
	context.strokeStyle = "#0088FF"; 
	context.beginPath();
	context.moveTo(canvas.width / 2, canvas_bg.height * 0.10);
	context.lineTo(ball.pos2D.x, ball.pos2D.y);
	context.stroke();
	


	
	force = Forces.add([force, schwerkraft]);





