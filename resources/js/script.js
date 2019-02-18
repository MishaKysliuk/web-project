/*
$(document).ready(function () {

    /!* For the sticky navigation *!/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            this.offset = '300px';
            $('nav').removeClass('sticky');

        }
    }, { offset: '60px' });

     /!* For the scrolling *!/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /!* Animations on scroll *!/

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, { offset: '50%' });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, { offset: '50%' });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, { offset: '50%' });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, { offset: '50%' });


    /!* Mobile navigation *!/

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round').addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round').addClass('ion-navicon-round');
        }
        nav.slideToggle(200);
    });

});*/



document.querySelector('.navigation-mobile-icon').addEventListener('click', function () {
    const nav = document.querySelector('.navigation-list');
    const icon = document.querySelector('.navigation-mobile-icon i');

    icon.classList.toggle('ion-navicon-round');
    icon.classList.toggle('ion-close-round');
    nav.classList.toggle('in');
});

document.querySelectorAll('.link-dropdown-container').forEach(element => {
    element.addEventListener('click', e => {
        const navItem = e.target.closest('.navigation-item');
        const dropdownLink = e.target.closest('.link-dropdown-container');

        if (dropdownLink) {
            const dropdownMenu = navItem.querySelector('.dropdown-menu');

            if (dropdownMenu.clientHeight === 0) {
                dropdownMenu.style.height = dropdownMenu.scrollHeight + 'px';
            } else {
                dropdownMenu.style.height = "0";
            }
            dropdownLink.classList.toggle('opened');
        }
    });
});
