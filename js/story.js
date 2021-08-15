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
            }catch(e){
                return false;
            }
            
            $("html, body").stop().animate({scrollTop:prev},1000);
        }else{ //마우스 휠 내림
            try{
                var next = $(this).next().offset().top;
                if(next==0){ return false; } //마지막 아티클 일때
            }catch(e){
                return false;
            }
           
            $("html, body").stop().animate({scrollTop:next},1000);
        }
    })


    //모바일시, 스크롤
	$(window).scroll(function(){
        var scroll = Math.round($(window).scrollTop());
        var ht = $(window).height(); 
        
        if(scroll>=ht*0 && scroll<ht*1){ //at1
            var target = $("article").eq(0).find(".con_txt"); //다음 article의 자식 con_txt
            txt_Ani(target);
            at1_Ani();
        }
        if(scroll>=ht*1 && scroll<ht*2){ //at2
            var target = $("article").eq(1).find(".con_txt"); //다음 article의 자식 con_txt
            txt_Ani(target);
            at2_Ani();
        }
        if(scroll>=ht*2 && scroll<ht*3){ //at3
            var target = $("article").eq(2).find(".con_txt"); //다음 article의 자식 con_txt
            txt_Ani(target);
            at3_Ani();
        }
        if(scroll>=ht*3 && scroll<ht*4){ //at4
            var target = $("article").eq(3).find(".con_txt"); //다음 article의 자식 con_txt
            txt_Ani(target);
            at4_Ani();
        }
        
    
    });

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
    var target = t; //con_txt

    var line01 = target.children(".line01");
    var line02 = target.children(".line02");
    var line03 = target.children(".line03");
    var line04 = target.children(".line04");

    target.stop().animate({"opacity":1},1000);
    line01.stop().animate({"width":"100%"}, 1600);
    line02.stop().animate({"height":"100%"},1600);
    line03.stop().animate({"width":"100%"}, 1600);
    line04.stop().animate({"height":"100%"},1600);

    var top = target.parents().offset().top;
    text_reset(top);
}   

//텍스트 초기화 함수
function text_reset(t){
    var top = t;
    var ht = $(window).height(); //한 섹션의 높이값

    var pageNum = Math.round(top/ht);
    var r_pageNum = pageNum-1;
    var n_pageNum = pageNum+1;

    $("article").eq(r_pageNum).children(".con_txt").css("opacity",0);
    $("article").eq(n_pageNum).children(".con_txt").css("opacity",0);

    for(i=1; i<5; i++){
        if(i==1 || i==3){
            $("article").eq(r_pageNum).children(".con_txt").find(".line0"+i+"").css("width",0);
            $("article").eq(n_pageNum).children(".con_txt").find(".line0"+i+"").css("width",0);

        }
        if(i==2 || i==4){
            $("article").eq(r_pageNum).children(".con_txt").find(".line0"+i+"").css("height",0);
            $("article").eq(n_pageNum).children(".con_txt").find(".line0"+i+"").css("height",0);
        }
    }
    
}