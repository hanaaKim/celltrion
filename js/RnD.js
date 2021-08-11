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

            var target = $(this).prev().children("article"); //다음 섹션의 자식 article
            $("html, body").stop().animate({scrollTop:prev},1000,
                function(){
                    //스크롤 휠 동작 후, 실행(콜백함수로 함수호출)
                    text_Ani(target);
                }
            );

            //delay(1000)을 줘서, 스크롤 휠이 지나간 후에 초기상태로 되돌려놓기 위함
            $(this).children("article").find(".p_box>p").delay(1000).animate({top:"100%"},0); //다음 섹션의 자식 article
            $(this).children("article").find(".span_box>span").delay(1000).animate({top:"70px"},0); //다음 섹션의 자식 article

        }else{ //음수 : 마우스 휠 내림
            try{
                var next = $(this).next().offset().top;
                if(next==0){ return false; }
            }catch(e){
                return false;
            }

            var target = $(this).next().children("article"); //다음 섹션의 자식 article
            $("html, body").stop().animate({scrollTop:next},1000,
                function(){
                    //스크롤 휠 동작 후, 실행(콜백함수로 함수호출)
                    text_Ani(target);
                }
            );

            //delay(1000)을 줘서, 스크롤 휠이 지나간 후에 초기상태로 되돌려놓기 위함
            $(this).children("article").find(".p_box>p").delay(1000).animate({top:"100%"},0); //다음 섹션의 자식 article
            $(this).children("article").find(".span_box>span").delay(1000).animate({top:"70px"},0); //다음 섹션의 자식 article
        }        
    });


    //스크롤시 현재 영역에 해당하는 메뉴 활성화
    var menu = $(".article_Menu li");
	$(window).scroll(function(){
		var scroll = Math.round($(window).scrollTop());
        // console.log("scroll : "+scroll);

        // menu.removeClass("active");
		// if(scroll>=ht*0 && scroll<ht*1){ //0<scroll<677
        //     menu.eq(0).addClass("active")
		// }else if(scroll>=ht*1 && scroll<ht*2){
        //     menu.eq(1).addClass("active")
		// }else if(scroll>=ht*2 && scroll<ht*3){
        //     menu.eq(2).addClass("active");
		// }else if(scroll>=ht*3 && scroll<ht*4){
		// 	menu.eq(3).addClass("active");
		// }else if(scroll>=ht*4 && scroll<ht*5){
		// 	menu.eq(4).addClass("active");
		// }else if(scroll>=ht*5 && scroll<ht*6){
		// 	menu.eq(5).addClass("active");
		// }

        for(var i=0; i< 6;i++){
            if(scroll>ht*i && scroll<ht*(i+1)){
                menu.removeClass();
                menu.eq(i).addClass("active");   
                var target = $("section").eq(i).children("article"); 
                text_Ani(target);
            }
            
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

    tg1.stop().animate({top:0},800);
    tg2.delay(700).stop().animate({top:0},800);
}