var swiperW = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  );
  var swiperD = new Swiper(".mySwiperDevice", {
    direction: "horizontal",
    slidesPerView: 1.1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination-device",
      clickable: true,
    },
  });