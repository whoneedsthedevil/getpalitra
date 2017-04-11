import '../scss/style.scss';
import Vue from 'vue/dist/vue.js';

  var app = new Vue({
    el: '#app-content',
    data: function(){
        var history = `I was trying to keep understand English but I don't know any languages features.
        I was a rocket, whose try catch stars in the special web. On my way, 
        I was tried to understand modern art. But there is not so good like in imagination, where you could see how beautiful angels of lesbians 
        kissing sweeter than sugar rain`;
        var historyStorage = history.split('\n');
        //var bioStorage = history.split()
        return {
          source : 'https://cs7060.userapi.com/c635100/v635100717/4f7a3/-loJ_QnDfi0.jpg',
          checkSrc : '',
          inputVisible: false,
          history: historyStorage,
          inputVisible: false
          //test   : bioStorage
        }
    },
    methods: {
      getPrimaryColors: function () {

        var img = new Image();
        img.onload = function () {
          var colorCount = $('.thief.palette .color').length;
          var colorThief = new ColorThief();
          var palette = colorThief.getPalette(img, colorCount);

          for (var i = 0; i < colorCount; i++) {
              $('.color', '.thief.palette')
              .eq(i)
              .css('background', 
            'rgb('+ palette[i][0] +',' +  palette[i][1] + ',' +  palette[i][2] +')');
          }
        };
        img.crossOrigin = 'Anonymous';
        console.log(this.source)
        img.src = this.source;

        this.tryRessemble(img.src);
      },
      checkNewImage: function() {
        this.inputVisible = !this.inputVisible;
        
            var text = $(".image-url-input").val();
            var result = text.match( /(https?:\/\/)?([\/\-\_\&\w\.]+)\.?(jpg|jpeg|png)/i );

            if (result) {
              $(".exampl-image").replaceWith("<img src='" + result.input + "' class='exampl-image'>");
              console.log(result.input) 
              $('.image-url-input').attr('class', 'image-url-input');
            } else {
              console.log('not available link');
              $('.image-url-input').attr('class', 'image-url-input add');
            }

          console.log('have a nice day, dude');
      },
          handler:function(){
              this.checkNewImage();
              this.getPrimaryColors();
              
          },

      tryRessemble: function(imageSrc) { 
          return resemble(imageSrc).onComplete(function(data){

          for (let color in data) {
            console.log(color);
              $('.resemble.palette .color.' + color)
              .animate({
                borderRadius: '0'
              }, 400)
              .text(data[color]);
          }
          $('.resemble.palette .color.red').css('background', 'rgba(' + data.red + ', 0, 0, 1)');
          $('.resemble.palette .color.green').css('background', 'rgba(0, ' + data.green + ',  0, 1)');
          $('.resemble.palette .color.blue').css('background', 'rgba(0, 0, ' + data.blue + ',  1)');
           
          });
      }
    }
  });
 
  app.getPrimaryColors();


  $(document).ready(function () {
      $("#scroll .scroll-icon, .top-menu li:nth-child(3)").click(function () {
          var destination = $("#about-section").offset().top;
          $('body').animate({ scrollTop: destination }, 1100);
       
          return false; 
      });

      $(".mobile-menu").click(function(){
          $(".toggle-menu").toggle("fast");
      });

  });