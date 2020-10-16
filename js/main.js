$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('nav-bg');
  }

  else {
        $('nav').removeClass('nav-bg');
  }
})
$(document).ready(function(){
      $('.customer-logos').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 4
              }
          }, {
              breakpoint: 520,
              settings: {
                  slidesToShow: 3
              }
          }]
      });
  });


  $(document).ready(function(){
    $('.carousel').carousel({
        interval: 2500,
      
      })
  })
  $(document).ready(function(){
    $("#language").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 
function showpartners() {
    var x = document.getElementById("partnerbox");
    var y = document.getElementById("partnerside");
    var z = document.getElementById("partnercarousel");
    var w = document.getElementById("partnerbanner");
    var q = document.getElementById("")
    if (x.style.display === "none") {
        y.style.display = "none";
      x.style.display = "block";
      w.style.display = "none";
      z.style.display = "block";
      
    } else {
        y.style.display = "block";
      x.style.display = "none";
      w.style.display = "block";
      z.style.display = "none";

    }
  }

  function addrow() {
    var x = document.getElementById("addchild");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function removerow() {
    var x = document.getElementById("addchild");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }