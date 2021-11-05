window.addEventListener("DOMContentLoaded", () => {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-carousel-services").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  const menuBtn = document.querySelector(".menu-btn"),
    navMenu = document.querySelector(".nav"),
    navLink = document.querySelectorAll(".nav-link"),
    accardion = document.querySelectorAll(".quastions-column"),
    scrollTop = document.querySelector("#scrollTop"),
    scrollShow = document.querySelector(".show-scroll"),
    modal = document.querySelector(".modal-success"),
    modalClose = document.querySelector(".modal-success-close"),
    modalBtn = document.querySelector("[data-modal]");

  const openModalSuccess = () => {
    modalBtn.addEventListener("click", () => {
      modal.classList.toggle("modal-success-show");
      document.body.style.overflow = "hidden";
    });
  };

  modalClose.addEventListener("click", closeSuccessModal);

  function closeSuccessModal(e) {
    modal.classList.toggle("modal-success-show");
    document.body.style.overflow = "";
  }

  // Menu
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

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu();
    });
  });

  // accardion

  accardion.forEach((item) => {
    item.addEventListener("click", () => {
      const active = item.classList.toggle("active");
    });
  });

  window.onscroll = () => {
    if (window.scrollY > 600) {
      scrollShow.classList.remove("show-scroll_hide");
    } else if (window.scrollY < 600) {
      scrollShow.classList.add("show-scroll_hide");
    }
    scrollTop.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  };

  // form

  const orderForm = document.querySelector("#orderForm");

  const sendData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${res.status}`);
    }
    return await res.json();
  };

  const sendOrderForm = () => {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderFormData = new FormData(orderForm);
      sendData("http://itgit.kg/api/v1/course/signup", orderFormData)
        .then(() => {
          orderForm.reset();
          openModalSuccess();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  sendOrderForm();
});
