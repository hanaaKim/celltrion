$(function(){
    var menu = $(".article_Menu li");

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


    //스크롤시 현재 영역에 해당하는 메뉴 활성화
	$(window).scroll(function(){
		var scroll = Math.round($(window).scrollTop());
        
        if(scroll>=ht*0 && scroll<ht*0.05){ //at1
            menu.removeClass().eq(0).addClass("active");   
            var target = $("section").eq(0).children("article"); 
            text_Ani(target);
        }
        if(scroll>=ht*1 && scroll<ht*1.05){ //at2
            menu.removeClass().eq(1).addClass("active");   
            var target = $("section").eq(1).children("article"); 
            text_Ani(target);
        }
        if(scroll>=ht*2 && scroll<ht*2.05){ //at3
            menu.removeClass().eq(2).addClass("active");  
            var target = $("section").eq(2).children("article"); 
            text_Ani(target);
        }
        if(scroll>=ht*3 && scroll<ht*3.05){ //at4
            menu.removeClass().eq(3).addClass("active");   
            var target = $("section").eq(3).children("article"); 
            text_Ani(target);
        }
        if(scroll>=ht*4 && scroll<ht*4.05){ //at5
            menu.removeClass().eq(4).addClass("active");   
            var target = $("section").eq(4).children("article"); 
            text_Ani(target);
        }
        if(scroll>=ht*5 && scroll<ht*5.05){ //at6
            menu.removeClass().eq(5).addClass("active");   
            var target = $("section").eq(5).children("article"); 
            text_Ani(target);
        }

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

    var top = target.parents().offset().top;
    text_reset(top);
}

function text_reset(t){
    var top = t;
    var ht = $(window).height(); //한 섹션의 높이값

    var pageNum = Math.round(top/ht);
    var r_pageNum = pageNum-1;
    var n_pageNum = pageNum+1;
    
    //텍스트 다시 초기화
    if(pageNum!=6){ //푸터 제외하기
        $("section").eq(r_pageNum).children("article").find(".p_box>p").css("top","100%");
        $("section").eq(r_pageNum).children("article").find(".span_box>span").css("top","80px");
        $("section").eq(n_pageNum).children("article").find(".p_box>p").css("top","100%");
        $("section").eq(n_pageNum).children("article").find(".span_box>span").css("top","80px")
    }
}