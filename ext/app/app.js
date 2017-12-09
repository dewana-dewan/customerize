var textColor = '#fff';
var fontName = 'Roboto';

var URL = localStorage.getItem('url');
$('#mainbg').attr('src', URL);

var canvas = new fabric.Canvas('c');
canvas.backgroundColor = 'white';


//add the main image
var background = document.getElementById('mainbg');
var oheight = background.height;
var owidth = background.width;
var ratio = oheight / owidth;
var nheight = 400;
var nwidth = nheight / ratio;
var slide = (400 - nwidth) / 2;
console.log(slide);
console.log(ratio);
var bgInstance = new fabric.Image(background, {
    left: slide,
    top: 0,
    lockMovementX: true,
    lockMovementY: true,
    hoverCursor: 'arrow',
    selectable: false
});
bgInstance.set({
    scaleX: nwidth / owidth,
    scaleY: nheight / oheight
});
canvas.add(bgInstance);
window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
//add the subordinate images

function readFile() {

    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            document.getElementById("preview").src = e.target.result;

            fabric.Image.fromURL(e.target.result, function (myImg) {
                //i create an extra var for to change some image properties
                var img1 = myImg.set({
                    left: 0,
                    top: 0,
                });
                canvas.add(img1);
            });

        });
        FR.readAsDataURL(this.files[0]);
    }
}

document.getElementById("upimage").addEventListener("change", readFile);





//add text
var setColor = function (x) {
    console.log('setColor called');
    textColor = '#' + x;
    console.log('Color set to ' + textColor);
};

var colors = document.getElementsByClassName('selector');

for (i = 0; i < colors.length; i++) {
    let temp = '#' + colors[i].id;
    colors[i].addEventListener('click', function () {
        console.log('New color chosen');
        textColor = temp;
    })
}
var addText = function () {

    let textValue = document.getElementById('textvalue').value;
    if (textValue === "") {
        alert('Enter a text first');
        return;
    }
    let font = document.getElementById("fonts");
    let value = font.options[font.selectedIndex].value;
    fontName = font.options[font.selectedIndex].text;

    var mytext = new fabric.Text(textValue, {
        left: 200,
        top: 200,
        fontFamily: fontName,
        fill: textColor
    });

    canvas.add(mytext);
}

document.getElementById('setText').addEventListener('click', addText);
