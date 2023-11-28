let artists = ['cha', 'chris', 'hwis', 'lila', 'nelly', 'su', 'yousan', 'claws', 'n405o'];

function generate() {
    var randomArtist = artists[Math.floor(Math.random() * artists.length)];
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var imagePath = `artists/${randomArtist}/${randomArtist}${randomNumber}.jpg`;

    var imageElement = document.getElementById('nailImage');
    imageElement.src = imagePath;

    restyle(imageElement);
    document.getElementById('output').style.display = 'flex';
}

function restyle(element) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + red + "," + green + "," + blue + ")";

    element.style.border = `5px solid ${randomColor}`;
}
