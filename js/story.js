$(function(){
    at1_Ani();
    var target = $(".at1").find(".con_txt");
    txt_Ani(target);//약간의 딜레이를 주고싶은데

    // 마우스 휠
    var ht = $(window).height(); //한 아티클의 높이값 
    $("article").on("mousewheel",function(e){
        var delta = 0;
        delta = e.originalEvent.wheelDelta/120; 
        if(delta>0){ //마우스 휠 올림
            try{
                var prev = $(this).prev().offset().top;
                var pageNum = Math.round(prev/ht);
            }catch(e){
                return false;
            }
            
            var target = $(this).prev().children(".con_txt"); //다음 article의 자식 con_txt
            $("html, body").stop().animate({scrollTop:prev},1000,function(){
                //콜백함수로 함수호출
                txt_Ani(target);

                if(pageNum == 2){//at3
                    at4_reset()
                    at3_Ani();
                }else if(pageNum == 1){//at2
                    at3_reset()
                    at2_Ani();
                }else if(pageNum == 0){//at1
                    at2_reset()
                    at1_Ani();
                }else{ return false;}
            });

            //텍스트 다시 초기화
            text_reset($(this));
            
        }else{ //마우스 휠 내림
            try{
                var next = $(this).next().offset().top;
                var pageNum = Math.round(next/ht);
                if(next==0){ return false; } //마지막 아티클 일때
            }catch(e){
                return false;
            }
            var target = $(this).next().children(".con_txt"); //다음 article의 자식 con_txt
            $("html, body").stop().animate({scrollTop:next},1000,function(){
                //콜백함수로 함수호출
                txt_Ani(target);
                console.log(pageNum);
                if(pageNum == 1){//at2
                    at1_reset();
                    at2_Ani();
                }else if(pageNum == 2){//at3
                    at2_reset();
                    at3_Ani();
                }else if(pageNum == 3){//at4
                    at3_reset()
                    at4_Ani();
                }else{return false; }
            });

            //텍스트 다시 초기화
            if(pageNum!=4){
                text_reset($(this));
            }
            
        }
    })


});
/*-------------------------------------- */
//이미지 애니메이션 함수
function at1_Ani(){
    var img = $(".cont_img1");
    var width = img.width();
    var left = img.offset().left;
    var move_value = left-width;

    if(move_value<0){
        img.stop().animate({"left":0},1000);
    }else{
        img.stop().animate({"left":move_value},1000);
    }
}

function at2_Ani(){
    var img1 = $(".cont_img2");
    var img2 = $(".cont_img3");
    img1.stop().animate({"left":0},1000);
    img2.stop().animate({"left":0},1000);
}

function at3_Ani(){
    var img = $(".cont_img4");
    img.stop().animate({"left":0},1000);
}

function at4_Ani(){
    var img = $(".cont_img5");
    img.stop().animate({"opacity":1},1000);
}

//이미지 초기화 함수
function at1_reset(){
    var img = $(".cont_img1");
    img.stop().animate({"left":"100%"},0);
}

function at2_reset(){
    var img1 = $(".cont_img2");
    var img2 = $(".cont_img3");
    var left1 = img1.width();
    img1.stop().animate({"left":-left1},0);
    img2.stop().animate({"left":"40%"},0);
}

function at3_reset(){
    var img = $(".cont_img4");
    var left = img.width();
    img.stop().animate({"left":-left},0);
}

function at4_reset(){
    var img = $(".cont_img5");
    img.stop().animate({"opacity":0},0);
}

//텍스트 애니메이션 함수
function txt_Ani(t){
    var target = t;

    var line01 = target.children(".line01");
    var line02 = target.children(".line02");
    var line03 = target.children(".line03");
    var line04 = target.children(".line04");

    target.stop().animate({"opacity":1},1000);
    line01.stop().animate({"width":"100%"}, 1600);
    line02.stop().animate({"height":"100%"},1600);
    line03.stop().animate({"width":"100%"}, 1600);
    line04.stop().animate({"height":"100%"},1600);
}   

//텍스트 초기화 함수
function text_reset(t){
    var target = t;
    target.children(".con_txt").delay(1000).animate({"opacity":0}, 0);
    target.children(".con_txt").find(".line01").delay(1000).animate({"width":0}, 0);
    target.children(".con_txt").find(".line02").delay(1000).animate({"height":0},0);
    target.children(".con_txt").find(".line03").delay(1000).animate({"width":0}, 0);
    target.children(".con_txt").find(".line04").delay(1000).animate({"height":0},0);
}