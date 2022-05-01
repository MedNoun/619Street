//navbar animation on scroll
$(function () {
    var scroll = $(document).scrollTop();
    var navheight = $(".navbar").outerHeight();
    var animate = true;
    $(".fa-bars").on("click", () => {
        animate = false;
        console.log("annuling animate : ", animate);
        $(".navbar").removeClass("animate");
    });
    $(".fa-times").on("click", () => {
        console.log("enabling animate : ", animate);
        animate = true;
    });
    $(window).on("scroll", function () {
        var scrolled = $(document).scrollTop();
        if (animate === true) {
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
        }
        scroll = $(document).scrollTop();
    });
});

//symbole animation
