// Prob should wrap these in a doc ready
$(document).ready(function() {

  $('.tree-stage img, .tree-stage h3').click(function(e) {
    e.preventDefault();
    var productList = $(this).parent('.tree-stage').find('.product-list');
    productList.slideToggle(300);
    productList.removeClass('hide');

    return false;
  });

  $('a.runner').smoothScroll({
      beforeScroll: function() {
        console.log($(this));
        $(this).attr('id', 'comeback');
      },
      offset: -60,
      afterScroll: function() {
        var comeback = new Comeback(),
          link = $(this),
          id = link.attr('href'),
          btn = comeback.createButton();

        comeback.addClickHandler(btn, link);
        $(id).prepend(btn);
      }
    });
});
