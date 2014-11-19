// Prob should wrap these in a doc ready
$(document).ready(function() {
  var comeback = new Comeback();

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
    that.attr('id', 'comeback');
    comeback.prepare();
    comeback.addButton(that);

    $('html, body').stop().animate({
        'scrollTop': ($target.offset().top - 60)
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });
});
