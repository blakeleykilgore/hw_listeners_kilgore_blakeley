// Event Listener for 'click' of h1
var header = document.getElementsByTagName('h1')[0];

header.addEventListener('click', function () {
    header.style.color = '#37ddd5';
});
// Changes color of h1

// Event Listener for 'mouseover' of the nav
var menu = document.getElementsByTagName('nav')[0];

menu.addEventListener('mouseover', function () {
    menu.style.width = '100%';
});
// Change width of nav

// Event Listener for 'mouseenter' of images
var image = document.getElementsByTagName('img')[0];
var image2 = document.getElementsByTagName('img')[1];

image.addEventListener('mouseenter', function change() {
    image.id = 'new-image';
    document.getElementById('new-image').src = 'img/image2.jpeg';
});
// Change image on mouseenter
image2.addEventListener('mouseleave', function change2() {
    image2.id = 'new-image2';
    document.getElementById('new-image2').src = 'img/image1.jpeg';
});
// Change image on mouseleave

// Event Listener for 'submit' of the form
var form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var paragraph = document.createElement('p');
    if (document.getElementsByTagName('p').length < 4) {
        paragraph.innerHTML = '<h5>Yay! You submitted!</h5>';
        document.getElementsByTagName('footer')[0].appendChild(paragraph);
        paragraph.style.color = '#776575';
    }
});
// Adds a paragraph on form submission
