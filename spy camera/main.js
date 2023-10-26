function start()
{
Webcam.attach(camera);


camera=document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 300,
    Image_format:'jpeg',
    jpeg_qualityq: 90,
});
}
function take_snapshot()
{
webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
});
link=documet.getElementById("link");
imagen=document.getElementById("selfie_imagen").src;
link.href=image;
link.click();
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
   document.getElementById("textbox").innerHTML = ""; 
   recognition.start();
} 
recognition.onresult = function(event) {
console.log(event); 
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
 
 if(Content =="toma mi selfie")
    {
      console.log("tomando selfie --- ");
      speak();
    }
 }

 function speak()
 {
    var synth=windows.speechSystethesis;
    speak_data="tomando tu selfie en 5 segundos";
    var utterThis=newSpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save();
    }, 5000);
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click;
}


