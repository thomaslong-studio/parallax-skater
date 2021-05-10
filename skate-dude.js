//Initial Root Variables
//Setup Objects
var canvas, stage;
var titlefield;

//backgrounds
var forground;
var forgroundb;
var midground;
var midgroundb;
var background1;
var background1b;
var background2;
var background2b;
var background3;
var background3b;

//game instructions
var controls;
var controls2;
var gameTitle;

//background widths
var forgroundwidth;
var midgroundwidth;
var background1width;
var background2width;
var background3width;

//gameplay parameters
//velocity
var xv = 0;
var yv = 0;
var spd = 10;
var gravity = 12;
var jumpHeight = -100;
var friction = .96;
//velocity for sky
var skyvel = .2;

//use number variables to set motion limits
var groundLevel = 510;
var ceiling = 300;
var leftLimit = 100;
var rightLimit = 600;

//use of booleans to keep track of keybard and character states
var cruising;
var speed;
var jump;
var rail;
var grab;

//using booleans to keep track keyboard states
var leftDown = false;
var rightDown = false;
var spaceBar = false;

//character and game objects
var skateDude;

//Initializing Function!
function init() {
    console.log("Initializing game");
    //basic createjs setup
    canvas = document.getElementById("gameCanvas");
    stage = new createjs.Stage(canvas);

    //
    loadSounds();

    //add backgrounds first due to stacking order(so they are behind the character)
    addBackgrounds();

    //preload any assets
    addSkateDude();

    addTextObj();

    //setup "ticker" loop (essentially your game engine... counting your frames)
    createjs.Ticker.fps = 30;
    createjs.Ticker.addEventListener("tick", onTick);

    //set initial event listeners for gameplay controls
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    stage.update();

}

function loadSounds() {
    console.log("Initializing Sounds...");

    //sound downloaded from https://freesound.org/people/PHetish/sounds/398883/
    createjs.Sound.registerSound("sounds/rollingSound.mp3", "rolling");

    createjs.Sound.registerSound("sounds/ollie_01.mp3", "ollie");

}

function addBackgrounds() {

    //add forground
    forground = new createjs.Bitmap("background-assets/forground.png")

    //adjust display properties
    forground.x = 0;
    forground.y = 500;
    //add forgroundb
    forgroundb = new createjs.Bitmap("background-assets/forground.png")
    //adjust display properties
    forgroundb.x = 0;
    forgroundb.y = 500;

    //add midground
    midground = new createjs.Bitmap("background-assets/midground.png")
    //adjust display properties
    midground.x = 0;
    midground.y = -50;
    //add midgroundb
    midgroundb = new createjs.Bitmap("background-assets/midground.png")
    //adjust display properties
    midgroundb.x = 0;
    midgroundb.y = -50;

    //add background1
    background1 = new createjs.Bitmap("background-assets/background1.png")
    //adjust display properties
    background1.x = -50;
    background1.y = -50;
    //add background1b
    background1b = new createjs.Bitmap("background-assets/background1.png")
    //adjust display properties
    background1b.x = -50;
    background1b.y = -50;

    //add background2
    background2 = new createjs.Bitmap("background-assets/background2.png")
    //adjust display properties
    background2.x = 0;
    background2.y = -50;
    //add background2b
    background2b = new createjs.Bitmap("background-assets/background2.png")
    //adjust display properties
    background2b.x = 0;
    background2b.y = -50;

    //add background3
    background3 = new createjs.Bitmap("background-assets/background3.png")
    //adjust display properties
    background3.x = 0;
    background3.y = -50;
    //add background3b
    background3b = new createjs.Bitmap("background-assets/background3.png")
    //adjust display properties
    background3b.x = 0;
    background3b.y = -50;

    //add to stage  
    stage.addChild(background1b);
    stage.addChild(background1);
    stage.addChild(background2b);
    stage.addChild(background2);
    stage.addChild(background3b);
    stage.addChild(background3);
    stage.addChild(midgroundb);
    stage.addChild(midground);
    stage.addChild(forgroundb);
    stage.addChild(forground);

    background1.image.onload = function () {
        background1width = background1.image.width;
    }
    background2.image.onload = function () {
        background2width = background2.image.width;
    }
    background3.image.onload = function () {
        background3width = background3.image.width;
    }
    midground.image.onload = function () {
        midgroundwidth = midground.image.width;
    }
    forground.image.onload = function () {
        forgroundwidth = forground.image.width;
    }
}

