const innerBox_Txt1A=["코로나19는 어떤 질병일까?","초기진단의 중요성과 치료법","변이 바이러스 대응 상황"];
const innerBox_Txt2A=["코로나바이러스 계열의 변종인 SARS-CoV-2가 일으키는 급성 호흡기 감염병으로 발열과 기침 같은 가벼운 증상부터 호흡 곤란, 폐렴 등 중증 호흡기 감염증을 동반합니다.",
"[초기 증상] : 발열, 마른 기침, 피로감, 몸살, 인후통, 설사, 결막염 등등 ",
"렉키로나 외에도 코로나19 항체 후보군을 보유하고 있으며 이 중 변이 바이러스에 중화능을 보인 ‘32번 항체’를 변이 바이러스에 대응하기 위한 신규 치료제로 개발한다는 계획이다."];
const innerBox_Txt3A=["",
"[예방법] : 눈, 코 또는 입을 만지지 마세요. 손을 자주 씻으세요. 비누와 물 또는 알코올 성분의 손 세정제를 사용하세요. 기침 또는 재채기하는 사람으로부터 안전한 거리를 유지하세요.",
"지난달 18일 열린 셀트리온 온라인 기자간담회에서 서정진 회장은 “남아공에서 32번 후보 항체와 렉키로나 칵테일 요법으로 단독 2상을 진행, 6개월 내 완료하겠다”고 말하기도 했다."];

$(function(){
    at1Ani();
    // 마우스 휠
    $("article").on("mousewheel",function(e){
        var delta = 0;
        delta = e.originalEvent.wheelDelta/120; //기본으로 한번 마우스 휠 움직임의 값이 120정도
        var height =$( window ).outerHeight();
        
        if(delta>0){ //마우스 휠 올림
            try{
                var prev = $(this).prev().offset().top;
                
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:prev},1000);
            
        }else{ //마우스 휠 내림
            
            try{
                var next = $(this).next().offset().top;
                var pageNum = Math.round(next/height);
                if(next==0){ return false; }
                if(pageNum==1){at2Ani(); }
                else if(pageNum==2){at3Ani(); }
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:next},1000);
        }
    })

    /*---------------------------------------------------article3*/
    var at3_box = $(".at3_box");
    at3_box.on('click', '.box', function(){
        var bt = $(this).position().top;
        if(bt==0){
            $(this).prev().css("z-index", "400");
            $(this).prev().stop().animate({left:0, top:0, opacity:"1"}, 500);

            $(this).css("z-index", "300");
            $(this).stop().animate({left:30, top:30}, 500);

            $(this).next().css("z-index", "100");
            $(this).next().stop().animate({left:0, top:50, opacity:0}, 500, 
            function(){
                at3_box.prepend("<div class='box'>"+at3_box.find("div:last").html()+"</div>");
                at3_box.find("div:last").remove();
            });
        }else { //후면에 있는 사진을 클릭
            $(this).prev().css("z-index", "300");
            $(this).prev().stop().animate({left:-30, top:-30, opacity:"0"}, 500);

            $(this).css("z-index", "400");
            $(this).stop().animate({left:0, top:0}, 500);

            $(this).next().css("z-index", "300");
            $(this).next().stop().animate({left:30, top:30, opacity:"1"}, 500, 
            function(){
                at3_box.append("<div class='box'>"+at3_box.find("div:first").html()+"</div>");
                at3_box.find("div:first").remove();
            });
        }
    });

    
    /*소셜미디어 이미지 넣기------------------------------article4*/
    for(i=0; i<2; i++){
        $(".at4>ul>li").eq(i).css("background","url(img/covid/social"+i+".jpg)no-repeat center center")
        .css("backgroundSize","contain");
    }   

    $(".at4>ul>li").eq(2).css("background","url(img/covid/social2.png)no-repeat center center")
        .css("backgroundSize","contain"); 

    $(".at4>ul>li").on({
        click:function(){
            index = $(".at4>ul>li").index(this);
            $(".at4").find(".bg").css("display","block");
            $(".innerBox").css({"background":"url(img/covid/social"+index+"-1.jpg) no-repeat center center","backgroundSize":"cover"})
            .html("<h2>"+innerBox_Txt1A[index]+"</h2><br><br>"+innerBox_Txt2A[index]+"<br><br>"+innerBox_Txt3A[index]);
        },
        mouseenter:function loop(){
            $(this).animate({"top":"-20px"},400,function(){
                $(this).animate({"top":"-10px"},400,loop);
            });
            // setInterval(loop,100);
        },
        mouseleave:function(){
            $(this).stop().animate({top:0},400);
        }
    });

    $(".closeBtn").click(function(e){
        e.preventDefault();
        $(".at4").find(".bg").css("display","none");
    });

    /*제품이미지 슬라이드---------------------------------article5*/
    var slideBox = $(".at5_box").find("ul");
    var slideList = slideBox.children().outerWidth();
    var left = -slideBox.offset().left;
    // console.log(slideList) 
    // console.log(left)

    $(".rightBtn").click(function(){
        slideBox.stop().animate({"left":-slideList+left+"px"},800,function(){
           //끝에 추가를 시키는 메소드
           slideBox.append("<li>"+slideBox.find("li:first").html()+"</li>");
           slideBox.find("li:first").remove();
           slideBox.css("left",left);
        })

    });

    $(".leftBtn").click(function(){
        //앞에 추가를 시키는 메소드
        slideBox.stop().animate({"left":slideList+left+"px"},800,function(){
            slideBox.prepend("<li>"+slideBox.find("li:last").html()+"</li>");
            slideBox.find("li:last").remove();
            slideBox.css("left",left);
        });
    });

    //슬라이드 이미지 호버시 확대
    var img = slideBox.find("li");
    img.hover(function(){
        // no=img.index(this);
        // if(no==2){
        //     $(this).css("transform","scale(1.15) translateY(-10%)");
        // }else{
        //     $(this).css("transform","scale(1.15)");
        // }
        $(this).css("transform","scale(1.15)");
        
    },function(){
        // if(no==2){
        //     $(this).css("transform","scale(1) translateY(-10%)");
        // }else{
        //     $(this).css("transform","scale(1) ");
        // }
        $(this).css("transform","scale(1) ");
        
    })

});
function at1Ani(){
    $(".at1>p").stop().animate({"top":"+=5%","opacity":"1"},1200);
}

function at2Ani(){
    $(".at2_bar>li:eq(0)>div").stop().animate({"width":"75%","opacity":"1"},1200);
    $(".at2_bar>li:eq(1)>div").stop().animate({"width":"40%","opacity":"1"},1200);
    $(".at2_bar>li:eq(2)>div").stop().animate({"width":"40%","opacity":"1"},1200);
    $(".at2_bar>li:eq(3)>div").stop().animate({"width":"60%","opacity":"1"},1200);

}

function at3Ani(){
    $(".at3>p:eq(1)").stop().animate({"top":"+=5%","opacity":"1"},1200);
}