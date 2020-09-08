// DROPDOWN OF PRODUCTS-LI-KITCHEN SETTINGS
var kitchenLi = document.getElementById('kitchen-li');
var kitchenUlDropDown = document.getElementById('products-dropdown-ul-li-kitchen-ul');


kitchenLi.addEventListener('mouseover',function(){
    kitchenUlDropDown.classList.add('active');   
})

kitchenLi.addEventListener('mouseout',function(){
    kitchenUlDropDown.classList.remove('active'); 
   

})