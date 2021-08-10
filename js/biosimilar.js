var isOn=0; 
$(function(){
    //스크롤 값에 따른 애니메이션 실행
    $(window).scroll(function(){
        sct = $(window).scrollTop();
        tp1 = $(".tabCont1_1").offset().top;
        tp2 = $(".tabCont1_2").offset().top;
        tp3 = $(".tabCont1_3").offset().top;
//        console.log(sct+"|"+tp1+"|"+tp2+"|"+tp3+"|");
        if(sct>tp1 && sct<tp2){
            line_Ani();
        }else if(sct>tp2){
            if(isOn>0){
                return false;
            }
            circle_Ani();
            stick_Ani();
        }
    });

    /*-------------------------------------- */
    //탭메뉴
    var tabBtn = $(".at1_box>.tabBtn").find("li");
    // tabBtn.eq(0).css("border-bottom","4px solid #2c5bac");
    tabBtn.eq(0).find("a").css("color","#2c5bac");

    var tabCont = $(".tabCont>div");
    tabCont.hide().eq(0).show(); //항암제 컨텐츠만 보이도록
    var mobile_width = $(window).width(); //모바일 사이즈
    
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");

        if(mobile_width < 768){
            //모바일일때
            //컨텐츠 박스 사이즈 조절
            if(index==0){
                $(".at2").css("height","1750px");
            }else{
                $(".at2").css("height","800px");
            }
        }else{
            //컨텐츠 박스 사이즈 조절
            if(index==0){
                $(".at2").css("height","1750px");
            }else{
                $(".at2").css("height","1050px");
            }
        }
        
        tabBtn.css("border","none");
        // tabBtn.eq(index).css("border-bottom","4px solid #2c5bac");
        tabBtn.find("a").css("color","rgb(126, 126, 126)");
        tabBtn.eq(index).find("a").css("color","#2c5bac");
    });


    // 자가면역질환 fade slide
    for(i=0; i<2; i++){
        $(".tabCont2_1 > .tabCont1_box> .slideBox >li").eq(i).css("background","url(img/biosimilar/img"+i+".jpg) no-repeat center center")
        .css("background","contain");
    }

    $(".tabCont2_1 > .tabCont1_box> .slideBox >li").hide().eq(0).show();
    var current=0;
    setInterval(function(){
        var next = (current+1)%2;
        $(".tabCont2_1 > .tabCont1_box> .slideBox").find("li").eq(current).stop().fadeOut();
        $(".tabCont2_1 > .tabCont1_box> .slideBox").find("li").eq(next).stop().fadeIn();
        current=next;
    },3000);
    

});

//그라데이션 함수
function color1(i){//i = 59%까지
    $(".circle").css({"background":"conic-gradient(#55b954 0% "+i+"%, #ffffff "+i+"% 100%)"});
    $(".pipe").css({"background":"linear-gradient(to right, #7066a8 0% "+i+"%, #ffffff "+i+"% 100%)"});
}
function color2(i){//i = 86%까지
    $(".circle").css({"background":"conic-gradient(#55b954 0% 59%, #7066a8 59% "+i+"%, #ffffff "+i+"% 100%)"});
    $(".pipe").css({"background":"linear-gradient(to right, #7066a8 0% 60%, #55b954 60% "+i+"%, #ffffff "+i+"% 100%)"});
}
function color3(i){//i = 100%까지
    $(".circle").css({"background":"conic-gradient(#55b954 0% 59%, #7066a8 59% 86%, #6d6e71 86% "+i+"%, #ffffff "+i+"% 100%)"});
    $(".pipe").css({"background":"linear-gradient(to right, #7066a8 0% 60%, #55b954 60% "+i+"%, #ffffff "+i+"% 100%)"});
}

//항암제 - 꺾은선 그래프 애니메이션 함수
function line_Ani(){
    var line_Graph = $(".cls-1");
    line_Graph.animate({"stroke-dashoffset":0},1000);
}

//항암제 - 원이랑 파이프라인 애니메이션 함수
function circle_Ani(){
    i=1; 
    var circleAni = setInterval(function(){
        if(i<59){
            color1(i); i++;
        } else if(i<86){
            color2(i); i++;
        } else if(i<101){
            color3(i); i++;
        } else {
            clearInterval(circleAni);
        }
    },10);
    isOn = 1;
}

//항암제 - 막대 그래프 애니메이션 함수
function stick_Ani(){
    var stick_Graph = $(".stick>li");
    stick_Graph.eq(0).stop().animate({"height":"80%"},500).css("background","#55b954");
    stick_Graph.eq(1).stop().animate({"height":"20%"},500);
    stick_Graph.eq(2).stop().animate({"height":"18%"},500);
    stick_Graph.eq(3).stop().animate({"height":"55%"},500);
    stick_Graph.eq(4).stop().animate({"height":"45%"},500);
    stick_Graph.eq(5).stop().animate({"height":"50%"},500);
}
