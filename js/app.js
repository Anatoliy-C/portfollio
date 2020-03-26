window.addEventListener("DOMContentLoaded", function () {

    $(".works-gallery_item").not(":first").hide();
    $(".works-gallery_wrapper .works-gallery_tab").click(function () {
        $(".works-gallery_wrapper .works-gallery_tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".works-gallery_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    $('.about-me-popup').magnificPopup({
        type: 'image'
        // other options
    });



    $('[data-modal=consultation]').on('click', function () {
        $('.overley-form, #consultation').fadeIn('slow');
    });

    $('.modal_close').on('click', function () {
        $('.overley-form, #consultation').fadeOut('slow');
    });

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    // scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });



    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });



});