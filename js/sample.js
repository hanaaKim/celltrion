$(function(){
    // 마우스 휠
    $("article").on("mousewheel",function(e){
        var delta = 0;
        delta = e.originalEvent.wheelDelta/120; //기본으로 한번 마우스 휠 움직임의 값이 120정도

        // var moveTop = null;
        if(delta>0){ //마우스 휠 올림
            try{
                var prev = $(this).prev().offset().top;
                if(prev<0){ 
                    
                }
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:prev},1000);
            
        }else{ //마우스 휠 내림
            
            try{
                var next = $(this).next().offset().top;
                if(next==0){ return false; }
                if(next>577){   
                   
                }
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:next},1000);
        }
    })

    //스크롤 이벤트
    $(window).scroll(function(){
		var scroll = Math.round($(window).scrollTop());
        var ht = $(window).height(); //창 높이

        if(scroll>=ht*0 && scroll<ht*1){ //at1
		}else if(scroll==ht*1){ //at2
            if(scroll== ht*1){ }
		}else if(scroll>=ht*2 && scroll<ht*3){ //at3
		}

    });
    /*-------------------------------------- */
    /*-----top버튼-----*/
    //default.js에 포함
   

});