let timer=setInterval("show()",3000); //이미지 슬라이드 함수
const at4_txtA_1=["코로나바이러스감염증-19","셀트리온 항체치료제 '렉키로나'","유플라이마","디아트러스트"];
const at4_txtA_2=["코로나바이러스 계열의 변종인 SARS-CoV-2가 일으키는 급성 호흡기 감염병으로 발열과 기침 같은 가벼운 증상부터 호흡 곤란, 폐렴 등 중증 호흡기 감염증을 동반합니다.",
"- 실험용 쥐 대상 효능시험서 바이러스 역가 감소, 체중 감소 방어 등 임상적 개선 효과 확인",
"- 세계 최초 휴미라 고농도 시밀러 ‘유플라이마’ 3상 52주 결과 유럽 류마티스 학회 (EULAR)서 발표… 오리지널과 효능, 약동학, 안전성 등 유사성 확인",
"- 지난해 美 헬스케어업체와 2,400억원 규모 공급계약 체결… 미국 내 즉시 공급"];
const at4_txtA_2_1=["",
"- 인도 발 델타 변이 바이러스 대상 동물효능 시험도 진행 중… 7월 중 결과 발표 예정",
"- 4.5조원 유럽 아달리무맙 시장 내 휴미라 매출 90% 이상이 고농도 제형… 차별화된 전략으로 유럽 자가면역질환 치료제 시장에 조기 공급할 것",
"- 현장진단형으로 연속검사(Serial Testing) 용도를 포함해 검사범위 확대"];
const at4_txtA_2_2=["","","","- 인비트로 시험 통해 다양한 변이 검출력 확보"];
const at4_txtA_2_3=["","","","- 미국에서 진행한 450여명 대상 자가진단승인 목적 임상자료 FDA 심사 중"];


/*================================함수정의================================*/
//at1 슬라이드
var at1_count=0;
function show(){
    $(".slideList").stop().animate({"left" : "-=100%"},1000,function(){
        if(at1_count<4){  at1_count++; }
        else{at1_count=0;}
        $(".slideList li:first").appendTo(".slideList");
        $(".slideList").css("left","+=100%");

        $(".at1_slide_circle li").css("background","none");
        $(".at1_slide_circle li").eq(at1_count).css("background","white");

        slideAni();
    });
}

//at1 슬라이드 동작시, 텍스트 애니메이션
function slideAni(){
    $(".slideList li:eq(0)").find(".slide_Title").animate({"top":"+=20px","opacity":"1"},800,function(){
        $(".slideList li:eq(0)").find(".slide_Title").delay(3000).animate({"opacity":"0","top":"-=20px"},300); //다시 reset
    });
}

var at3_cnt=0; //카운터 숫자
var result;
//숫자 카운트 함수
function countfunc(){
	result = setInterval(count_0_func, 90);
	function count_0_func(){
		at3_cnt++;
		if(at3_cnt>90){
			clearInterval(result);
		}else{
			$(".number1").text(at3_cnt);
		}
	}
}

function countfunc2(){
	result = setInterval(count_0_func, 70);
	function count_0_func(){
		at3_cnt++;
		if(at3_cnt>19){
			clearInterval(result);
		}else{
			$(".number2").text(at3_cnt);
		}
	}
}

