let showMegaMenu = document.querySelector(".header_mid_right");
let midBar = document.querySelector('.mid-bar');
let closeButton =  document.querySelector('.header_mid_right_nav nav  .closebutton');


let showCloseMenu = document.querySelector('.megmenu')




midBar.addEventListener('click',()=>
{
    showMegaMenu.classList.add("showBar")
})

closeButton.addEventListener('click',()=>
{
    // alert("ok")
    // showCloseMenu.classList.add('closeMenu')
    showMegaMenu.classList.toggle("showBar")
})