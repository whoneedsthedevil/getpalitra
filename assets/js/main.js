import '../scss/style.scss';
import Vue from 'vue/dist/vue.js';

  var app = new Vue({
    el: '#app-content',
    data: {
      source: 'https://cs7060.userapi.com/c635100/v635100717/4f7a3/-loJ_QnDfi0.jpg'
    },
    methods: {
      getPrimaryColors: function () {
        var img = new Image();
        img.onload = function () {
          var colorCount = $('.palette .color').length;
          var colorThief = new ColorThief();
          var palette = colorThief.getPalette(img, colorCount);
          console.log('Hello');

          for (var i = 0; i < colorCount; i++) {
              $('.palette .color')
              .eq(i)
              .css('background', 
            'rgb('+ palette[i][0] +',' +  palette[i][1] + ',' +  palette[i][2] +')');
          }
        };
        img.crossOrigin = 'Anonymous';
        img.src = $('.image-box .exampl-image').attr('src');
      },
      checkNewImage: function() {

          if ( $('.image-url-input').hasClass('visible') ) {
            var text = $(".image-url-input").val();
            var result = text.match( /(https?:\/\/)?([\/\-\_\&\w\.]+)\.?(jpg|jpeg|png)/i );

            if (result) {
              $(".exampl-image").replaceWith("<img src='" + result.input + "' class='exampl-image'>");
              console.log(result.input) 
              $('.image-url-input').removeClass('visible');
            } else {
              console.log('not available link');
            }

          } else {
            $('.image-url-input').addClass('visible');
          }
      },
          handler:function(){
              this.checkNewImage();
              this.getPrimaryColors();
          }
    }
  });
 
  app.getPrimaryColors();


  $(document).ready(function () {
      $("#main-scroll-event, .top-menu li:nth-child(3)").click(function () {
          var destination = $("#about-section").offset().top;
          $('body').animate({ scrollTop: destination }, 1100);
       
          return false; 
      });

      $(".mobile-menu").click(function(){
          $(".toggle-menu").toggle("fast");
      });

  });