var canvas = new fabric.Canvas("myCanvas");

ball_x_pos = 0;
ball_y_pos = 0;

hole_x_pos = 800;
hole_y_pos = 400;

hole_width = 30;
hole_height = 30;

var ball_img_object = "";
var hole_img_object = "";

function load_img() {
	fabric.Image.fromURL("golf-h.png", function(Img){
        hole_img_object = Img;
        hole_img_object.scaleToHeight(50);
        hole_img_object.scaleToWidth(50);
        hole_img_object.set({
            top:hole_y_pos,
            left:hole_x_pos
        });
        canvas.add(hole_img_object);
    });	
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function(Img){
		ball_img_object = Img;
		ball_img_object.scaleToHeight(50);
		ball_img_object.scaleToWidth(50);
		ball_img_object.set({
			top:ball_y_pos,
			left:ball_x_pos
		});
	canvas.add(ball_img_object); 
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x_pos == hole_x_pos && ball_y_pos == hole_y_pos) {
		canvas.remove(ball_img_object); 
		document.getElementById("hd3").innerHTML = "Congrats, you've won the game!";
		document.getElementById("myCanvas").style.borderColor = "red";
	} else{
		if(keyPressed == '38')
		{
			up();
			console.log("The ball rolled up!");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("The ball rolled down!");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("The ball moved to the left!");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("The ball moved to the right!");
		}
	}
	
	function up()
	{
		if(ball_y_pos >= 0) {
			ball_y_pos = ball_y_pos - 10;
			console.log("The x coordinate of the ball is: "+ ball_x_pos+ " and the y coordinate is: "+ball_y_pos);
			canvas.remove(ball_img_object);
			new_image(); 
		}
	}

	function down()
	{
		if(ball_y_pos <= 550) {
			ball_y_pos = ball_y_pos + 10;
			console.log("The x coordinate of the ball is: "+ ball_x_pos+ " and the y coordinate is: "+ball_y_pos);
			canvas.remove(ball_img_object);
			new_image(); 
		}
	}

	function left()
	{
		if(ball_x_pos >= 0) {
			ball_x_pos = ball_x_pos - 10;
			console.log("The x coordinate of the ball is: "+ ball_x_pos+ " and the y coordinate is: "+ball_y_pos);
			canvas.remove(ball_img_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_x_pos <= 950) {
			ball_x_pos = ball_x_pos + 10;
			console.log("The x coordinate of the ball is: "+ ball_x_pos+ " and the y coordinate is: "+ball_y_pos);
			canvas.remove(ball_img_object);
			new_image();
		}
	}
	
}

