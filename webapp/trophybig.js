var textColor = '#fff';
var fontName = 'Roboto';

var canvas = new fabric.Canvas('c');
canvas.backgroundColor = 'white';

$(document).ready(function () {
    addArchery();
});

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

document.getElementById('setText').addEventListener('click', addText);


//deleting object
document.getElementById('deleteobj').addEventListener('click', function () {
    canvas.remove(canvas.getActiveObject());
});


document.addEventListener("keydown", KeyCheck);

function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 46:
            canvas.remove(canvas.getActiveObject());
            break;
        default:
            break;
    }
}

//slider controls

var hueslider = document.getElementById("hue");

var showvalue = function () {
    "use strict";
    var hue;
    var temp = this.value;
    var namevalue = this.name;
    if (namevalue === "hue") {
        temp = temp + "deg";
    }
    namevalue = "--" + namevalue;
    document.documentElement.style.setProperty(namevalue, temp);
};

hueslider.addEventListener("change", showvalue);
hueslider.addEventListener("mousemove", showvalue);


//trophy name update

fabric.loadSVGFromURL("plate1.svg", function (objects, options) {

    var plate1 = fabric.util.groupSVGElements(objects, options);

    plate1.set({
        top: 340,
        left: 80,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: 'black',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(plate1);
    canvas.renderAll();
    canvas.sendToBack(plate1);
});

var base1;
fabric.loadSVGFromURL("base1.svg", function (objects, options) {

    base1 = fabric.util.groupSVGElements(objects, options);
    base1.set({
        top: 295,
        left: 80,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: '#F5CF00',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(base1);
    canvas.renderAll();
    canvas.sendToBack(base1);
});


fabric.loadSVGFromURL("plate2.svg", function (objects, options) {

    var plate2 = fabric.util.groupSVGElements(objects, options);

    plate2.set({
        top: 200,
        left: 80,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: 'black',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(plate2);
    canvas.renderAll();
    canvas.sendToBack(plate2);
});

fabric.loadSVGFromURL("poll1.svg", function (objects, options) {

    poll1 = fabric.util.groupSVGElements(objects, options);
    poll1.set({
        top: 200,
        left: 140,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: '#DC8C5F',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(poll1);
    canvas.renderAll();
    canvas.sendToBack(poll1);
});


fabric.loadSVGFromURL("poll2.svg", function (objects, options) {

    poll2 = fabric.util.groupSVGElements(objects, options);
    poll2.set({
        top: 200,
        left: 230,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: '#DC8C5F',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(poll2);
    canvas.renderAll();
    canvas.sendToBack(poll2);
});



var base2;
fabric.loadSVGFromURL("base2.svg", function (objects, options) {

    base2 = fabric.util.groupSVGElements(objects, options);
    base2.set({
        top: 156,
        left: 80,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: '#F5CF00',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(base2);
    canvas.renderAll();
    canvas.sendToBack(base2);
});


fabric.loadSVGFromURL("poll3.svg", function (objects, options) {

    poll3 = fabric.util.groupSVGElements(objects, options);
    poll3.set({
        top: 120,
        left: 180,
        scaleX: 0.5,
        scaleY: 0.5,
        fill: '#DC8C5F',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'arrow',
        selectable: false
    });

    canvas.add(poll3);
    canvas.renderAll();
    canvas.sendToBack(poll3);
});

var trophyBCaption = new fabric.IText('JOHN CENA', {
    top: 350,
    left: 130,
    fill: 'white',
    fontSize: 24,
    fontFamily: 'Roboto'
});

canvas.add(trophyBCaption);

canvas.bringToFront(trophyBCaption);

var trophyTCaption = new fabric.IText('HEAVYWEIGHT CHAMPION', {
    top: 210,
    left: 100,
    fill: 'white',
    fontSize: 16,
    fontFamily: 'Roboto'
});

canvas.add(trophyTCaption);

canvas.bringToFront(trophyTCaption);



var standText1 = new fabric.IText('R\nA\nW\n', {
    top: 248,
    left: 242,
    fill: 'black',
    fontSize: 10,
    fontFamily: 'Roboto'
});

canvas.add(standText1);

canvas.bringToFront(standText1);


var standText2 = new fabric.IText('W\nW\nE\n', {
    top: 248,
    left: 150,
    fill: 'black',
    fontSize: 10,
    fontFamily: 'Roboto'
});

canvas.add(standText2);

canvas.bringToFront(standText2);






var changeb1Color = function (x) {
    fabric.loadSVGFromURL("base1.svg", function (objects, options) {
        base1.set({
            fill: '#' + x,
        });
        canvas.renderAll();

    });
}

var changeb2Color = function (x) {
    fabric.loadSVGFromURL("base2.svg", function (objects, options) {
        base2.set({
            fill: '#' + x,
        });
        canvas.renderAll();

    });
}

var changes1Color = function (x) {
    fabric.loadSVGFromURL("poll1.svg", function (objects, options) {
        poll1.set({
            fill: '#' + x,
        });
        canvas.sendToBack(poll1);

        fabric.loadSVGFromURL("poll2.svg", function (objects, options) {
            poll2.set({
                fill: '#' + x,
            });
            canvas.sendToBack(poll2);
            canvas.renderAll();

        });
    });
}
var changes2Color = function (x) {
    fabric.loadSVGFromURL("poll3.svg", function (objects, options) {
        poll3.set({
            fill: '#' + x,
        });
        canvas.sendToBack(poll3);
        canvas.renderAll();

    });
}

var addArchery = function () {
    fabric.Image.fromURL('trophies/archery.png', function (myImg) {
        //i create an extra var for to change some image properties
        var archery = myImg.set({
            left: 165,
            top: 10,
            scaleX: 0.4,
            scaleY: 0.4
        });
        canvas.bringToFront(archery);
        canvas.add(archery);
    });
};


var addFigureine = function () {
    fabric.Image.fromURL('trophies/figurine.png', function (myImg) {
        //i create an extra var for to change some image properties
        var figureine = myImg.set({
            left: 162,
            top: 12,
            scaleX: 0.3,
            scaleY: 0.3
        });
        canvas.bringToFront(figureine);
        canvas.add(figureine);
    });
};


var addBoat = function () {
    fabric.Image.fromURL('trophies/boat.png', function (myImg) {
        //i create an extra var for to change some image properties
        var boat = myImg.set({
            left: 145,
            top: 75,
            scaleX: 0.6,
            scaleY: 0.6
        });
        canvas.bringToFront(boat);
        canvas.add(boat);
    });
};


var addCar = function () {
    fabric.Image.fromURL('trophies/car.png', function (myImg) {
        //i create an extra var for to change some image properties
        var car = myImg.set({
            left: 165,
            top: 10,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.bringToFront(car);
        canvas.add(car);
    });
};

var addMagic = function () {
    fabric.Image.fromURL('trophies/magic.png', function (myImg) {
        //i create an extra var for to change some image properties
        var magic = myImg.set({
            left: 170,
            top: 12,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.bringToFront(magic);
        canvas.add(magic);
    });
};

var addVolleyball = function () {
    fabric.Image.fromURL('trophies/volleyball.png', function (myImg) {
        //i create an extra var for to change some image properties
        var volleyball = myImg.set({
            left: 175,
            top: 10,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.bringToFront(volleyball);
        canvas.add(volleyball);
    });
};

document.getElementById('trophyType').addEventListener('change', function () {
    let ela = this.value;

    switch (ela) {
        case 'archery':
            addArchery();
            break;
        case 'figurine':
            addFigureine();
            break;
        case 'car':
            addCar();
            break;
        case 'boat':
            addBoat();
            break;
        case 'magic':
            addMagic();
            break;
        case 'volleyball':
            addVolleyball();
            break;
    }
});
