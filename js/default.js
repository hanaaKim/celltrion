//기본적으로 사용하는 변수
let i=0, no=0, index=0, size=0;

/*================================함수정의================================*/

/*================================제이쿼리================================*/
$(function(){
	// 마우스 휠
    // $("article").on("mousewheel",function(e){
    //     var delta = 0;
    //     delta = e.originalEvent.wheelDelta/120; //기본으로 한번 마우스 휠 움직임의 값이 120정도

    //     // var moveTop = null;
    //     if(delta>0){ //마우스 휠 올림
    //         try{
    //             var prev = $(this).prev().offset().top;
    //         }catch(e){
    //             return false;
    //         }
    //         $("html, body").stop().animate({scrollTop:prev},1000);
            
    //     }else{ //마우스 휠 내림
    //         try{
    //             var next = $(this).next().offset().top;
    //             if(next==0){ return false; }
    //         }catch(e){
    //             return false;
    //         }
    //         $("html, body").stop().animate({scrollTop:next},1000);
    //     }
    // })

    //스크롤 이벤트
    // $(window).scroll(function(){
    //     var scrollValue = $(document).scrollTop();
    //     var windowHeight = $(window).height(); //창 높이
    //     var scrollH = scrollValue/windowHeight; //0~4, 5:footer
    //     console.log("scrolllH : "+scrollH);
        
       
    // });
    

	/*------------------------메뉴랑 푸터 연결------------------------*/
    //footer 연결
	$(".menu").load('menu.html');
	$(".footer").load('footer.html');

    /*-----top버튼-----*/
    $(".upBtn").click(function(){
        $("html, body").stop().animate({"scrollTop":0},500);
    });
});

