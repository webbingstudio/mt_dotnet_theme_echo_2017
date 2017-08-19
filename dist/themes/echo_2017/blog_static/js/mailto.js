;(function($){
"use strict";
var Mailto = window.Mailto || {};

Mailto = (function() {

    function Mailto(element, options) {
        var t = this;

        t.initials = {
            data_set: 'mailto-set',
            data_changetxt: 'mailto-changetxt',
            split: '***'
        };
        t.settings = $.extend({}, t.initials, options);

        t.run(element);
        return false;
    }

    return Mailto;

}());

Mailto.prototype.run = function(element) {
    var
        s,
        m,
        t = this,
        e = $(element);

    s = e.data(t.settings.data_set).split(t.settings.split);

    if (s.length === 3) {
        m = s[1] + '@' + s[0] + s[2];

        if (e.prop('href') !== undefined) {
            e.attr('href', 'mailto:' + m);
        }
        if (e.data(t.settings.data_changetxt) === true) {
            e.text(m);
        }

    }

};

$.fn.Mailto = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].Mailto = new Mailto(element[i], options);
        }
    }
    return element;

};


// activate
// -------------------------

$(function(){

    $('.js-mailto').Mailto();

});
})(jQuery);
