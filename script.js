// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("side-navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});


