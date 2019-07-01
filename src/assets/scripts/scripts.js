var menuApp = new Vue({
    el: '.nav',
    data: {
        menuOpen: false
    },
})

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    $('.list .list-item').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setClassToggle(this, 'reveal')
        // .addIndicators()
        .reverse(false)
        .addTo(controller);
    })
})
