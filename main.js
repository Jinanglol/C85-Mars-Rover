var canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images_array = ["img_1.jpg" , "img_2.jpg" , "img_3.jpg" , "img_4.jpg" ];
random_number = Math.floor(Math.random() * 4);
roverX = 10;
roverY = 10;
rover_width = 100;
rover_height = 90;

background_img = mars_images_array[random_number];
console.log("background_image = " + background_img);
rover_img = "rover.png";

function add(){
   background_imgTag =  new Image();
   background_imgTag.onload = uploadBackground;
   background_imgTag.src = background_img;

   rover_imgTag =  new Image();
   rover_imgTag.onload = uploadRover;
   rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag , roverX , roverY , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        console.log("up");

        up();
    }
    if(keyPressed == '40'){
        console.log("down");

        down();
    }

    if(keyPressed == '37'){
        console.log("left");

        left();
    }

    if(keyPressed == '39'){
        console.log("right");

        right();

    }
}

function up(){

    if(roverY >= 0 ){
        roverY = roverY - 10;
        console.log("When up arrow is pressed , x= " + roverX + " y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}

function down(){

    if(roverY <= 500 ){
        roverY = roverY + 10;
        console.log("When down arrow is pressed , x= " + roverX + " y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}

function left(){

    if(roverX >= 0 ){
        roverX = roverX - 10;
        console.log("When left arrow is pressed , x= " + roverX + " y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}

function right(){

    if(roverX <= 700 ){
        roverX = roverX + 10;
        console.log("When right arrow is pressed , x= " + roverX + " y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}