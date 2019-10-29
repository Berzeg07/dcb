$(document).ready(function() {

    $('.tab-menu a').hover(function() {
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('menu');
        $('.dropdowmmenu').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
        $('.header-bottom').mouseleave(function(){
            $('.dropdowmmenu').fadeOut();
            $('.tab-menu a').removeClass('active');
        });
    });

    var specialist = new Swiper('.specialist-slider', {
        //   direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //   },
    });



    var infoSlider = new Swiper('.info-slider', {
        slidesPerView: 7,
        spaceBetween: 15,
        loop: false,
        autoplay: {
            delay: 1500,
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            399: {
                slidesPerView: 1
            },
            400: {
                slidesPerView: 2
            },
            599: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 7
            }
        },
    });

    $('.specialist-slider').on('mouseenter', function(e) {
        specialist.autoplay.start();
    });
    $('.specialist-slider').on('mouseleave', function(e) {
        specialist.autoplay.stop();
    });

    $('.link-box__border').hover(function() {
        $(this).find('.b-dotted').toggleClass('active');
    });

    $('.link-box_hidden').hover(function() {
        $('.list-hidden').stop().slideToggle();
    });

    $('.link-box').hover(function() {
        var img = $(this).find('.link-box__icon');
        img.animate({
            opacity: '0'
        }, 200);
        setTimeout(function() {
            img.toggleClass('active');
            img.animate({
                opacity: '1'
            }, 200);
        }, 200);
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 90) {
                $('.header-bottom').addClass('stickytop');
            } else {
                $('.header-bottom').removeClass('stickytop');
            }
        });
    });

    function lineLength() {
        if ($('.main-nav__first').hasClass('active')) {
            $('.main-nav__line').css('width', '10%');
        }
        if ($('.main-nav__second').hasClass('active')) {
            $('.main-nav__line').css('width', '34%');
        }
        if ($('.main-nav__third').hasClass('active')) {
            $('.main-nav__line').css('width', '62%');
        }
        if ($('.main-nav__fourth').hasClass('active')) {
            $('.main-nav__line').css('width', '83%');
        }
        if ($('.main-nav__fifth').hasClass('active')) {
            $('.main-nav__line').css('width', '97%');
        }
    }

    lineLength();

    function lineColor() {
        $('.main-nav__line').toggleClass('pink');
    }

    $('.main-nav__first').hover(function() {
        $('.main-nav__line').css('width', '10%');
        lineColor();
        $(this).mouseleave(function() {
            lineLength();
        });
    });

    $('.main-nav__second').hover(function() {
        $('.main-nav__line').css('width', '34%');
        lineColor();
        $(this).mouseleave(function() {
            lineLength();
        });
    });

    $('.main-nav__third').hover(function() {
        $('.main-nav__line').css('width', '62%');
        lineColor();
        $(this).mouseleave(function() {
            lineLength();
        });
    });

    $('.main-nav__fourth').hover(function() {
        $('.main-nav__line').css('width', '83%');
        lineColor();
        $(this).mouseleave(function() {
            lineLength();
        });
    });

    $('.main-nav__fifth').hover(function() {
        $('.main-nav__line').css('width', '97%');
        lineColor();
        $(this).mouseleave(function() {
            lineLength();
        });
    });

    $('.main-nav__list li').click(function() {
        $('.main-nav__list li').removeClass('active');
        $(this).addClass('active');
        lineLength();
    });

    $('.search input').focus(function() {
        $(this).parent().addClass('active');
        $(this).blur(function() {
            $(this).parent().removeClass('active');
        });
    });

    $('.burger').click(function() {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('active');
    });

    $(".show-dropdown").click(function(){
        var $this = $(this);
        if( !$this.hasClass("active")){
           $(".mobile-menu__dropdown").slideUp();
           $(".show-dropdown").removeClass("active");
       }
       $this.toggleClass("active");
       $this.parents('li').find('.mobile-menu__dropdown').slideToggle()
    });


    $('.phone-box').hover(function() {
        $('.phone-box__hidden').slideDown();
        $(this).addClass('active');
        $('.modal-btn').removeClass('full');
        $('.modal-btn').addClass('min');
    });

    $('.modal-btn').hover(function() {
        if ($(this).hasClass('min')) {
            $(this).removeClass('min');
            $(this).addClass('full');
            $(".phone-box__hidden").slideUp();
            $(".phone-box").removeClass('active');
        }
    });

    $(function() {
        $(document).click(function(event) {
            if ($(event.target).closest(".phone-box").length) return;
            if ($(event.target).closest(".phone-box__hidden").length) return;
            $(".phone-box__hidden").slideUp();
            $(".phone-box").removeClass('active');
            $('.modal-btn').removeClass('min');
            $('.modal-btn').addClass('full');
            event.stopPropagation();
        });
    });

    (function() {
        function mobilecheck() {
            var check = false;
            (function(a) {
                if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }

        var support = {
                animations: Modernizr.cssanimations
            },
            animEndEventNames = {
                'WebkitAnimation': 'webkitAnimationEnd',
                'OAnimation': 'oAnimationEnd',
                'msAnimation': 'MSAnimationEnd',
                'animation': 'animationend'
            },
            animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
            onEndAnimation = function(el, callback) {
                var onEndCallbackFn = function(ev) {
                    if (support.animations) {
                        if (ev.target != this) return;
                        this.removeEventListener(animEndEventName, onEndCallbackFn);
                    }
                    if (callback && typeof callback === 'function') {
                        callback.call();
                    }
                };
                if (support.animations) {
                    el.addEventListener(animEndEventName, onEndCallbackFn);
                } else {
                    onEndCallbackFn();
                }
            },
            eventtype = mobilecheck() ? 'touchstart' : 'click';

        [].slice.call(document.querySelectorAll('.cbutton')).forEach(function(el) {
            el.addEventListener(eventtype, function(ev) {
                classie.add(el, 'cbutton--click');
                onEndAnimation(classie.has(el, 'cbutton--complex') ? el.querySelector('.cbutton__helper') : el, function() {
                    classie.remove(el, 'cbutton--click');
                });
            });
        });

    })();

    ymaps.ready(init);

    function init() {
        var center = [56.873460, 60.735572];
        var myMap = new ymaps.Map('main-map', {
            center: center,
            // controls: [],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'ул. Алексеева, 7',
            hintContent: 'ул. Алексеева, 7'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [188, 95]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);
    }

    $('.marker').click(function(){
        $('.main-map').fadeIn();
        $('.blur-wrap').addClass('blur');
        $('.overlay').fadeIn();
        $('.map-close').click(function(){
            $('.main-map').fadeOut();
            $('.blur-wrap').removeClass('blur');
            $('.overlay').fadeOut();
        });
    });

});
