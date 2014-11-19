var Comeback = function() {
  this.addButton = function(link) {
    var destinationId = link.attr('href'),
      btn = $('<a class="comeback-button">');

    this.prepare();
    link.attr('id', 'comeback');
    btn.attr('href', '#comeback');
    btn.text('Back to list');
    $(destinationId).prepend(btn);
    this.addClickHandler(btn, link);

    return false;
  },

  this.prepare = function () {
    $('#comeback').attr('id', null);
    $('.comeback-button').remove();
    return false;
  },

  this.addClickHandler = function(btn, link) {
    var that = this;
    $(btn).smoothScroll({
      offset: -60,
      beforeScroll: function() {
        $(btn).remove();
      },
      afterScroll: function() {
        that.handleAfterScroll(btn, link);
      }
    });
  },

  this.handleAfterScroll = function(btn, link) {
    $(link).attr('id', null);
  }
};
