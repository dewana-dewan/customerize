var textColor = '#fff';
var fontName = 'Roboto';

var canvas = new fabric.Canvas('c');
canvas.backgroundColor = 'white';


//add the main image
var background = document.getElementById('mainbg');
background.id = 'mug';
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
canvas.sendToBack(bgInstance);
window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
//add the subordinate images

function readFileCurved() {

    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            var imaaag = document.getElementById("preview").src = e.target.result;

            var img = new Image();
            img.src = e.target.result;


            var cvs = canvas;
            var context = cvs.getContext('2d');

            console.log(img.height, img.width);
            
            img.onload = function() {

                var x1 = img.width / 2;
                var x2 = img.width;
                var y1 = 20; // curve depth
                var y2 = 0;

                var eb = (y2*x1*x1 - y1*x2*x2) / (x2*x1*x1 - x1*x2*x2);
                var ea = (y1 - eb*x1) / (x1*x1);

                // variable used for the loop
                var currentYOffset;

                console.log(img.width, img.height, eb, ea);

                for(var x = 0; x < img.width; x++) {

                    // calculate the current offset
                    currentYOffset = 120 + (ea * x * x) + eb * x;

                    context.drawImage(img,x + 30,0,1,img.height,x + 30,currentYOffset,1,img.height);
                }


                var perspectiveImage = new Image();

                perspectiveImage.onload = function() {
                    perspectiveImage.src=cvs.toDataURL();
                    console.log(cvs.toDataURL());

                    fabric.Image.fromURL(perspectiveImage.src, function (myImg) {
                        //i create an extra var for to change some image properties
                        var img1 = myImg.set({
                            left: 30,
                            top: 50,
                        });
                        cvs.add(myImg);
                    });
                }
            }




            document.getElementById("preview").src = e.target.result;
        });
        FR.readAsDataURL(this.files[0]);
    }
}

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


if(document.getElementById("upimage"))
    document.getElementById("upimage").addEventListener("change", readFile);
