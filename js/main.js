$(function() {
    var target_date = new Date(2016, 5, 16, 6, 0, 0, 0).getTime();

    var days, hours, minutes, seconds;

    function showTime() {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        if (hours <= 0 && minutes <= 0 && seconds <= 0)
            location.reload();

        //  hours += days * 24;

        days = days < 10 ? "0" + days : "" + days;
        hours = hours < 10 ? "0" + hours : "" + hours;
        minutes = minutes < 10 ? "0" + minutes : "" + minutes;
        seconds = seconds < 10 ? "0" + seconds : "" + seconds;

        $('.day p').text(days);
        $('.hour p').text(hours);
        $('.minute p').text(minutes);
        $('.second p').text(seconds);
        //$('.timer span').text(hours + ':' + minutes);
    }

    showTime();

    setInterval(function() {
        showTime();
    }, 1000);


    $('.overlay').height($(document).height());

    $('.register').on('click', function(e) {

        e.preventDefault();

        $('.overlay').fadeIn('fast', function() {
            $('.register-popup').fadeIn('fast');
        });
    });

    $('.register-popup a').on('click', function(e) {

        e.preventDefault();

        $('.register-popup').fadeOut('fast', function() {
            $('.overlay').fadeOut('fast');
        });

    });

    $('.login').on('click', function(e) {

        e.preventDefault();

        $('.overlay').fadeIn('fast', function() {
            $('.login-popup').fadeIn('fast');
        });
    });

    $('.login-popup a').on('click', function(e) {

        e.preventDefault();

        $('.login-popup').fadeOut('fast', function() {
            $('.overlay').fadeOut('fast');
        });

    });

    $('.profile').on('click', function(e) {

        e.preventDefault();

        $('.overlay').fadeIn('fast', function() {
            $('.profile-popup').fadeIn('fast');
        });
    });

    $('.profile-popup .close').on('click', function(e) {

        e.preventDefault();

        $('.profile-popup').fadeOut('fast', function() {
            $('.overlay').fadeOut('fast');
        });

    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });

    $('.mobile-menu').on('click', function() {
        $(this).next().slideToggle();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');

        } else {
            $(this).addClass('active');
        }
    });


});