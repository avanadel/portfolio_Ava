function mobilemenutoggle() {
    $("#mobile-menu").toggleClass('open');
}
$(window).resize(function () {
    $('#mobile-menu ul').hide();
    if ($(window).width() < 767) {
        //show toggler if not exists
        if (!($("#mobile-menu-toggler").length > 0)) {
            var mobilemenuheight = $('#mobile-menu').height();
            var toggler = "<a id='mobile-menu-toggler' onclick='mobilemenutoggle();' style='height: " + mobilemenuheight + "px; line-height: " + (mobilemenuheight - 1) + "px;'><span class='mobile-menu-text open'></span><span class='mobile-menu-text'>MENU</span><span class='mobile-menu-icon'></span></a>";
            $("#mobile-menu").prepend(toggler);
        }
    }
    $('#mobile-menu ul').attr('style', '')
    //console.log($('#mobile-menu').css('font-size'));
});
$(window).resize();
