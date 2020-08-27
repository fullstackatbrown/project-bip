window.onload = init;

function init() {
    $("#timeline-p1").on('mouseenter', function () {
        $("#timeline-description-1").addClass("timeline-opacity");
    });

    $("#timeline-p1").on('mouseleave', function () {
        $("#timeline-description-1").removeClass("timeline-opacity");
    });

    $("#timeline-p2").on('mouseenter', function () {
        $("#timeline-description-2").addClass("timeline-opacity");
        $("#timeline-icon-2").removeClass("animate__fadeOutDown");
        $("#timeline-icon-2").addClass("animate__fadeInUp");
    });

    $("#timeline-p2").on('mouseleave', function () {
        $("#timeline-description-2").removeClass("timeline-opacity");
        $("#timeline-icon-2").removeClass("animate__fadeInUp");
        $("#timeline-icon-2").addClass("animate__fadeOutDown");
    });

    $("#timeline-p3").on('mouseenter', function () {
        $("#timeline-description-3").addClass("timeline-opacity");
    });

    $("#timeline-p3").on('mouseleave', function () {
        $("#timeline-description-3").removeClass("timeline-opacity");
    });

    $("#timeline-p4").on('mouseenter', function () {
        $("#timeline-description-4").addClass("timeline-opacity");
    });

    $("#timeline-p4").on('mouseleave', function () {
        $("#timeline-description-4").removeClass("timeline-opacity");
    });
}