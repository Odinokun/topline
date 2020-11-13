module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function(e) {
    e.preventDefault();

    let targetPopup = '#' + $(this).data('popup');
    $('#popup__layer').fadeIn();
    $(targetPopup).addClass('active');
  });
  // end popup open

  // begin popup close
  $('#popup__layer, .popup__close, .popup__btn').on('click', function() {
    $('#popup__layer').fadeOut();
    $('.popup').removeClass('active');
  });
  // end popup close

};