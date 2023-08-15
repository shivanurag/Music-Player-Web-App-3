idea_1="";
idea_10="";
LeftWristX=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;
function preload()
{
    idea_1=loadSound("Idea_1.mp3");
    idea_10=loadSound("Idea_10.mp3");
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on(video,gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialised");
}

function gotPoses()
{
   if(results.lengt>0)
   {
    console.log(results);
   }
   LeftWristX=results[0].pose.leftWrist.x;
   LeftWristY=results[0].pose.leftWrist.y;
   console.log("Left Wrist X = "+LeftWristX+"Left Wrist Y "+LeftWristY);
   RightWristX=results[0].pose.rightWrist.x;
   RightWristY=results[0].pose.rightWrist.y;
   console.log("Right Wrist X = "+RightWristX+"Right Wrist Y "+RightWristY);
}

function draw()
{
    image(video,0,0,500);
}