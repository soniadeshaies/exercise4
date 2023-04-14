//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let star, tree, sun, tent, moon, cover;
let a = 0;

//declare variable up at the top
let mySound1, mySound2, mySound3;

var dragging = false; // Is the object being dragged?


//load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/call-me.mp3');
  mySound2 = loadSound('audio/trouble-sleeping.mp3');
  mySound3 = loadSound('audio/till-it-happens.mp3');
  mySound4 = loadSound('audio/butterfly.mp3');
  mySound5 = loadSound('audio/another-rainy-day.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    cover = createImg("images/cover.jpg");
    cover.size(400,400);
    cover.position(550, 100); 
    
    star = createImg("images/star-01.png");
    star.size(100,100);
    star.class('flower');
    star.position(500, 520);

    tree = createImg("images/tree-01.png");
    tree.size(100,100);
    tree.class('flower');
    tree.position(600, 520);

    sun = createImg("images/sun-01.png");
    sun.size(100,100);
    sun.class('flower');
    sun.position(700, 520);

    tent = createImg("images/tent-01.png");
    tent.size(100,100);
    tent.class('flower');
    tent.position(810, 520);

    moon = createImg("images/moon-01.png");
    moon.size(100,100);
    moon.class('flower');
    moon.position (910, 520);
    
  }
  
  function draw() {
    background(255, 249, 225);
    star.mousePressed(makeStar);
    tree.mousePressed(makeTree);
    sun.mousePressed(makeSun);
    tent.mousePressed(makeTent);
    moon.mousePressed(makeMoon);

    cursorFlower();
  }

  function cursorFlower(){
    let flowers = createImg("images/flower-01.png");


    flowers.size(50,50);
    flowers.id('flowers');
    // flowers.position(500,500);
    flowers.position((0 + a), 0);
    a++;
  }

  function makeStar () {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeTree() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }

  function makeSun() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }
    function makeTent() {
      if (mySound4.isPlaying()){
        mySound4.pause();
      } else {
        mySound4.play();
      }
  }

  function makeMoon() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }

  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
