module.exports = function() {

  // begin accordion
  $('.how-accordion-top').on('click', function() {
    $(this).toggleClass('active');
    $(this).siblings('.how-accordion__body').slideToggle();
  });
  // end accordion

  // begin accordion-teacher
  $('.teacher-sec__footer-open').on('click', function() {
    $('.teacher-sec__footer').addClass('active');
    $('.teacher-sec__item-hidden').slideDown();
  });
  $('.teacher-sec__footer-close').on('click', function() {
    $('.teacher-sec__footer').removeClass('active');
    $('.teacher-sec__item-hidden').slideUp();
  });
  // end accordion-teacher



};