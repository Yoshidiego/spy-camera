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




