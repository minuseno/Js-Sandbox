var myCanvas = document.createElement('canvas');
myCanvas.height = 150;
myCanvas.width = 200;
myCanvas.id = 'myCanvas';
myCanvas.style = 'border: solid black 1px;';

var context = myCanvas.getContext('2d');

myImage = document.querySelector('img[src="https://www.javascriptinstitute.org/wp-content/uploads/2018/11/canvas-api-translate.png"]');
myImage.parentElement.appendChild(myCanvas);


var clearence = 9;
context.clearRect(clearence,clearence,myCanvas.width- 2*clearence,myCanvas.height- 2*clearence);



var img = new Image();
img.onload = function() { 
    setTimeout( function () {
    console.log('Image onload passed');
    var pattern = context.createPattern(img, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(20, 20, 160, 110); },2000);
}
img.src = 'https://www.javascriptinstitute.org/files/pattern.png';



context.beginPath();
context.moveTo(0,50);
context.lineTo(200,50);
context.stroke();

context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.shadowBlur = 0;
//context.shadowColor = 'rgba(0, 0, 0, 0.3)';
context.strokeStyle = 'rgba(0, 0, 0, 0.9)'; 
context.lineWidth = 1;
context.font = '32px Open Sans';
context.strokeText('Stroked Text', 10, 100);



context.drawImage(image, 20, 40, image.width * 0.5, image.height * 0.50);