var myCanvas = document.createElement('canvas');
myCanvas.height = 150;
myCanvas.width = 200;
myCanvas.id = 'myCanvas';
myCanvas.style = 'border: solid black 1px;';

var context = myCanvas.getContext('2d');

myImage = document.querySelector('img[src="https://www.javascriptinstitute.org/wp-content/uploads/2018/11/canvas-api-lineJoin.png"]');
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