$(document).ready(function () {
    $('[sefbtn]').on('click', function () {
        var category = $(this).attr('sefbtn');
        var sefval = $('[sefval]');
        sefval.val(category);

        $('.skills .header .nav .item[sefbtn]').each(function () {
            $(this).removeClass('act');
        });

        $(this).addClass('act');
        
        $('.skills .body .items .item').each(function () {
            if (category == '') {
                $(this).show();
            }else if ($(this).attr('sefbox') === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 500);
    });
});
