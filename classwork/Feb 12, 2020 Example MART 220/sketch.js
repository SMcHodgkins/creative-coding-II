var cat;
var pics = [];
var shoot = [];
var i = 0;
var x = 0,
    y = 100;
var j = 0;
var hit = false;
//let result = [];
var direction;
var rock;
var rockX = 50;
var rockY = 50;
var isShooting = false;
var isJumping = false;
var speed = -5;

function addImages(data) {

    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        pics[i] = cat;
    }
}

function addShoot(data) {

    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        shoot[i] = cat;
    }
}

function preload() {
    loadStrings('assets/Idle.txt', addImages);
    loadStrings('assets/shoot.txt', addShoot);
    rock = loadImage("assets/Rock.jpg");
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(120);
    square(500, 100, 20);
    image(rock, rockX, rockY);
    rock.resize(20, 20);
    shoot[j].resize(320, 271);
    ///////////////////////////////////////
    // shoot key...
    if (keyIsDown(32)) {
        image(shoot[j], x, y);
        isShooting = true;

    } else {
        image(pics[i], x, y); // idle
    }

    /*if (keyIsDown(88)) {
        isJumping = true;
    }

    if (isJumping) {
        y += speed;
        //x += 13;
        if (y <= 20) {

            speed *= -1;
            //  x -= 13;

        } else if (y > 95) {
            y = 95;
            isJumping = false;
            speed *= -1;
        }


        //  image(pics[j], x, y); -- this is where the jumping animation would be
    }


    if (isShooting) {
        rockX += 5;
    }
*/


    /////////////////////
    //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
    var hit = collideRectRect(x, y, pics[i].width, pics[i].height, 500, 100, 20, 20);
    ///////////////////
    // print("hit: " + hit);
    ///////////////////////////
    //if (hit) {
    //     x -= 10;
    //   }
    ////////////////////////////
    // frameRate(15);
    //i += 1;
    if (keyIsDown(LEFT_ARROW)) {
        direction = "left";
        if (hit == true) {
            x += 5;
        } else {
            x -= 5;
        }
    } else if (keyIsDown(RIGHT_ARROW)) {
        if (hit == true) {

            x -= 5;
        } else {
            x += 5;
        }

    } else if (keyIsDown(UP_ARROW)) {
        if (hit == true) {
            y += 5;
        } else {
            y -= 5;
        }
    } else if (keyIsDown(DOWN_ARROW)) {
        if (hit == true) {
            y -= 5;
        } else {
            y += 5;
        }
    }

    // x++;
    //print(i)
    if (i >= pics.length) {
        i = 0;
    }
    j++;
    if (j >= shoot.length) {
        j = 0;
    }
    //}


}
