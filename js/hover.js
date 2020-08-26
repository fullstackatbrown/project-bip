window.onload = init;

function init() {
    $("#timeline-p1").on('mouseenter',function () {
        $("#timeline-description-1").addClass("timeline-opacity-1");
    });

    $("#timeline-p1").on('mouseleave',function () {
        $("#timeline-description-1").removeClass("timeline-opacity-1");
    });
}
