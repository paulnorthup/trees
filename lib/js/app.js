// Prob should wrap these in a doc ready
$(document).ready(function() {

  // runner links
  $('a.runner').smoothScroll({offset: -60});

  // Tree hide show
  $('.tree-stage img').click(function() {
    var productList = $(this).parent('.tree-stage').find('.product-list');
    productList.slideToggle(300);
    productList.removeClass('hide');
  });

});
