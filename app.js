/*align canvas*/
var textColor = '#fff';
var fontName = 'Roboto';
/*window.onload = window.onresize = function() {
    let canvas = document.getElementById('c');
    canvas.width = 400;
    canvas.height = 400;
}*/

//var canvas = new fabric.Canvas('c');


/*var rect2 = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'blue',
    width: 60,
    height: 60,
    angle: 45,
    selectable: true
});*/


/*canvas.add(rect2);*/
//canvas.add(rect);

/*var boom = function () {
    rect.set({
        fill: 'blue',
        selectable: true
    });
    canvas.renderAll();
}*/




/*var imgElement = document.getElementById('blah');
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  selectable: true
});
canvas.add(imgInstance);
*/


/*var text = new fabric.Text('hello world', { left: 100, top: 100});

text.set({
    fontFamily: 'Roboto'
})

canvas.add(text);
*/


//sets the image in canvas
/*var canvas = document.getElementById('c'),
    context = canvas.getContext('2d');

make_base();

function make_base() {
    base_image = new Image();
    base_image.src = 'test.jpg';
    let width = base_image.naturalWidth;
    let height = base_image.naturalHeight;
    let ratio = width / height;
    context.fillStyle = 'white';
    context.fillRect(0, 0, 400, 400);
    base_image.onload = function () {
        context.drawImage(base_image, (400 - 400 * ratio) / 2, 0, 400 * ratio, 400);
    }
}*/

var canvas = new fabric.Canvas('c');

//set background color
var bgcolor = new fabric.Rect({
    top: 0,
    left: 0,
    fill: '#fff',
    height: 400,
    width: 400,
    selectable: false
})
canvas.add(bgcolor);


//add the main image
var background = document.getElementById('mainbg');
let scale = 400 / background.width;
var bgInstance = new fabric.Image(background, {
    left: 0,
    top: 0,
    lockMovementX: true,
    lockMovementY: true,
    hoverCursor: 'arrow',
    selectable: false
});
bgInstance.set({
    scaleX: scale,
    scaleY: scale
});
canvas.add(bgInstance);

//add the subordinate images



    /*var ipimage = document.getElementById('preview');
    console.log('got it');
    var ipInstance = new fabric.Image(ipimage, {
        left: 10,
        top: 10
    });
    canvas.add(ipInstance);*/
}





//add text
var setColor = function (x) {
    textColor = '#' + x;
    console.log(textColor);
}


var addText = function () {
    console.log('calll meeee');

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
