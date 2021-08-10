$(function(){
    // 마우스 휠
    $("article").on("mousewheel",function(e){
        var delta = 0;
        delta = e.originalEvent.wheelDelta/120; //기본으로 한번 마우스 휠 움직임의 값이 120정도

        // var moveTop = null;
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
                if(next==0){ return false; }
                
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:next},1000);
        }
    })


    /*-------------------article3------------------- */
    //핵심가치 아이콘 이미지 넣기
    for(i=0; i<4;i++){
        $(".at3_cont2 ul li:eq("+i+") div").css({"background":"url(img/introduce/icon"+i+".png) no-repeat center center","backgroundSize":"contain"});
    }
    
});

