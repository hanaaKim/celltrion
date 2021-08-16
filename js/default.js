//기본적으로 사용하는 변수
let i=0, no=0, index=0, size=0;
$(function(){
	/*------------------------메뉴랑 푸터 연결------------------------*/
    //footer 연결
	$(".menu").load('menu.html');
	$(".footer").load('footer.html');

    /*-----top버튼-----*/
    $(".upBtn").click(function(){
        $("html, body").stop().animate({"scrollTop":0},500);
    });
});

