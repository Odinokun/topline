module.exports = function() {

  // begin accordion
  $('.newtopline-how-accordion-top').on('click', function() {
    $(this).toggleClass('newtopline-active');
    $(this).siblings('.newtopline-how-accordion__body').slideToggle();
  });
  // end accordion

  // begin accordion-teacher
  $('.newtopline-teacher-sec__footer-open').on('click', function() {
    $('.newtopline-teacher-sec__footer').addClass('newtopline-active');
    $('.newtopline-teacher-sec__item-hidden').slideDown();
  });
  $('.newtopline-teacher-sec__footer-close').on('click', function() {
    $('.newtopline-teacher-sec__footer').removeClass('newtopline-active');
    $('.newtopline-teacher-sec__item-hidden').slideUp();
  });
  // end accordion-teacher



};