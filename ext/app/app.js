/*align canvas*/

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
var URL = localStorage.getItem('url');
$('#mainbg').attr('src', URL);
var canvas = new fabric.Canvas('c');

//set background color
var bgcolor = new fabric.Rect({
    top: 0,
    left: 0,
    fill: '#fff',
    height: 400,
    width: 400
})
canvas.add(bgcolor);


//add the main image
var background = document.getElementById('mainbg');
let scale = 400 / background.width;
var bgInstance = new fabric.Image(background, {
    left: 0,
    top: 0
});
bgInstance.set({
    scaleX: scale,
    scaleY: scale
});
canvas.add(bgInstance);
