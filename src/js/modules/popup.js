module.exports = function() {

  // begin popup open
  $('.newtopline-popup-open').on('click', function(e) {
    e.preventDefault();

    let targetPopup = '#' + $(this).data('popup');
    $('#popup__layer').fadeIn();
    $(targetPopup).addClass('newtopline-active');
  });
  // end popup open

  // begin popup close
  $('#popup__layer, .newtopline-popup__close, .newtopline-popup__btn').on('click', function() {
    $('#popup__layer').fadeOut();
    $('.newtopline-popup').removeClass('newtopline-active');
  });
  // end popup close

};