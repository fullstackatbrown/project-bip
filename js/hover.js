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
}