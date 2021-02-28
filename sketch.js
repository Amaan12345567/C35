var databall;
var database


function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    databall = createSprite(250,250,10,10);
    databall.shapeColor = "red";

    var databallPosition = database.ref('ball/position')
    databallPosition.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    console.log(position.x)
    databall.x = position.x
    databall.y = position.y
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x + x, 
        'y':position.y = y
    })
}

function showError(){
    console.log("error in writing to the database")
}
