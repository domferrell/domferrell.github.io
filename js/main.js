//Code for handling UX
//Variables used throughout code.
var windowWidth = 0;
var windowHeight = 0;

//
function scrollanim(id){ //Scroll check
  $(window).scroll(function() {
    var top_of_element = $(id).offset().top;
    var bottom_of_element = $(id).offset().top + $(id).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();

    if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element)){
        // The element is visible, do something

        $(id).addClass('animated fadeIn');
    }
    else {

    }
    if((bottom_of_screen < top_of_element)){
      $(id).removeClass('animated fadeIn')
    }
  });
}

//
function topCheck(id, animation){ //Scroll check
  $(window).scroll(function() {
    var top_of_element = $(id).offset().top;
    var bottom_of_element = $(id).offset().top + $(id).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top = $(window).scrollTop()
    if(top >= 250){
      $('nav').css({
        'top' : '0px',
        'left' : '0px',
        'width' : '100%',
        'height' : '40px',
        'margin' : '0',
        'padding' : '0',
        'display' : 'flex',
        'position' : 'fixed'
      });
      $('nav div').css({
        'margin' : '0',
        'padding' : '0',
        'width' : '33.33%',
        'display' : 'flex',
      });
      $('nav div a').css({
        'flex-grow' : '1',
        'display' : 'flex',
        'align-items' : 'center',
        'justify-content' : 'center',
        'padding' : '0',
        'margin' : '0',
        'height' : '40px',
        'text-align' : 'center',
        'top' : '0'
      });
    }
    else{
      $('nav').removeAttr('style');
      $('nav div').removeAttr('style');
      $('nav div a').removeAttr('style');
    }
  });
}

//Document check
$(document).ready(function(){
  //Set globals
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  //On Scrolls
  topCheck('nav', 'awet');

  //On Hovers
  $('nav a').hover(function(){
    $(this).animate({

    });
  }, function(){

  });

  //ARMAAN
  $('.gallery-image img').click(function(){ //Open modal on image click
  $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
  $('#enlargeImageModal').modal('show');
  });

  $('.cscroll').click(function(){ //Scroll animatino to contact
    $('.section-contact').animatescroll({scrollSpeed:1500,easing:'easeInOutQuad'});
  });

  $('.owscroll').click(function(){ //Scroll back up to work from bottom
    $('.jumbotron').animatescroll({scrollSpeed:1500});
  });

  $('.scscroll').click(function(){ //Scroll back up to work from bottom
    $('.carousel').animatescroll({scrollSpeed:1500});
  });


  scrollanim('p');
  scrollanim('h1');
  scrollanim('h2');
  scrollanim('h3');
  scrollanim('img');
});