// article2 별 및 텍스트 애니메이션
function init(){

    //별
    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    var estrela = "";
    var qtdeEstrelas = 250;
    var noite = document.querySelector(".constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;
  
    for (var i = 0; i < qtdeEstrelas; i++) {
      estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
      + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
      + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }
  
    noite.innerHTML = estrela;
  
    //유성
    var numeroAleatorio = 5000;
  
    setTimeout(function(){
      carregarMeteoro();
    }, numeroAleatorio);
  
    function carregarMeteoro(){
      setTimeout(carregarMeteoro, numeroAleatorio);
      numeroAleatorio = getRandomArbitrary(5000, 10000);
      var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
      setTimeout(function(){
        document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
      }, 1000);
    }

    /*-----article2-----*/
    $(".mainText").hover(function(){
        $(".mainText p").eq(0).stop().animate({top:"-3px",left:"-15px"},300);
        $(".mainText p").eq(1).stop().animate({top:"-3px",left:"30px"},300);
        $(".mainText p").eq(2).stop().animate({top:"0",left:"-50px"},300);
    },function(){
        $(".mainText p").eq(0).stop().animate({top:0,left:0},300);
        $(".mainText p").eq(1).stop().animate({top:0,left:0},300);
        $(".mainText p").eq(2).stop().animate({top:0,left:0},300);
    });
}


/*================================제이쿼리================================*/
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
                    $(".at1_slide_circle").delay(900).animate({"opacity":"1"},10); 
                    timer=setInterval("show()",3000); //슬라이드 재시작
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
                    $(".at1_slide_circle").css("opacity","0"); 
                    clearTimeout(timer); //슬라이드 중지
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
            clearTimeout(init); //별 애니메이션 중지
		}else if(scroll==ht*1){ //at2
            //0.05초후에 init호출(별 애니메이션)
            if(scroll== ht*1){ setTimeout(init,50); }
		}else if(scroll>=ht*2 && scroll<ht*3){ //at3
            clearTimeout(init); //별 애니메이션 중지
            $(".at3>p").animate({"opacity":"1"},500);
            countfunc(); countfunc2(); //숫자 애니메이션
		}else if(scroll>=ht*3 && scroll<ht*4){ //at4
            $(".at4_txt span").animate({"opacity":"1"},500);
		}

    });
    
    /*-----top버튼-----*/
    //default.js에 포함

    /*-----article1-----*/
    // at1 슬라이드 이미지 넣기
    for(i=0; i<$(".slideImg").length; i++){
        if(i==2){
            $(".slideImg").eq(i).css("background","url(img/main/at1/img"+i+".jpg) no-repeat right").css("backgroundSize","contain");
        }else{
            $(".slideImg").eq(i).css("background","url(img/main/at1/img"+i+".jpg) no-repeat center center").css("backgroundSize","cover");
        }
    }
    
    //슬라이드의 append로 인해 첫번째 슬라이드 요소가 변해서 css로 적용불가
    $(".slideImg:eq(2) .slide_Title").css("color","black");
    $(".slideImg:eq(2) .slide_Subtxt").css("color","black");
    $(".slideImg:eq(3) .slide_Title").css("color","black").css({"top":"30%","left":"57%"});
    $(".slideImg:eq(3) .slide_Subtxt").css("color","black").css({"top":"35%","left":"57%"});
    $(".slideImg:eq(4) .slide_Title").css({"top":"35%","left":"50%"}).css("width","600px");
    $(".slideImg:eq(4) .slide_Subtxt").css({"top":"40%","left":"50%"});

    //at1 슬라이드 동작시, 맨 처음 텍스트 애니메이션
    $(".slideImg1").find(".slide_Title").animate({"top":"+=20px","opacity":"1"},800,function(){
        $(this).delay(3000).animate({"opacity":"0","top":"-=20px"},300); //다시 reset
    });

    //슬라이드 첫번째 원만 style
    $(".at1_slide_circle li:eq(0)").css("background","white");
    // 슬라이드 정지 및 재시작
    var at1_sw=0;
    $("#at1_slideBtn").click(function(){
        $(this).removeClass();
        if(at1_sw == 0){
            $(this).addClass("fas fa-play");
            clearTimeout(timer); //슬라이드 중지
            at1_sw=1;
            if(at1_sw==1){
                /*
                숫자버튼 누르면 이미지 슬라이드
                슬라이드 정지된 상태에서만 클릭할 수 있게함
                */
                $(".at1_slide_circle li").css("cursor","pointer");
                $(".at1_slide_circle li").on("click",function(){
                    at2_position=100;
                    no=$(this).index();
                    at2_position = at2_position*no;
                    $(".slideList").stop().animate({"left":-at2_position+"%"},1000);

                    //클릭한 거 색깔 바꾸기
                    $(".at1_slide_circle li").css("background","none");
                    $(this).css("background","white");
                });
            }
        }else{

            $(this).addClass("fas fa-grip-lines-vertical");
            timer=setInterval("show()",3000); //슬라이드 재시작
            at1_sw=0;
            if(at1_sw==0){
                $(".at1_slide_circle li").css("cursor","default"); 
                $(".at1_slide_circle li").unbind("click"); //클릭못하게 막기
            }
        }
        
    });

    
  
    /*-----article3-----*/
    for(i=0; i<4; i++){
        $(".at3 ul li:eq("+i+")").find("div").css("background","url(img/main/at3/img"+(i+1)+".png) no-repeat center center")
    .css("backgroundSize","contain");
    }
    

    /*-----article4-----*/
    var at4_count=0;
    var at4_slideBox = $(".at4_slideBox").find("ul");
    var slideWidth = at4_slideBox.children().outerWidth(); //ul의 자식 li들의 width값
    var length = at4_slideBox.children().length; //자식 수 li의 수

    $(".at4_leftBtn").click(function(){
        if(at4_count>0){ at4_count--; }
        else{ at4_count=3; }
        $(".at4_no").html("0"+(at4_count+1));
        $(".at4_txt > span:eq(0)").html(at4_txtA_1[at4_count]+"<br><br>");
        $(".at4_txt > span:eq(1)").html(at4_txtA_2[at4_count]+"<br>"+at4_txtA_2_1[at4_count]+"<br>"+at4_txtA_2_2[at4_count]+"<br>"+at4_txtA_2_3[at4_count]);
       
        at4_slideBox.prepend("<li class='at4_slideImg'>"+at4_slideBox.find("li:last").html()+"</li>");
        at4_slideBox.find("li:last").remove();
        at4_slideBox.css("left",-slideWidth+"px");
        at4_slideBox.stop().animate({left:0},1000);
    });
    
    $(".at4_rightBtn").click(function(){
        if(at4_count<length-1){ at4_count++; }
        else{   at4_count=0; }
        $(".at4_no").html("0"+(at4_count+1));
        $(".at4_txt > span").eq(0).html(at4_txtA_1[at4_count]+"<br><br>");
        $(".at4_txt > span:eq(1)").html(at4_txtA_2[at4_count]+"<br>"+at4_txtA_2_1[at4_count]+"<br>"+at4_txtA_2_2[at4_count]+"<br>"+at4_txtA_2_3[at4_count]);
      
        at4_slideBox.stop().animate({left : -slideWidth+"px"},1000,function(){
            $(this).append("<li class='at4_slideImg'>"+$(this).find("li:first").html()+"</li>");
            $(this).find("li:first").remove();
            $(this).css("left",0)
            
        })
    });

    //코로나 19 버튼 클릭 시, 해당 html로 이동
    $(".at4_covidBtn").click(function(e){
        e.preventDefault();
        $(location).attr("href","covid.html");
    })
    
    /*-----article5----*/
    $(".at5>div").hover(function(){
        var vid = $(this).find("video").get(0);
        vid.currentTime=0; //비디오가 가지고 있는 기본 속성
        vid.play();

        $(this).stop().animate({"width":"25%"},500, function(){
            //animate로 너비를 25%한 후에 callback 함수로 실행됨
            $(this).find("ul").stop().animate({"right":"10%"},300);
        });
        $(this).find("h2").addClass("changed");
        $(this).find("video").stop().animate({"opacity":0.9},500);
        $(this).find("div").stop().animate({"top":"23%","height":"90px"},500);
        
        },function(){
            var vid = $(this).find("video").get(0);
            vid.pause(); //마우스 떼면 정지
            
            $(this).stop().animate({"width":"15%"},500);
            $(this).find("video").stop().animate({"opacity":0},500);
            //사라지는거는 콜백함수로 하지않고, 바로 사라지게함
            $(this).find("h2").removeClass("changed");
            $(this).find("ul").stop().animate({"right":"-200px"},300);
            $(this).find("div").stop().animate({"top":"25%","height":"0"},500);
        }
    );

    // 아코디언 속 각 버튼 클릭시, 각 html 연결
    $(".at5_btn").click(function(){
        no = $(".at5_btn").index(this);

        if(no==0){ $(location).attr("href","notice.html");}
        else if(no==1){ $(location).attr("href","RnD.html");}
        else if(no==2){ $(location).attr("href","biosimilar.html");}
        else if(no==3){ $(location).attr("href","introduce.html");}
    })
});

