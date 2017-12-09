var textColor = '#fff';
var fontName = 'Roboto';

var canvas = new fabric.Canvas('c');
canvas.backgroundColor = 'white';
canvas.renderAll();

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
    document.getElementById('textvalue').value = " ";

}



//deleting object
document.getElementById('deleteobj').addEventListener('click', function () {
    canvas.remove(canvas.getActiveObject());
});


document.addEventListener("keydown", KeyCheck);

function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
            canvas.remove(canvas.getActiveObject());
            break;
        case 46:
            canvas.remove(canvas.getActiveObject());
            break;
        default:
            break;
    }
}

var materialColor = '#525252';
var material = new fabric.Rect({
    left: 0,
    top: 0,
    fill: materialColor,
    width: 400,
    height: 400,
    lockMovementX: true,
    lockMovementY: true,
    hoverCursor: 'arrow',
    selectable: false

});

canvas.add(material);

var changemtColor = function (x) {
    material.set({
        fill: '#' + x
    });
    canvas.renderAll();
};


var platingColor = '#ffdd00';
var plating = new fabric.Rect({
    left: 25,
    top: 25,
    fill: platingColor,
    width: 350,
    height: 350,
    lockMovementX: true,
    lockMovementY: true,
    hoverCursor: 'arrow',
    selectable: false

});

canvas.add(plating);

var changeptColor = function (x) {
    plating.set({
        fill: '#' + x
    });
    canvas.renderAll();
};

var color = '#fff';

var background = new fabric.Rect({
    left: 50,
    top: 50,
    fill: color,
    width: 300,
    height: 300,
    lockMovementX: true,
    lockMovementY: true,
    hoverCursor: 'arrow',
    selectable: false

});

canvas.add(background);
var changeColor = function (x) {
    background.set({
        fill: '#' + x
    });
    canvas.renderAll();
};

var Caption = new fabric.IText('Some Competition', {
    top: 80,
    left: 140,
    fill: 'gold',
    fontSize: 16,
    fontFamily: 'Roboto'
});

canvas.add(Caption);