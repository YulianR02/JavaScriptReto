var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
};

var socialList = function() {
    var salida = '<ul>',
        lista = document.querySelectorAll('.socialIcons');

    for (var key in arguments[0]) {
        salida += '<li><a href="' + socialMedia[key] + '">' + '<img src="images/' + key + '.png" alt="icon for ' + key + '">' + '</a></li>';
    }
    salida += '</ul>';

    for (var i = lista.length - 1; i >= 0; i--) {
        lista[i].innerHTML = salida;
    };
}(socialMedia);