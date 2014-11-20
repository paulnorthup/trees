var Comeback = function() {
  this.addButton = function(link) {
    var destinationId = link.attr('href'),
      btn = $('<a class="comeback-button" href="#comeback">');

    this.prepare();
    link.parents('.tree-stage').attr('id', 'comeback');
    $(destinationId).prepend(btn);
    this.addClickHandler(btn);
    return false;
  },

  this.prepare = function () {
    $('#comeback').attr('id', null);
    $('.comeback-button').remove();
    return false;
  },

  this.addClickHandler = function(btn) {
    $(btn).smoothScroll({
      beforeScroll: function() {
        $(btn).remove();
      },
      afterScroll: function() {
        $('#comeback').attr('id', null);
      }
    });
  },

  this.scrollTop = function(target, offset) {
    $('html, body').stop().animate({
        'scrollTop': (target.offset().top - offset)
    }, 900, 'swing');
  }
};
