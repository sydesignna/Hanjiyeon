$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 800) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.top').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.top').fadeOut();//나타날 아이콘 클래스 수정!
    }
});