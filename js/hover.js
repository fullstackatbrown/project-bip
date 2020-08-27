window.onload = init;

function init() {
    $("#timeline-p1").on('mouseenter', function () {
        $("#timeline-description-1").addClass("timeline-text-full-opacity");
        $("#timeline-icon-1").removeClass("animate__fadeOutRight");
        $("#timeline-icon-1").addClass("animate__fadeInRight");
    });

    $("#timeline-p1").on('mouseleave', function () {
        $("#timeline-description-1").removeClass("timeline-text-full-opacity");
        $("#timeline-icon-1").removeClass("animate__fadeInRight");
        $("#timeline-icon-1").addClass("animate__fadeOutRight");
    });

    $("#timeline-p2").on('mouseenter', function () {
        $("#timeline-description-2").addClass("timeline-text-full-opacity");
        $("#timeline-icon-2").removeClass("animate__fadeOutRight");
        $("#timeline-icon-2").addClass("animate__fadeInRight");
    });

    $("#timeline-p2").on('mouseleave', function () {
        $("#timeline-description-2").removeClass("timeline-text-full-opacity");
        $("#timeline-icon-2").removeClass("animate__fadeInRight");
        $("#timeline-icon-2").addClass("animate__fadeOutRight");
    });

    $("#timeline-p3").on('mouseenter', function () {
        $("#timeline-description-3").addClass("timeline-text-full-opacity");
        $("#timeline-icon-3").removeClass("animate__fadeOutRight");
        $("#timeline-icon-3").addClass("animate__fadeInRight");
    });

    $("#timeline-p3").on('mouseleave', function () {
        $("#timeline-description-3").removeClass("timeline-text-full-opacity");
        $("#timeline-icon-3").removeClass("animate__fadeInRight");
        $("#timeline-icon-3").addClass("animate__fadeOutRight");
    });

    $("#timeline-p4").on('mouseenter', function () {
        $("#timeline-description-4").addClass("timeline-text-full-opacity");
        $("#timeline-icon-4").removeClass("animate__fadeOutRight");
        $("#timeline-icon-4").addClass("animate__fadeInRight");
    });

    $("#timeline-p4").on('mouseleave', function () {
        $("#timeline-description-4").removeClass("timeline-text-full-opacity");
        $("#timeline-icon-4").removeClass("animate__fadeInRight");
        $("#timeline-icon-4").addClass("animate__fadeOutRight");
    });

    // Scrolling Fade In Animations
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('#timeline-section-header').each(function (i) {
            var bottom_of_object = $('#timeline-section-header').position().top + 100 + $('#timeline-section-header').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            // timeline section header
            if (bottom_of_window > bottom_of_object) {
                $("#timeline-section-header").addClass("animate__fadeInUp");
                $("#timeline").addClass("animate__fadeInUp");
                setTimeout(function(){ $("#arrow-for-timeline").animate({'opacity':'1'}, 400); }, 525);
                
            }
            // timeline animation
            if (bottom_of_window > (bottom_of_object + 205)) {
                $("#timeline-textbox-1").addClass("animate__fadeInUp");
                $("#timeline-p1").animate({'opacity':'1'}, 30);
                setTimeout(function(){ $("#timeline-p2").animate({'opacity':'1'}, 30); }, 150);
                setTimeout(function(){ $("#timeline-p3").animate({'opacity':'1'}, 30); }, 325);
                setTimeout(function(){ $("#timeline-p4").animate({'opacity':'1'}, 30); }, 500);
                setTimeout(function(){ $("#timeline-textbox-2").addClass("animate__fadeInUp"); }, 175);
                setTimeout(function(){ $("#timeline-textbox-3").addClass("animate__fadeInUp"); }, 350);
                setTimeout(function(){ $("#timeline-textbox-4").addClass("animate__fadeInUp"); }, 525);
            }
        });
    });
}