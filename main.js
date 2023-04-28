objects = [];
status_1 = "";
function setup (){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function modelloaded(){
    console.log("model loaded");
    status_1 = true;
}
function start(){
    objectdetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
    object_name = document.getElementById("object_name").value;
}
function draw(){
    image(video,0,0,380,380);
     if(status_1!= ""){
        objectDetector.detect(video, gotresult);
        for(i = 0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "status: objects detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(objects[I].label==object_name){
                video.stop()
        }
    }
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}