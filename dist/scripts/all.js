'use strict';

var menuApp = new Vue({
    el: '.nav',
    data: {
        menuOpen: false
    }
});

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    $('.list .list-item').each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.6
        }).setClassToggle(this, 'reveal')
        // .addIndicators()
        .reverse(false).addTo(controller);
    });

    new ScrollMagic.Scene({
        triggerElement: '.dark-header .main-header',
        triggerHook: 0.03,
        duration: $('.dark-header .main-header').innerHeight()
    }).setClassToggle('.menu', 'dark')
    // .addIndicators()
    .addTo(controller);
});