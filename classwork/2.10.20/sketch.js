var cat;
var pics = [];
var i = 0;
var x = 0;
var hit = false;
let result = [];

function addImages(data) {
    //result = data;
    //  var data = "";

    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        pics[i] = cat;
    }
}

function preload() {
    loadStrings('assets/Idle.txt', addImages);
    //console.log(result);

    //cat = loadImage("assets/download.png");
    /*  cat = loadImage('assets/Idle (1).png');
    pics[0] = cat;
    cat = loadImage('assets/Idle (2).png');
    pics[1] = cat;
    cat = loadImage('assets/Idle (3).png');
    pics[2] = cat;

    cat = loadImage('assets/Idle (4).png');
    pics[3] = cat;

    cat = loadImage('assets/Idle (5).png');
    pics[4] = cat;

    cat = loadImage('assets/Idle (6).png');
    pics[5] = cat;

    cat = loadImage('assets/Idle (7).png');
    pics[6] = cat;

    cat = loadImage('assets/Idle (8).png');
    pics[7] = cat;

    cat = loadImage('assets/Idle (9).png');
    pics[8] = cat;

    cat = loadImage('assets/Idle (10).png');
    pics[9] = cat;
*/
    //print(pics.length);


    /* pics[2] = cat;
    pics[3] = cat;
    pics[4] = cat;
    pics[5] = cat;
    pics[6] = cat;
    pics[7] = cat;
    pics[8] = cat;
    pics[9] = cat;
    pics[10] = cat;
*/
}

function setup() {
    createCanvas(641, 542);
    //  image(cat, 0, 0);
    //  print("HI" + cat.width);

}

function draw() {
    background(120);
    square(500, 100, 20);

    // frameRate(15);

    //print("new length" + pics.length);
    // for (var i = 0; i < pics.length; i++) {
    //  print("you here..");
    ///////////////////////////////////////
    image(pics[i], x, 0);
    ///////////////////////////////////////
    // for (var i = 0; i < pics.length; i++) {
    // print("hello?");
    /////////////////////////////////////
    pics[i].resize(320, 271);
    /////////////////////////
    //}
    // print("width: " + pics[0].width);
    //image(cat, x, 0);
    /////////////////////
    //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
    var hit = collideRectRect(x, 0, pics[i].width, pics[i].height, 500, 100, 20, 20);
    ///////////////////  
    print("hit: " + hit);
    ///////////////////////////
    //if (hit) {
    //     x -= 10;
    //   }
    ////////////////////////////
    // frameRate(15);
    i += 1;
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    // x++;
    //print(i)
    if (i >= pics.length) {
        i = 0;
    }
    //}


}