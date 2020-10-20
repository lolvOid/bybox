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
  function removebtn() {
    var x = document.getElementById("registeration");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }


  $('#yes').bind('change',function(){
    $('#childform_contents').fadeToggle(!$(this).is(':checked'));
    $('#childform_contents').find("input").val("");
    $('#childform_contents').find('select option:first').prop('selected',true);
  });
  $("#nok").bind("change", function() {
    $('#childform_contents').fadeOut();
  });

// const heroimg = document.querySelector(".hero-img");
// const babyhero = document.querySelector(".baby-hero");
// const hero = document.querySelector("#hero");
// const title = document.querySelector("#hero-text");


// const tx = new TimelineMax();
// const ty = new TimelineMax();
// const tz = new TimelineMax();
// tx.fromTo(
//     heroimg,
//    1,
//     {scaleX:10,scaleY:10},
//     {scaleX:1,scaleY:1},
//     {ease:Power2.easeInOut})
  


// ty.fromTo(
//   babyhero,
//   2,
//   {y:"-190%"},
//   {y:"0%",ease:Power2.easeInOut,},"+=0.5")

// tz .fromTo(
//   title,
//   3,
//   {opacity:0,y:"100"},
//   {opacity:1,y:"0", onComplete: () => document.querySelector('.content').classList.remove('is-loading')},
//   {ease:Power2.easeInOut,},"+=2.2" ,
//   )


  var intro = gsap.timeline({
    paused: false
});
intro.from(".baby-hero", 1, {
  y:"0",
  ease:"easeInOut",
 
  
});


intro.to(".baby-hero", 1, {
  y:"-10%", 
  ease:"easeInOut",
  repeat:2,
  yoyo:true
  
});

intro.from("#hero-text", 0.5, {
  opacity:0,y:"100",
 
}).from(".hero-img", 0.5, {
  opacity:0,
  
  ease: "easeInOut",
}).from("nav", 0.5, {
  opacity:0,
  
  ease: "easeInOut",
});




intro.to(".hero-img", 0.3, {
 opacity:1,
 ease: "easeInOut",
  
  
  onComplete: () => document.querySelector('html').classList.remove('is-loading')
 
}).to("#hero-text", 1, {
  y:"0%",
  
  ease:Power2.easeInOut,
  
}).to("nav", 1, {
 opacity:1,
  
  ease:Power2.easeInOut,
   
});