else
    document.getElementById("upimage_mug").addEventListener("change", readFileCurved);


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
var addText_mug = function () {

    let textValue = document.getElementById('textvalue').value;
    if (textValue === "") {
        alert('Enter a text first');
        return;
    }
    let font = document.getElementById("fonts");
    let value = font.options[font.selectedIndex].value;
    fontName = font.options[font.selectedIndex].text;

    document.getElementById('textvalue').value = " ";

    Example = new CurvedText(canvas, {
        angle: 0,
        text: textValue,
        fontFamily: fontName,
        fill: textColor
    });
    console.log(Example);
    canvas.bringToFront(Example.group);
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

if(document.getElementById('setText'))
    document.getElementById('setText').addEventListener('click', addText);
else
    document.getElementById('setText_mug').addEventListener('click', addText_mug);



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




var CurvedText = (function () {

    /**
     * Constructor
     * @method curvedText
     * @param canvas
     * @param {object} options
     */
    function CurvedText(canvas, options) {

        // Options
        this.opts = options || {};
        for (var prop in CurvedText.defaults) {
            if (prop in this.opts) {
                continue;
            }
            this.opts[prop] = CurvedText.defaults[prop];
        }

        this.canvas = canvas;
        this.group = new fabric.Group([], {
            selectable: true,
            active: true
        });
        this.opts.fontFamily = options.fontFamily;
        this.opts.fill = options.fill;

        this.canvas.add(this.group);
        this._forceGroupUpdate();
        this.setText(this.opts.text);
    }


    /**
     * @method set
     * @param {string} param
     * @param value
     * @return false if the param name is unknown
     */
    CurvedText.prototype.set = function (param, value) {
        if (this.opts[param] !== undefined) {
            this.opts[param] = value;
            if (param === 'fontSize' || param === 'fontWeight') {
                this._setFontStyles();
            }
            if (param === 'selectable') {
                this.group.selectable = value;
            }
            if (param === 'angle') {
                this._forceGroupUpdate();
            }

            this._render();
            return true;
        } else {
            return false;
        }
    };

    /**
     * @method get
     * @param {string} param
     * @return value of param, or false if unknown
     */
    CurvedText.prototype.get = function (param) {
        this._render();
        if (this.opts[param] !== undefined) {
            return this.opts[param];
        } else {
            return false;
        }
    };

    /**
     * @method getParams
     * @return {object} value of every options
     */
    CurvedText.prototype.getParams = function () {
        this._render();
        return this.opts;
    };

    /**
     * Center the group in canvas
     * @method center
     * @return {object} with top and left
     */
    CurvedText.prototype.center = function () {
        this.opts.top = this.canvas.height / 2;
        this.opts.left = this.canvas.width / 2;
        this._render();
        return {
            top: this.opts.top,
            left: this.opts.left
        };
    };

    /**
     * Remove all letters from canvas
     * @method remove
     */
    CurvedText.prototype.remove = function () {
        var size = this.group.size();
        for (var i = size; i >= 0; i--) {
            this.group.remove(this.group.item(i));
        }
        this.canvas.renderAll();
    };

    /**
     * Used to change the text
     * @method setText
     * @param {string} newText
     */
    CurvedText.prototype.setText = function (newText) {

        while (newText.length !== 0 && this.group.size() >= newText.length) {
            this.group.remove(this.group.item(this.group.size() - 1));
        }

        for (var i = 0; i < newText.length; i++) {
            if (this.group.item(i) === undefined) {
                var letter = new fabric.Text(newText[i], {
                    selectable: true,
                    fontFamily: this.opts.fontFamily,
                    fill: this.opts.fill
                });
                this.group.add(letter);
            } else {
                this.group.item(i).text = newText[i];
            }
        }
        this.opts.text = newText;
        this._setFontStyles();
        this._render();
    };

    /**
     * Update font size and weight
     * @private
     * @method _setFontStyles
     */
    CurvedText.prototype._setFontStyles = function () {
        for (var i = 0; i < this.group.size(); i++) {
            this.group.item(i).setFontSize(this.opts.fontSize);
            this.group.item(i).fontWeight = this.opts.fontWeight;
        }
    };

    /**
     * Force update group scale and angles
     * @private
     * @method _forceGroupUpdate
     */
    CurvedText.prototype._forceGroupUpdate = function () {
        this.group.setAngle(this.opts.angle);
        this.group.scaleX = this.opts.scaleX;
        this.group.scaleY = this.opts.scaleY;
        this._render();
    };


    /**
     * calculate the position and angle of each letter
     * @private
     * @method _render
     */
    CurvedText.prototype._render = function () {
        var curAngle = 0,
            angleRadians = 0,
            align = 0;

        // Object may have been moved with drag&drop
        if (this.group.hasMoved()) {
            this.opts.top = this.group.top;
            this.opts.left = this.group.left;
        }
        this.opts.angle = this.group.getAngle();
        this.opts.scaleX = this.group.scaleX;
        this.opts.scaleY = this.group.scaleY;


        // Text align
        if (this.opts.align === 'center') {
            align = (this.opts.spacing / 2) * (this.group.size() - 1);
        } else if (this.opts.align === 'right') {
            align = (this.opts.spacing) * (this.group.size() - 1);
        }

        for (var i = 0; i < this.group.size(); i++) {
            // Find coords of each letters (radians : angle*(Math.PI / 180)
            if (this.opts.reverse) {
                curAngle = (-i * parseInt(this.opts.spacing, 10)) + align;
                angleRadians = curAngle * (Math.PI / 180);
                this.group.item(i).set('top', (Math.cos(angleRadians) * this.opts.radius));
                this.group.item(i).set('left', (-Math.sin(angleRadians) * this.opts.radius));
            } else {
                curAngle = (i * parseInt(this.opts.spacing, 10)) - align;
                angleRadians = curAngle * (Math.PI / 180);
                this.group.item(i).set('top', (-Math.cos(angleRadians) * this.opts.radius));
                this.group.item(i).set('left', (Math.sin(angleRadians) * this.opts.radius));
            }
            this.group.item(i).setAngle(curAngle);
        }

        // Update group coords
        this.group._calcBounds();
        this.group._updateObjectsCoords();
        this.group.top = this.opts.top;
        this.group.left = this.opts.left;
        this.group.saveCoords();

        this.canvas.renderAll();
    };



    /**
     * Default options
     */



    CurvedText.defaults = {
        top: 225,
        fontFamily: 'Metropolis Bold',
        left: 33,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        spacing: 4,
        radius: 280,
        text: 'Curved text',
        align: 'center',
        reverse: true,
        fontSize: 24,
        selectable: true,
        fontWeight: 'normal'
    };

    return CurvedText;
})();
