$(document).ready(function(){
    
//    $('h1').click(function(){
//        
//        $(this).css('background-color','#3DCC84');
//    })
    
//var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window') 
//}, {
//  offset: '25%'
//})    
    
    
    //sticking navigation...
    
    $('.js--scroll-to-section-features').waypoint(function(direction){
        
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    
    //scroll on button...
    
    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({
            scrollTop: $('.js--scroll-to-section-plans').offset().top}, 2000);
        
    });
    
    $('.js--scroll-to-start').click(function(){
        
        $('html, body').animate({
            scrollTop: $('.js--scroll-to-section-features').offset().top},2000);
        });

    //Navigation scroll, css-tricks snippet.......
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

 
// animate on scroll...    
    
    $('.js--wp-01').waypoint(function(direction){
        
        $('.js--wp-01').addClass('animated fadeIn');
        
        
    }, {
        offset : '50%'
    });
    
    
    $('.js--wp-02').waypoint(function(direction){
        
        $('.js--wp-02').addClass('animated fadeInUp');
    },{
        offset : '50%'
    });
    
    
    $('.js--wp-03').waypoint(function(direction){
        
        $('.js--wp-03').addClass('animated fadeIn');
    }, {
        offset : '50%'
    });
    
    
    $('.js--wp-04').waypoint(function(direction){
        
        $('.js--wp-04').addClass('animated pulse');
    },{
        offset : '50%'
    });
    
    
    //mobile navigation
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(600);

        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });
});
