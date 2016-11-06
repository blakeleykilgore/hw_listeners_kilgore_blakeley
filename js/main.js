var header = document.getElementsByTagName('h1')[0];
var clickTracker = 1;

header.addEventListener('click', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'This is click number ' + clickTracker;
    clickTracker = clickTracker + 1;
    document.getElementsByTagName('body')[0].appendChild(myElement);
});
