$(function(){

    new WOW().init();
    
  $('.js-button-campaign').click(function(){
    $('style').css('filter', 'blur(5px)');
    $('.js-overlay-campaign').fadeIn();
    $('.js-popup-campaign').fadeIn();
    $('body').css('height', '100vh');
    $('body').css('overflow-y', 'hidden');
    });

  $('.js-close-campaign').click(function(){
    $('.js-overlay-campaign').fadeOut();
    $('style').css('filter', 'none');
    $('body').css('overflow-y', 'visible');
    $('body').css('height', 'unset');
  });
  $(document).mouseup(function(e){
    var popup = $('.js-popup-campaign');
    if(e.target != popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign').fadeOut();
      $('style').css('filter', 'none');
      $('body').css('overflow-y', 'visible');
      $('body').css('height', 'unset');
    }
  })
  
});