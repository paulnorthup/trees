// Prob should wrap these in a doc ready
$(document).ready(function() {

  // runner links
  var returnButton = "<a class='runBack' href='#return'>Back to where you were</a>";

  $('a.runner').click(function(event) {
    event.preventDefault();
    $(this).attr('id','return');
    $(this).smoothScroll({offset: -60});
    var el = $(this).attr('href');
    $(el).prepend(returnButton);
  });

  $('a.runBack').click(function(event) {
    event.preventDefault();
    $(this).smoothscroll();
    $('#return').prop('id', null);
    $(this).remove();
  });

});
