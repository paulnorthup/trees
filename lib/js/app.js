// Prob should wrap these in a doc ready
$(document).ready(function() {
  var comeback = new Comeback(),
    scrollOffset = 30;

  $('.tree-stage img, .tree-stage h3').click(function(e) {
    e.preventDefault();
    var productList = $(this).parent('.tree-stage').find('.product-list');
    productList.slideToggle(300);
    productList.removeClass('hide');
    return false;
  });

  $('a.runner').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
      that = $(this);

    $target = $(target);
    comeback.prepare();
    comeback.addButton(that);

    $('html, body').stop().animate({
        'scrollTop': ($target.offset().top - scrollOffset)
    }, 900, 'swing');
  });
});
