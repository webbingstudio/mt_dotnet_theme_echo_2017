(function($){ // start jquery
$(function(){


/* ScrollTo */

$('a.js-scrollTo').on('click', function(){
    var href = this.hash;
    var $target = $(href == '#top' ? 'body' : href);

    if($target.size()){
        var top = $target.offset().top;
        $('html, body').animate({scrollTop:top}, 500, 'swing');
    }
    return false;
});


/* Dropdown Select */

$('select.js-select-location').on('change', function(e) {
    var href = $(this).val();
    if( href != "" ){
        window.location.href = href;
    }
});


/* Hiraku */

$('.offcanvas-right').hiraku({
    btn: '#offcanvas-btn-right',
    fixedHeader: '.header-menu-btn',
    direction: 'right'
});


}); // end $(function
})(jQuery); // end jquery

