var sldierData = [
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
        img:"https://s3-media2.fl.yelpcdn.com/bphoto/OK6UnLkDX8aFhlsY9h9S_Q/o.jpg"
    },
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAU9Bz6VqIDTZiqep7DoB2dgVtmjFkgpbk-gpjKxzqsHpLduu"
    },
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHbSy49c3gr3rb7w4rIkgeSGRJed3WTMTBCYX_bQNoYqEcO_Z"
    },
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEZcRaLzq8mHqBGjreyyf7q3xUNmgHpgMJyuKmj1OavUq9GF2"
    },
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmL2ETv8AndSdCRvqrzM5EdhZVBi0FpWJ6fNx34k6M4Fz6SPvJ"
    },
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EcgZAgKxN5HO-qYLTMW2eCUuf_44dkUMx38omDyz_h05QCp7Zg"
    },
    {
        url:"https://www.facebook.com/kitchendesign.ge/?ref=aymt_homepage_panel&eid=ARBAlXIVL0EQ3IKtC08gS4Q4mRMh2tE5CKTFLEokysrZJxPX6b3FsjEB7xxihub_3njsm0nNBoxSfIsy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQnvLOtgtCWqz_yWxRWKHM8uMXsFablaOQ-wpsLl30l4PKp4G"
    }
]



var slideWrapper = document.getElementById('slide-wrapper');
var slider = document.getElementById('slider');
curentIndex = 0;


function createAelement(url){
    var aElement = document.createElement('a')
    aElement.href = url;
    return aElement;
}

function createImgElement(img){
var imgElement = document.createElement('img');
imgElement.src = img;
return imgElement;
}

function setSlider(index){
    var curentSlider = sldierData[index];
    var elemnt = createAelement(curentSlider.url);
    elemnt.appendChild(createImgElement(curentSlider.img));
    slider.innerHTML = '';
    slider.appendChild(elemnt);
}
function arrowRight() { 
    if (curentIndex   == sldierData.length - 1) { 
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
setInterval(function () {
    arrowRight();
    setSlider(curentIndex);
}, 3000)
setSlider(curentIndex);


























// var slider = document.getElementById('slider')
// var right = document.getElementById('right');
// var left = document.getElementById('left');
// var curentIndex = 0;

// function createAelement(url) { 
//     var aElement = document.createElement('a');
//     aElement.href = url;
//     return aElement;
// }
// function createImgelement(img) {
//     var imgElement = document.createElement('img');
//     imgElement.src = img;
//     return imgElement;
// }


// function setSlider(index) { 
    
//     let curentSlider = sldierData[index];

//     var elemnt = createAelement(curentSlider.url);

//     elemnt.appendChild(createImgelement(curentSlider.img));
    
    
//     sldier.innerHTML = '';

//     sldier.appendChild(elemnt);
    
//     // setInterval(function () {
//     //     document.getElementsByTagName('img')[0].classList.add('active');
//     // }, 3000);
    
//     // setInterval(function () {
//     //     document.getElementsByTagName('img')[0].classList.remove('active');
//     // }, 5000);
// }


// function arrowRight() { 
//     if (curentIndex   == sldierData.length - 1) { 
//         curentIndex = -1;
//     }
    
//     if (curentIndex <= sldierData.length - 1) { 
//         curentIndex++;
//        setSlider(curentIndex);
//     }
    
//     console.log(curentIndex);
// }

// function arrowLeft() { 
//     if (curentIndex == 0) { 
//         curentIndex = sldierData.length - 1;
//     }

//     if (curentIndex !== 0) { 
//         curentIndex--;
//         setSlider(curentIndex);
//     } 
//     console.log(curentIndex);
// }

// right.addEventListener('click', arrowRight);


// left.addEventListener('click',arrowLeft);


// setInterval(function () {
//     arrowRight();
//     setSlider(curentIndex);
// }, 3000)
// setSlider(curentIndex);
