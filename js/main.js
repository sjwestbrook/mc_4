// when the #main_nav is clicked, the class "active" will be added to #main_nav
// the a tags in the main nav are styled under media queries to display appropriately for mobile devices
// click again and the active class will be removed from #main_nav

$(document).ready(function() {
  
  $('.menu').click(function(e) {
    e.stopPropagation(); 
    $('#main_nav').toggleClass('active');
  });
  
  $(document).click(function() {
    $('#main_nav').removeClass('active');
  });
  
});
