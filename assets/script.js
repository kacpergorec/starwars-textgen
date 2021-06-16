$(document).ready(function () {

$(".stars").addClass("display-none");
$('.play').click(function () {
    $("#cockpit")[0].play();
    $(".form-wrapper").addClass("playing");
    $(".begin").addClass("playing");

    $episode = $("#episode").val();
    $title = $("#title").val();
    $text = $("#text").val();

    $('.scroll-episode').append($episode);
    $('.scroll-title').append($title);
    $('.scroll-text').append($text);

    setTimeout(
        function () {
            $("#audio")[0].play();
            $(".stars").removeClass("display-none");
            $(".scroll").addClass("playing");
            $(".logo").addClass("playing");
        }, 9000);
});
})
;