nosex=0;
nosey=0

function preload(){
    filtro = loadImage('https://i.postimg.cc/tTHTSxGJ/pngwing-com-3.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide;
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(filtro,nosex,nosey,150,150);
}

function take_snapshot(){
    save('fotoconfiltro.png');
}
function modelLoaded(){
    console.log('PoseNet se ha cargado');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x-80;
        nosey = results[0].pose.nose.y-105;
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);        
    }
}