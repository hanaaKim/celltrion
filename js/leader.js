$(function(){
    // 마우스 휠
    $("article").on("mousewheel",function(e){
        var delta = 0;
        delta = e.originalEvent.wheelDelta/120; //기본으로 한번 마우스 휠 움직임의 값이 120정도
        var height =$( window ).outerHeight();
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
                var pageNum = Math.round(next/height);
                // console.log(pageNum)
                if(next==0){ return false; }
                if(pageNum==1){at2Ani(); at3Ani();}
                else if(pageNum==2){ }
            }catch(e){
                return false;
            }
            $("html, body").stop().animate({scrollTop:next},1000);
        }
    })


    /*-------------------------------------- */
   var check=0;
    $(".moreBtn").on({
        click:function(){
            var target = $(this).parents("div").next(); //cont_box
            if(target.css("display")=="none"){
                target.stop().slideDown();
                $(this).children("i").removeClass("fa-sort-down").addClass("fa-sort-up").css("line-height","37px");
                $(this).css("top","4px");
                check=1;
            }else{
                target.stop().slideUp();
                $(this).children("i").removeClass("fa-sort-up").addClass("fa-sort-down").css("line-height","20px");
                $(this).css("top","-5px");
                check=0;
            }
        },

        mouseenter: function(){
            $(this).children("i").css({"color":"#55b954","border":"2px solid #55b954"});
        },
        
        mouseleave:function(){
            $(this).children("i").css({"color":"#6d6e71","border":"2px solid #6d6e71"});
        }
    });
});

function at2Ani(){
    $(".at2 .at_bg .at_box").stop().animate({"left":"10%"},1000);
}
function at3Ani(){
    $(".at3 .at_bg .at_box").delay(800).stop().animate({"left":"10%"},1000);
}