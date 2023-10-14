(function(window, document, $, undefined) {
    'use strict';

    var keeperInit = {
        i: function(e) {
            keeperInit.s();
            keeperInit.methods();
        },

        s: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function(e) {
            keeperInit.w();
            keeperInit.counterUp();
            keeperInit.mobileMenuActivation();
            keeperInit.stickyHeaderMenu();
            keeperInit.salActivation();
            keeperInit.keeperSlider();
            keeperInit.keeperSlider_2();
            keeperInit.watch_video();
            keeperInit.banner_slider();
           
           
        },

        w: function(e) {
            this._window.on('load', keeperInit.l).on('scroll', keeperInit.res)
        },


      
        counterUp: function () {
            
            var elementSelector = $('.count');
            elementSelector.each(function(){
                elementSelector.appear(function(e) {
                    var el = this;
                    var updateData = $(el).attr("data-count");
                    var od = new Odometer({
                        el: el,
                        format: 'd',
                        duration: 2000
                    });
                    od.update(updateData);
                });
            });
        },

        salActivation: function() {
            sal({
                threshold: 0.1,
                once: true
            });
        },


        mobileMenuActivation: function(e) {
            
            $('.menu-item-has-children > a').on('click', function(e) {
                
                var targetParent = $(this).parents('.mainmenu-nav'),
                    target = $(this).siblings('.keeper-submenu'),
                    targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.keeper-submenu');
                
                if (targetParent.hasClass('offcanvas')) {
                    $(target).slideToggle(400);
                    $(targetSiblings).slideUp(400);
                    $(this).parent('.menu-item-has-children').toggleClass('open');
                    $(this).parent('.menu-item-has-children').siblings().removeClass('open');
                }

            });
           
            function resizeClassAdd() {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    $('body').removeClass('mobilemenu-active');
                    $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
                    $('.keeper-mainmenu .offcanvas-backdrop').remove();
                    $('.keeper-submenu').removeAttr('style');
                } else {
                    $('body').addClass('mobilemenu-active');
                    $('#mobilemenu-popup').addClass('offcanvas');
                    $('.menu-item-has-children > a').on('click', function(e) {
                        e.preventDefault();
                    });
                }
            }

            $(window).on('resize', function() {
                resizeClassAdd();
            });
            
            resizeClassAdd();
        },


        stickyHeaderMenu: function() {

            $(window).on('scroll', function() {
                // Sticky Class Add
                if ($('body').hasClass('sticky-header')) {
                    var stickyPlaceHolder = $('#keeper-sticky-placeholder'),
                        menu = $('.keeper-mainmenu'),
                        menuH = menu.outerHeight(),
                        topHeaderH = $('.keeper-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        menu.addClass('keeper-sticky');
                        stickyPlaceHolder.height(menuH);
                    } else {
                        menu.removeClass('keeper-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

    keeperSlider: function(){
            $('.js-slider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 400,
                dots: false,
                arrows: false,
            });
        },

        keeperSlider_2: function(){
            $('.js-slider-2').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 400,
                dots: false,
                arrows: false,

            });
        },

        watch_video: function() {
            $('.keeper-demo-video').each(function() {
                $(this).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            });
        },

        banner_slider: function() {
            $('.banner-slider-js').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                        }
                    }
                ]
            });
        },
    }
    keeperInit.i();

})(window, document, jQuery);