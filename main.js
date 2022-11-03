var canvas = new fabric.Canvas('myCanvas');

blockImgWidth = 30;
blockImgHeight = 30;

playerX=10;
playerY=10;

var playerObject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObj=Img;

        blockImgObj.scaleToWidth(blockImgWidth);
        blockImgObj.scaleToHeight(blockImgHeight);
        blockImgObj.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImgObj);
    });
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift key pressed together");
        blockImgWidth=blockImgWidth+10;
        blockImgHeight=blockImgHeight+10;
        document.getElementById("currentWidth").innerHTML=blockImgWidth;
        document.getElementById("currentHeight").innerHTML=blockImgHeight;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift key pressed together");
        blockImgWidth=blockImgWidth-10;
        blockImgHeight=blockImgHeight-10;
        document.getElementById("currentWidth").innerHTML=blockImgWidth;
        document.getElementById("currentHeight").innerHTML=blockImgHeight;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '87'){
        newImage('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '71'){
        newImage('ground.png');
        console.log("g");
    }
    if(keyPressed == '76'){
        newImage('light_green.png');
        console.log("l");
    }
    if(keyPressed == '84'){
        newImage('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == '82'){
        newImage('roof.jpg');
        console.log("r");
    }
    if(keyPressed == '89'){
        newImage('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed == '68'){
        newImage('dark_green.png');
        console.log("d");
    }
    if(keyPressed == '85'){
        newImage('unique.png');
        console.log("u");}
   }
   function up()
   {
    if(playerY>=0)
    {
        playerY =playerY - blockImgHeight;
        console.log("block image height=" + blockImgHeight);
        console.log("When Up arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }
   function down()
   {
    if(playerY<=500)
    {
        playerY =playerY + blockImgHeight;
        console.log("block image height=" + blockImgHeight);
        console.log("When Down arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }
   function right()
   {
    if(playerX<=850)
    {
        playerX =playerX + blockImgWidth;
        console.log("block image width=" + blockImgWidth);
        console.log("When Right arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }
   function left()
   {
    if(playerX>=0)
    {
        playerX =playerX - blockImgWidth;
        console.log("block image width=" + blockImgWidth);
        console.log("When Left arrow key is presses, X = " + playerX+" , Y =" +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
   }