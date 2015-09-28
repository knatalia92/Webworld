$(document).ready(function() {

    new WOW().init();
    
    var nav = $('.top-nav'), 
        burgerMenu = $('.nav-min'),
        navItems = $('.nav-items'),
        items = $('input');

    $(window).scroll(function() {

        if ($(window).scrollTop() > 80) {
            nav.removeClass('navigation').addClass('navigation-fixed');
        } else {
            nav.removeClass('navigation-fixed').addClass('navigation')
        }
    });

    burgerMenu.on('click', function(e) {
        e.preventDefault();
        navItems.slideToggle();
    });
});
