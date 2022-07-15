$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    initialSlide: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    centerMode:true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.reviews').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    initialSlide: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    centerMode:false,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});