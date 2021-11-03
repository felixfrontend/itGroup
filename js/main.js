window.addEventListener("DOMContentLoaded", () => {

  $('.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  const menuBtn = document.querySelector(".menu-btn"),
    navMenu = document.querySelector(".nav"),
    navItem = document.querySelectorAll(".nav-item"),
    accardion = document.querySelectorAll(".quastions-column"),
    iconAccardion = document.querySelectorAll('.quastions-column-icon span')

  let menuOpen = false;

  const openMenu = () => {
    menuBtn.classList.add("open");
    navMenu.style.left = "0";
    document.body.style.overflow = "hidden";
    menuOpen = true;
  };

  const closeMenu = () => {
    menuOpen = false;
    menuBtn.classList.remove("open");
    navMenu.style.left = "-100%";
    document.body.style.overflow = "";
  };

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });



  accardion.forEach(item => {
    item.addEventListener('click', () => {
      const active = item.classList.toggle('active')
     
    })
  })


  
  
});
