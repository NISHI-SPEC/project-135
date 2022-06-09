function setup() 
{ 
 canvas = createCanvas(480, 300); 
 canvas.center(); 
 video = createCapture(VIDEO); 
 video.size(300, 300); 
 video.hide(); 
}