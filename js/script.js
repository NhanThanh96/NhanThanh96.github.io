$(document).ready(function(){
   // popup
   $("#register-modal").modal("show").on("shown", function () {
    window.setTimeout(function () {
        $("#register-modal").modal("hide");
    }, 5000);
});
$('#mySlider').on('slide.bs.carousel', function (e) {

  var slideFrom = $(this).find('.active').index();
  var slideTo = $(e.relatedTarget).index();

  $('.slider-info__item').eq(slideFrom).removeClass('active');
  $('.slider-info__item').eq(slideTo).addClass('active');

});
  // hightlight-product carousel

var slickopts = {
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,  
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          rows: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      },
    ]
  };

  $('.highlight-product__carousel').slick(slickopts);
  $('.hightlight-product__control-pre').click(function () {
    $('.highlight-product__carousel').slick('slickPrev');
  })

  $('.hightlight-product__control-next').click(function () {
    $('.highlight-product__carousel').slick('slickNext');
  })

// selling product carousel
  var slickopts = {
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: '0',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      },
    ]
  };

  $('.selling-product__carousel').slick(slickopts);
  $('.selling-product__control-prev').click(function () {
    $('.selling-product__carousel').slick('slickPrev');
  })

  $('.selling-product__control-next').click(function () {
    $('.selling-product__carousel').slick('slickNext');
  })

//   new good carousel
var slickopts = {
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      },
    ]
  };

  $('.new-goods__carousel').slick(slickopts);
  $('.new-goods__control-prev').click(function () {
    $('.new-goods__carousel').slick('slickPrev');
  })

  $('.new-goods__control-next').click(function () {
    $('.new-goods__carousel').slick('slickNext');
  })

//   partner carousel
var slickopts = {
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  $('.partner__carousel').slick(slickopts);
 
//   new product carousel



  $('.new-product__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      },
    ]
  });
  $('.new-product__control-prev').click(function () {
    $('.new-product__carousel').slick('slickPrev');
  })

  $('.new-product__control-next').click(function () {
    $('.new-product__carousel').slick('slickNext');
  })

  // similar product carousel
  $('.similar-product__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      },
    ]
  });
  $('.similar-product__control-prev').click(function () {
    $('.similar-product__carousel').slick('slickPrev');
  })

  $('.similar-product__control-next').click(function () {
    $('.similar-product__carousel').slick('slickNext');
  })
 
  // google Map
  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
});