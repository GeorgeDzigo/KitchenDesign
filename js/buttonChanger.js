// Button Changer

var modernButton = document.getElementById('modern');
var modernPic = document.getElementsByClassName('changer-to-modern')
var itallianButton = document.getElementById('itallian');
var itallianPic = document.getElementsByClassName('changer-to-itallian')

modernButton.addEventListener('click', function(){    
    itallianPic[0].classList.remove('active');

    modernPic[0].classList.add('active');
});
itallianButton.addEventListener('click', function(){
    modernPic[0].classList.remove('active');

    itallianPic[0].classList.add('active');
});

// Button Changer



// DROPDOWN OF PRODUCTS-LI  SETTINGS