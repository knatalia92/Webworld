$(document).ready(function() {
    var nav = $('.top-nav');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            nav.removeClass('navigation').addClass('navigation-fixed');
        } else {
            nav.removeClass('navigation-fixed').addClass('navigation')
        }
    });

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(44.5403, -78.5463),
            scrollwheel: false,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
