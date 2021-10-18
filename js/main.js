document.addEventListener('DOMContentLoaded', ()=> {
      const elementosCarousel = document.querySelectorAll('.carousel');
      M.Carousel.init(elementosCarousel,{
        duration: 150
      });
    });
  
    // Or with jQuery
  
    /*$(document).ready(function(){
      $('.carousel').carousel();
    });*/
        