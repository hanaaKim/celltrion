$(function(){
    // 메뉴 슬라이드 업, 다운
    $("#menu>li:gt(0)").hover(function(e){
        e.preventDefault();
        index = $("#menu>li").index(this); //1~5
        // console.log(index);
        $("#menu>li:eq("+index+")>p").not($("#menu>li:eq(0)>a")).addClass("changed");

        $("#menu").css("background","white");
        $(".submenu").css("background","white");
        $("#menu>li:nth-child(1)>a").css("background","url(img/logo_black.png) no-repeat center center")
                                    .css("backgroundSize","contain");
        $("#menu li p").css("color","black");
        $("#menu li p i").css("color","black");
        $(this).find(".submenu").stop().slideDown(300);

    }, function(e){
        e.preventDefault();
        $(this).find("p").removeClass("changed");

        $("#menu").css("background","transparent");
        $(".submenu").css("background","transparent");
        $("#menu>li:nth-child(1)>a").css("background","url(img/logo.png) no-repeat center center")
                                    .css("backgroundSize","contain");
        $("#menu li p").css("color","white");
        $("#menu li p i").css("color","white");
        $(this).find(".submenu").stop().slideUp(150);
    })



    //러쉬서브, 제품 각 서브 연결
	$(".submenu li").click(function(e){
        e.preventDefault();
        no=$(".submenu li").index(this); //모든 submenu의 li 모두 인덱스 구하기
        // console.log(no);
        if(no==0){ //회사소개
            $(location).attr("href","introduce.html");
        }else if(no==1){ //연혁
            $(location).attr("href","history.html");
        }else if(no==2){ //리더십
            $(location).attr("href","leader.html");
        }else if(no==3){ //biosimilar
            $(location).attr("href","biosimilar.html");
        }else if(no==4){ //코로나-19
            $(location).attr("href","covid.html");
        }else if(no==5){ //연구소
            $(location).attr("href","RnD.html");
        }else if(no==6){ //스토리
            $(location).attr("href","story.html");
        }else if(no==7){ //공지사항
            $(location).attr("href","notice.html");
        }else if(no==8){ //로그인
            $(location).attr("href","login.html");
        }else if(no==9){ //회원가입
            $(location).attr("href","join.html");
        }
	});

    $(".logo").click(function(e){
        e.preventDefault();
        $(location).attr("href","index.html");
    });




    /*---------------모바일 메뉴---------------*/
    var isOn=0;
	$("#mobile_menu").click(function(e){
        //뒤에 스크롤 안되게하기
        $("header").on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        if(isOn==0){
            $("#menu>li").fadeIn(500);
            $("#menu").css("height","100vh");
            $("#mobile_menu").addClass("change");
            $("header").css("background","rgba(0,0,0,0.8)");
            isOn=1;
        }else{
            $("#menu>li:gt(0)").fadeOut(100);
            $("#menu").css("height","auto");
            $("#mobile_menu").removeClass("change");
            $("header").css("background","transparent");
            isOn=0;
        }
        
        $("#menu>li").unbind('mouseenter mouseleave'); //호버효과없애기
        // $(".submenu").stop().slideUp(); //서브메뉴는 모두 닫아놓기
        $("#menu>li").click(function(){
            $(".submenu").stop().slideUp(); //서브메뉴는 모두 안보이게
		
            if($(this).find(".submenu").css("display")=="none"){ //클릭한 타이틀의 서브메뉴가 안보이면
                $(this).find(".submenu").stop().slideDown(); //슬라이드다운
            }else{
                $(this).find(".submenu").stop().slideUp(); //서브메뉴가 보이면 슬라이드업
            }
		    $(".m_txt").css("color", "white");
		    $(".m_txt i").css("color", "white");

		    $(this).find(".m_txt").css("color", "#50b948");
		    $(this).find(".m_txt i").css("color", "#50b948");

        })


    })
});

