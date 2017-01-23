/* Pixel Engineering Co -- Custom js -- Handcrafted Code -- */
$(document).ready(function() {
  //owl carousel
  $('#owl-slider').owlCarousel({
    navigation: false, //show nxt and previous
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true,
    stopOnHover: true
  });

  //nav shrink and fade
  $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if (scroll > 0 ) {
       $('.fullnav').addClass('scrolled');
       $('.nav-list').addClass('list-scroll');
       $('.brand').addClass('logo-scroll');
   }
    if (scroll <= 0 ) {
      $('.fullnav').removeClass('scrolled');
      $('.nav-list').removeClass('list-scroll');
      $('.brand').removeClass('logo-scroll');
    }
  });

  //nav-to-top arrow function
  var offset = 400;
  var duration = 300;
  $(window).scroll(function() {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.back_to_top').fadeIn(duration);
    } else {
      jQuery('.back_to_top').fadeOut(duration);
    }
  });

  $('.back_to_top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });

  //smooth scroll fuction for hash links
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 59
        }, 1000);
        return false;
      }
    }
  });

  $('#mblmenu').click(function() {
    $('.mblnav').slideToggle();
  });

});
