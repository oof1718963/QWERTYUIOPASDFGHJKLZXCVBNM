var livecam = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    dest_width: 320,
    dest_height: 240,
    image_format: 'png',
    png_quality: 100
});
Webcam.attach(livecam);

function speak() {
    var speaking = window.speechSynthesis;
    var dontspeakthis = "TAKING PHOTO IN 2 years";
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
    speaking.speak(anotherobject);
    counter();
    setTimeout(function () {
        take_snapshot();

    }, 10000);
}

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });

}

function counter() {


    var speaking = window.speechSynthesis;
    for (var i = 5; i >= 1; i--) {

        var dontspeakthis = i;
        anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
        speaking.speak(anotherobject);


    }
    var dontspeakthis = "NOW";
    anotherobject = new SpeechSynthesisUtterance(dontspeakthis);
    speaking.speak(anotherobject);
}
alert("Your device has " + ml5.version + " version of machine learning");
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/68OQ9DI9t/model.json', modelLoaded);

function modelLoaded() {
    alert("The Artificial Intelligent model has loaded");
}