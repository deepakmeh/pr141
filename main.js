song1 = "music.mp3";
song2 = "music2.mp3";

function preload(){
    sound = loadSound("music.mp3");
    sound = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 450)
}