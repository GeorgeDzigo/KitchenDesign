var sldierData = [{
        url: "our-picture-img/1.png",
        img: "https://s3-media2.fl.yelpcdn.com/bphoto/OK6UnLkDX8aFhlsY9h9S_Q/o.jpg"
    },
    {
        url: "our-picture-img/2.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAU9Bz6VqIDTZiqep7DoB2dgVtmjFkgpbk-gpjKxzqsHpLduu"
    },
    {
        url: "our-picture-img/3.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHbSy49c3gr3rb7w4rIkgeSGRJed3WTMTBCYX_bQNoYqEcO_Z"
    },
    {
        url: "our-picture-img/4.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEZcRaLzq8mHqBGjreyyf7q3xUNmgHpgMJyuKmj1OavUq9GF2"
    },
    {
        url: "our-picture-img/5.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmL2ETv8AndSdCRvqrzM5EdhZVBi0FpWJ6fNx34k6M4Fz6SPvJ"
    },
    {
        url: "our-picture-img/6.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EcgZAgKxN5HO-qYLTMW2eCUuf_44dkUMx38omDyz_h05QCp7Zg"
    },
    {
        url: "our-picture-img/7.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQnvLOtgtCWqz_yWxRWKHM8uMXsFablaOQ-wpsLl30l4PKp4G"
    },
    {
        url: "our-picture-img/8.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EcgZAgKxN5HO-qYLTMW2eCUuf_44dkUMx38omDyz_h05QCp7Zg"
    },
    {
        url: "our-picture-img/9.png",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EcgZAgKxN5HO-qYLTMW2eCUuf_44dkUMx38omDyz_h05QCp7Zg"
    }

]



var slideWrapper = document.getElementById('slide-wrapper');
var slider = document.getElementById('slider');
curentIndex = 0;


function createAelement(url) {
    var aElement = document.createElement('a')
    aElement.href = url;
    return aElement;
}

function createImgElement(img) {
    var imgElement = document.createElement('img');
    imgElement.src = img;
    return imgElement;
}

function setSlider(index) {
    var curentSlider = sldierData[index];
    var elemnt = createAelement(curentSlider.url);
    elemnt.appendChild(createImgElement(curentSlider.img));
    slider.innerHTML = '';
    slider.appendChild(elemnt);
}

function arrowRight() {
    if (curentIndex == sldierData.length - 1) {
        curentIndex = -1;
    }

    if (curentIndex <= sldierData.length - 1) {
        curentIndex++;
        setSlider(curentIndex);
    }

    console.log(curentIndex);
}

function arrowLeft() {
    if (curentIndex == 0) {
        curentIndex = sldierData.length - 1;
    }

    if (curentIndex !== 0) {
        curentIndex--;
        setSlider(curentIndex);
    }
    console.log(curentIndex);
}