// DROPDOWN OF PRODUCTS-LI  SETTINGS
  
var productLi = document.getElementById('products-li');
var productLiDropDown = document.getElementById('products-dropdown-ul');


productLi.addEventListener('mouseover',function(){
        productLiDropDown.classList.add('active');   
})

productLi.addEventListener('mouseout',function(){
    productLiDropDown.classList.remove('active');   
})