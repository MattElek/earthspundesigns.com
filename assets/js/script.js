addEventListener("load", function() {
  setTimeout(hideURLbar, 0);
}, false);
function hideURLbar() {
  window.scrollTo(0, 1);
}
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});
jQuery(document).ready(function($) {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 900);
  });
  $().UItoTop({
    easingType: 'easeOutQuart'
  });
});
