(function ($) {
    "use strict";
    $.fn.clearLens = function (lensproperty) {

        return $(this).each(function (ind, elm) {
            if ($(elm).attr('filter') == 'blur') {
                var w = 50;
                var h = 50;
                var blur = 2;

                if (lensproperty && lensproperty.width) w = lensproperty.width;
                if (lensproperty && lensproperty.height) h = lensproperty.height;
                if (lensproperty && lensproperty.blur) blur = lensproperty.blur;

                $(elm).wrap('<div class="blur" />');

                var wrapper = $('<div class="lens-wrap"/>').width($(elm).width()).height($(elm).height());
                wrapper.appendTo($(elm).parent());


                var lens = $('<div class="lens"/>').css('background', 'url(' + $(elm).attr('src') + ') no-repeat 0 0').width(w).height(h);
                lens.appendTo(wrapper);

                var endL = $(wrapper).width() - w;
                var endT = $(wrapper).height() - h - 3;

                $(wrapper).on('mousemove', function (e) {
                    lens.show();
                    var l = e.pageX - $(this).offset().left;
                    var t = e.pageY - $(this).offset().top;
                    lens.css({
                        left: l + 'px',
                        top: t + 'px',
                            'background-position': '-' + l + 'px -' + t + 'px'
                    });
                });

                $(wrapper).on('mouseout', function (e) {
                    lens.hide();
                });

                $(elm).parent().css('visibility', 'visible');

                $(elm).pixastic("blurfast", {
                    amount: blur
                });
            }
        });
    }
})(jQuery);
