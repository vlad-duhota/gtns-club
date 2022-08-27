// slider

$(".projects__slider").slick({

    // normal options...
    infinite: true, 
    slidesToShow: 1,
    dots: true,
    speed: 1000,
  });


// select
$(document).ready(function() {
  $('.footer__select').niceSelect();
});

// projects btn
const btns = document.querySelectorAll('.projects__btn');
const projectsLists = document.querySelectorAll('.more-projects__block');
const moreSection = document.querySelector('.more-projects');
const projectsSection = document.querySelector('.projects');

btns.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const btnId = btn.getAttribute('data-projects'); 
    projectsLists.forEach(list => {
      if(btnId === list.getAttribute('data-projects')){
        projectsLists.forEach(elem => {
          elem.style.display = 'none'
        });
        list.style.display = 'block';
        moreSection.style.display = 'block';
        projectsSection.style.display = 'none';
        $(".more-projects__slider").slick({

          // normal options...
          infinite: true, 
          slidesToShow: 1,
          sliderToScroll: 1,
          dots: true,
          speed: 1000,
        });
      
        const offsetTop = moreSection.offsetTop;
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  }); 
});