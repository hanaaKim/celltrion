$(function(){
    // 마우스 휠
    var ht = $(window).height(); //한 섹션의 높이값
    $("section").on("mousewheel",function(e){
        var delta = 0;
        delta = e.originalEvent.wheelDelta/120;
        if(delta>0){ //양수 : 마우스 휠 올림
            try{
                var prev = $(this).prev().offset().top;
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:prev},1000);
        }else{ //음수 : 마우스 휠 내림
            try{
                var next = $(this).next().offset().top;
                if(next==0){ return false; }
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:next},1000);
        }        
    });

    var menu = $(".article_Menu li");

    //스크롤시 현재 영역에 해당하는 메뉴 활성화
	$(window).scroll(function(){
		var scroll = Math.round($(window).scrollTop());
        if(scroll==ht*1){
            menu.removeClass();
            menu.eq(1).addClass("active");   
            var target = $("section").eq(1).children("article"); 
            text_Ani(target);
        }
        if(scroll==ht*2){
            menu.removeClass();
            menu.eq(2).addClass("active");   
            var target = $("section").eq(2).children("article"); 
            text_Ani(target);
        }
        var top = $("section").eq(2).offset().top;
        text_reset(top);
	});


    //직접 클릭했을때, 해당 section으로 이동
    menu.click(function(e){
        e.preventDefault();
        no = $(menu).index(this);
        var s_Top_value = ht*no;

        var target = $("section").eq(no).children("article"); 
        $("html, body").stop().animate({scrollTop:s_Top_value},1000,
            function(){
                //스크롤 휠 동작 후, 실행(콜백함수로 함수호출)
                text_Ani(target);
            }
        )
    });

});

function text_Ani(t){
    var target = t;
    var tg1 = target.find("div>.txt1"); //첫번째 텍스트
    var tg2 = target.find("div>.txt2"); //두번째 텍스트

    tg1.stop().animate({top:0},600);
    tg2.stop().animate({top:0},600);
}

function text_reset(t){
    // console.log("reset 실행")
    var top = t;
    var ht = $(window).height(); //한 섹션의 높이값

    var pageNum = Math.round(top/ht);
    var r_pageNum = pageNum-1;

    console.log(pageNum);
    console.log("이전 : "+r_pageNum);
    
    //텍스트 다시 초기화
    if(pageNum!=6 && r_pageNum!=-1){ //푸터 제외하기
        //delay(1000)을 줘서, 스크롤 휠이 지나간 후에 초기상태로 되돌려놓기 위함
        $("section").eq(r_pageNum).children("article").find(".p_box>p").css("top","100%"); //다음 섹션의 자식 article
        $("section").eq(r_pageNum).children("article").find(".span_box>span").css("top","70px"); //다음 섹션의 자식 article
    }
}