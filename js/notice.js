$(function(){
    /*-----top버튼-----*/
    //default.js에 포함
   
    /*-------------------------------------- */
    var num=0,
        button = $(".button>.page_wrap>.btn>a"),
        layout = $(".table_layout>ul"),
        left = $(".button2>.page_wrap>.btnlb"),
        right = $(".button2>.page_wrap>.btnrb"),
        first = $(".button2>.page_wrap>.btnll"),
        end = $(".button2>.page_wrap>.btnrr");
        
    button.click(function(){
        var  i = $(this).index();
        button.removeClass();
        $(this).addClass("active");

        layout.removeClass();
        layout.eq(i).addClass("list");
        num = i; //left와 right 클릭시 현재 page숫자를 알아야하니까 
    })
	

    left.click(function(){
        num = num -1;
        if(num<0){
            num=0;
            return; //진행 stop
        }
        motion();
    })

    right.click(function(){
        var listNum = $(".button2>.page_wrap>.btn>a").length;
        num = num+1;
        if(num>=listNum){
            num =listNum-1;
            return; //진행 stop
        }
        motion();
    })

    first.click(function(){
        button.removeClass();
        button.eq(0).addClass("active");

        layout.removeClass();
        layout.eq(0).addClass("list");
    })

    end.click(function(){
        var listNum = $(".button2>.page_wrap>.btn>a").length;

        button.removeClass();
        button.eq(listNum-1).addClass("active");

        layout.removeClass();
        layout.eq(listNum-1).addClass("list");
    })

    function motion(){
        button.removeClass();
        button.eq(num).addClass("active");

        layout.removeClass();
        layout.eq(num).addClass("list");
    }

});