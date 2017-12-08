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

var canvas = document.getElementById('c'),
    context = canvas.getContext('2d');

make_base();

function make_base() {
    base_image = new Image();
    base_image.src = 'test.jpg';
    let width = base_image.naturalWidth;
    let height = base_image.naturalHeight;
    let ratio = width/height;
    context.fillStyle='white';
    context.fillRect(0,0,400,400);
    base_image.onload = function () {
        context.drawImage(base_image, (400-400*ratio)/2,0, 400*ratio, 400);
    }
}





$(function() {
  $("#fileToUpload").on('change', function() {
    // Display image on the page for viewing
    readURL(this, "preview");

  });
});

function readURL(input, tar) {
  if (input.files && input.files[0]) { // got sth

    // Clear image container
    $("#" + tar).removeAttr('src');

    $.each(input.files, function(index, ff) // loop each image 
      {

        var reader = new FileReader();

        // Put image in created image tags
        reader.onload = function(e) {
          $('#' + tar).attr('src', e.target.result);
        }

        reader.readAsDataURL(ff);

      });
  }
}