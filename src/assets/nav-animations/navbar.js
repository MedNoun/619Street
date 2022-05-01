//navbar animation on scroll
$(function () {
    var scroll = $(document).scrollTop();
    var navheight = $(".navbar").outerHeight();

    $(window).on("scroll", function () {
        var scrolled = $(document).scrollTop();
        if (scrolled > 1) {
            $(".navbar").addClass("isVisible");
        } else {
            $(".navbar").removeClass("isVisible");
        }
        if (scrolled > navheight) {
            $(".navbar").addClass("animate");
        } else {
            $(".navbar").removeClass("animate");
        }

        if (scrolled > scroll) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }

        scroll = $(document).scrollTop();
    });
});

//symbole animation
