var header = document.getElementsByTagName('h1')[0];


header.addEventListener('click', function () {
    var myElement = document.createElement('p');
    var num = 0;
    myElement.innerHTML = 'This is click number ' + num;
    document.getElementsByTagName('body')[0].appendChild(myElement);
});