function addSkateDude() {
    console.log("Adding Character...")
    //load the spritesheet

    //create new instance of the charcter
    skateDude = new SkateDude();

    //add him to the stage
    stage.addChild(skateDude);

    //start in cruise position
    skateDude.cruising();

    //Animations loop by default, but you can change that with getAnimation
    SkateDude._SpriteSheet.getAnimation("jump").next = false;

    skateDude.x = 400;
    skateDude.y = 400;

    //add him to the stage
    stage.addChild(skateDude);

}

//add text for instructions and game title
function addTextObj() {

    controls = new createjs.Text("Use the Left and Right Arrow Keys to Move", "30px Feast of Flesh BB", "#FFFFFF");
    controls.x = 150;
    controls.y = 10;
    stage.addChild(controls);

    controls2 = new createjs.Text("Use the Spacebar to Ollie", "30px Feast of Flesh BB", "#FFFFFF");
    controls2.x = 250;
    controls2.y = 50;
    stage.addChild(controls2);
}



function onTick() {
    //console.log("tick")

    //velocity parameters are constantly applied to the x and y properties of the characters
    skateDude.x += xv;
    skateDude.y += yv;

    //constantly apply gravity
    yv += gravity;

    //conditions for movements using booleans
    //if(leftDown = true && spaceBar = false)
    if (leftDown && !rightDown && !spaceBar) {
        //move left
        xv = -spd;
        skateDude.scaleX = -1;
        if (!speed) {
            skateDude.speed();
            console.log("Playing rolling sound...");
            createjs.Sound.play("rolling", {
                loop: -1
            });
            // dont forget to update booleans in the right places
            speed = true;
        }
    } else if (rightDown && !leftDown && !spaceBar) {
        //move right
        xv = spd;
        skateDude.scaleX = 1;
        if (!speed) {
            skateDude.speed();
            console.log("Playing rolling sound...");
            createjs.Sound.play("rolling", {
                loop: -1
            });
            //update booleans
            speed = true;
        }
    }

    if (!leftDown && !rightDown && !spaceBar) {
        //stop
        xv *= friction;
        speed = false;
        if (!cruising && !jump) {
            skateDude.cruising();
            cruising = true;
        }
        createjs.Sound.stop();
    }

    //check limits/boudaries for motion
    if (skateDude.x > rightLimit) {
        //trick: just set character back to the limit
        skateDude.x = rightLimit
    } else if (skateDude.x < leftLimit) {
        skateDude.x = leftLimit
    }
    if (skateDude.y < ceiling) {
        skateDude.y = ceiling
    } else if (skateDude.y > groundLevel) {
        skateDude.y = groundLevel
        jump = false;
        if (!cruising) {
            skateDude.cruising();
            cruising = true;
        }

    }


    //console.log("leftDown = " + leftDown)
    //console.log("spaceBar = " + spaceBar)

    //background movements
    //use xv, but reverse it
    if (xv > 0) {
        forground.x -= xv;
        midground.x -= xv / 1.8;
        background1.x -= skyvel;
        background2.x -= xv / 4.8;
        background3.x -= xv / 3.8;
    }

    forgroundb.x = forground.x + forgroundwidth - 4;
    midgroundb.x = midground.x + midgroundwidth - 4;
    background1b.x = background1.x + background1width - 4;
    background2b.x = background2.x + background2width - 4;
    background3b.x = background3.x + background3width - 4;

    if (forgroundb.x <= 0) {
        forground.x = 0;
    }
    if (midgroundb.x <= 0) {
        midground.x = 0;
    }
    if (background1b.x <= 0) {
        background1.x = 0;
    }
    if (background2b.x <= 0) {
        background2.x = 0;
    }
    if (background3b.x <= 0) {
        background3.x = 0;
    }


    stage.update();
}

//event handler functions
function onKeyDown(eventObj) {
    console.log("key down!!keycode: " + eventObj.keyCode)

    //update booleans
    if (eventObj.keyCode == 37) {
        leftDown = true;
    } else if (eventObj.keyCode == 39) {
        rightDown = true;
    }
    if (eventObj.keyCode == 32) {
        spaceBar = true;
        //jump or ollie
        if (!jump) {
            yv = jumpHeight;
            skateDude.jump();
            jump = true;
            cruising = false;
            createjs.Sound.stop();
            createjs.Sound.play("ollie");
        }
    }
}

function onKeyUp(eventObj) {
    //console.log("key up!!keycode: " + eventObj.keyCode)

    //update booleans
    if (eventObj.keyCode == 37) {
        leftDown = false;
        skateDude.cruising();
    } else if (eventObj.keyCode == 39) {
        rightDown = false;
        skateDude.cruising();
    }
    if (eventObj.keyCode == 32) {
        spaceBar = false;
    }

}
