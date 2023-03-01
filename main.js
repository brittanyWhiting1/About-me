// JavaScript source code

var slider_img = document.querySelector('.slider-img');
var pics = ['b.jpg', 'c.JPG', 'd.jpg', 'e.jpg', 'f.JPG', 'g.jpg', 'h.JPG', 'i.jpg', 'j.pg', 'k.jpg', 'l.jpg', 'm.jpg', 'n.jpg', 'o.jpg', 'p.jpg']; //adding the pics to the slider
var i = 0; //current image index

function prev() { //if prev button is hit then the photos will go back
    if (i <= 0) i = pics.length;
    i--;
    return setImg(i);
}


function next() { //if next button is hit then the photos go forward
    if (i >= pics.length - 1) i = -1;
    i++;
    return setImg(i);
}

function setImg(i) { //method to call that will take a string and the pics album plus the name of the file 
    return slider_img.setAttribute('src', 'pics/' + pics[i]);
}