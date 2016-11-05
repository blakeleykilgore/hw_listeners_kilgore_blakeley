var header = document.getElementsByTagName('h1')[0];

header.addEventListener('click', function (click) {
    var myElement = document.createElement('p');
    var num = click.detail;
    myElement.innerHTML = 'This is click number ' + num;
    document.getElementsByTagName('body')[0].appendChild(myElement);
});
