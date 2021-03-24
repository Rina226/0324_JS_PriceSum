$(function(){

    //이벤트핸들러는 금액확인 버튼이 되어야 함.
    //버튼을 누르면 아래 항목들을 계산하시오
    $("button#calcBtn").click(function(){
    var salesPrice = 16000; //판매가격 16000원
    var grinding = 0; //분쇄도 선택
    var cnt = 0; //(count=cnt)수량

    grinding = parseInt($("#grinding").val());
    //alert("grinding : " + typeof grinding); 찍어보기. 요소 앞에 typeof 적으면 그게 문자형인지, 숫자형인지 보여줌.
    cnt = parseInt($("#cnt").val());
    //alert("cnt :" + cnt); 수량 찍어보기

    var priceSum = salesPrice*cnt + grinding
    //   총상품가격  기본판매가*수량 + 분쇄옵션(추가금액)
    //alert("priceSum :" + priceSum); 총금액 찍어보기

    $("#priceSum").text(priceSum);

    });


});
