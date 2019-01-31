$(function(){

  // ф-я скролл
  var btn = $('.up');

   $(window).scroll(function(){
     if ($(window).scrollTop() >= 400 ){
     // btn.css({'display':'block'});
     btn.fadeIn(800);
     }else{
     // btn.css({'display':'none'});
     btn.fadeOut(800);
     }
   });
   btn.on('click', function(){
     $('html, body').animate({
       scrollTop: 0
     }, 0);
   });

// 1 слайдер
  var edSliderjq = new Slider($('.ed-photo'));
  $('.ed-prev').on('click', function(){
    edSliderjq.prev();
  });
  $('.ed-next').on('click', function(){
    edSliderjq.next();
  });

  // 2 слайдер
    var sumSliderjq = new Slider($('.sum-photo'));
    $('.sum-prev').on('click', function(){
      sumSliderjq.prev();
    });
    $('.sum-next').on('click', function(){
      sumSliderjq.next();
    });

  // 3 слайдер
    var nySliderjq = new Slider($('.ny-photo'));
    $('.ny-prev').on('click', function(){
      nySliderjq.prev();
    });
    $('.ny-next').on('click', function(){
      nySliderjq.next();
    });

  // 4 слайдер
    var frSliderjq = new Slider($('.fr-photo'));
    $('.fr-prev').on('click', function(){
      frSliderjq.prev();
    });
    $('.fr-next').on('click', function(){
      frSliderjq.next();
    });

  // 5 слайдер
    var autumnSliderjq = new Slider($('.autumn-photo'));
    $('.autumn-prev').on('click', function(){
      autumnSliderjq.prev();
    });
    $('.autumn-next').on('click', function(){
      autumnSliderjq.next();
    });

  // 6 слайдер
    var lesSliderjq = new Slider($('.les-photo'));
    $('.les-prev').on('click', function(){
      lesSliderjq.prev();
    });
    $('.les-next').on('click', function(){
      lesSliderjq.next();
    });

  // 6 слайдер
    var pokrovSliderjq = new Slider($('.pokrov-photo'));
    $('.pokrov-prev').on('click', function(){
      pokrovSliderjq.prev();
    });
    $('.pokrov-next').on('click', function(){
      pokrovSliderjq.next();
    });

// jquery слайдер
  function Slider(images){
    this.images = images;
    var i = 0;
    var slider = this;

    this.prev = function(){
      slider.images.eq(i)
      .css({
        left: 0,
        right: 'auto',
        top: 'auto',
        bottom: 'auto'
      })
      .animate({
        width:0
      }, 400);

      i--;

      if (i < 0){
        i = slider.images.length - 1;
      }

      slider.images.eq(i)
      .css({
        left: 'auto',
        right: 0,
        top: 'auto',
        bottom: 'auto'
      })
      .animate({
        width: '97.5%'
      }, 400);
    }

    this.next = function(){
      slider.images.eq(i)
      .css({
        left: 'auto',
        right: 0,
        top: 'auto',
        bottom: 'auto'
      })
      .animate({
        width:0
      }, 400);

      i++;

      if (i >= slider.images.length){
        i = 0;
      }

      slider.images.eq(i)
      .css({
        left: 0,
        right: 'auto',
        top: 'auto',
        bottom: 'auto'
      })
      .animate({
        width: '97.5%'
      }, 400);
    }
  }

// навигация сайта
  var list = $('.list');
  var content = $('.content');

  list.on('click', function(){

    list.not(this).removeClass('thisA');
    $(this).addClass('thisA');

    var i = list.index(this);

    content.css({'display' : 'none'});
    content.eq(i).css({'display' : 'block'});
// подменю галереи
    var menu = $('.gallery-menu');
    if(i == 3){
    menu.slideToggle(500);
  }else {
    menu.slideUp(500);
  }
  });
//



});
