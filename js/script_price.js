jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../images/SUB2/up.jpg"></div><div class="quantity-button quantity-down"><img src="../images/SUB2/down.jpg"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});


//인풋값 받아와서 총가격 계산하기
$(function () {
  //총 가격 처음상태 입력하기
  var price = $(".price span").text();
  $(".total_price span").text(price);


  //숫자 조절시에 계산하기
  price = price.replace(/[^\d]+/g, "");
  $(".quantity-button").click(function () {
    //인풋 숫자값 가져오기
    var CountNumber = $(".numb_box input").val();
    //인풋 숫자값으로 계산
    var totalNumb = price * CountNumber;
    totalNumb = totalNumb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    $(".total_price span").text(totalNumb);//콤마 붙여서 총가격에 입력
  });

});


//https://lnsideout.tistory.com/entry/jQuery%EC%A0%9C%EC%9D%B4%EC%BF%BC%EB%A6%AC-%EC%88%AB%EC%9E%90%EC%B2%9C%EB%8B%A8%EC%9C%84%EC%BD%A4%EB%A7%88-%EC%B0%8D%EA%B8%B0-%EB%B0%8F-%EC%A0%9C%EA%B1%B0
