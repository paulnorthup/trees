// Prob should wrap these in a doc ready
$(document).ready(function() {
  var comeback = new Comeback(),
    scrollOffset = 30;

  $('.tree-stage img, .tree-stage h3').click(function(e) {
    e.preventDefault();
    var productList = $(this).parent('.tree-stage').find('.product-list');
    productList.slideToggle(300);
    productList.toggleClass('hide');
    return false;
  });

  $('a.runner').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    comeback.prepare();
    comeback.addButton($(this));
    comeback.scrollTop($(target), scrollOffset);
    return false;
  });
});
