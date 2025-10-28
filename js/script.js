$(function () {
    $(".banner li").hide();
    $(".banner li:nth-child(1)").show();
    setInterval(function () {
        $(".banner li:nth-child(1)").fadeOut().next().fadeIn().end().appendTo(".banner")
    },3000);
});