// Event Listener for 'click' of h1
var header = document.getElementsByTagName('h1')[0];

header.addEventListener('click', function () {
    header.style.color = '#37ddd5';
});

// Event Listener for 'mouseover' of the nav
var menu = document.getElementsByTagName('nav')[0];

menu.addEventListener('mouseover', function () {
    menu.style.width = '100%';
});

// Event Listener for 'mouseenter' of image 1
var image = document.getElementsByTagName('img')[0];

image.addEventListener('mouseenter', function () {
    console.log('Test');
});

// Event Listener for 'mouseenter' of image 2
var image2 = document.getElementsByTagName('img')[1];

image2.addEventListener('mouseenter', function () {
    console.log('Test');
});

// Event Listener for 'submit' of the form
var form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Test');
});
