var Comeback = function() {
  this.createButton = function() {
    var btn = $('<a class="comeback-button">');
    btn.attr('href', '#comeback');
    return btn;
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
    $(link).attr('id', 'null');
  }
};
