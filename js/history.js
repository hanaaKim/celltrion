const txtBox_dateA=["2005.06","2005.07","2005.06","2005.07","2007.12","2008.08","2010.05",
"2011.10","2012.07","2013.04","2013.08","2014.01","2014.02","2015.03","2015.06","2016.11",
"2017.07","2018.02","2018.11","2019.11","2020.05","2020.08","2020.09","2021.02"];
const txtBox_textA=["JVC 설립을 위한 MOU 체결","셀트리온 설립","BMS와 제품 공급계약 체결","1공장 준공식(50,000L)",
"1공장 cGMP 생산 설비 미국 FDA 인준","코스닥 상장","대규모 해외투자 유치(싱가포르 테마섹홀딩스)",
"2공장 준공식 (90,000L)","램시마 한국(MFDS) 판매허가 획득","CT-P27 글로벌 임상 시험 개시","램시마 유럽(EMA) 판매허가 획득",
"허쥬마 한국(MFDS) 판매허가 획득","CT-P27 글로벌 임상 2a상 시험 개시","전문경영인 체제 전환",
"1·2공장 cGMP 전 생산 설비에 대한 미국 FDA 인준","트룩시마 한국(MFDS) 판매허가 획득","CT-P16 임상 1상 시험 개시",
"코스피 이전 상장","트룩시마 미국(FDA) 판매허가 획득","램시마SC 유럽(EMA) 판매허가 획득","메르스·코로나바이러스 치료 항체 개발 국책과제 선정",
"허쥬마, WHO 사전적격성평가(PQ) 인증 획득","렉키로나 임상 2·3상 시험 개시","렉키로나 한국(MFDS) 조건부 판매허가 획득"];
const history_titleA=["새로운 도전과 창조의 신화가 시작되다","성장의 기틀을 다지다","바이오시밀러 시대를 열다","고속 성장의 궤도에 올라서다"];
const history_txtA=["서정진 회장은 2000년, 셀트리온의 전신인 넥솔을 창업해 다양한 비즈니스의 가능성을 탐색했습니다.2002년 셀트리온은 설립 후, 바이오의약품 생산 설비를 구축하기 위한 준비를 진행하며 창업의 과정을 거쳤습니다.",
"2003년부터 2008년까지 셀트리온은 미지의 영역을 개척하고 높이 도약할 수 있도록 기반을 다졌습니다. 수많은 난제들이 있었으나 셀트리온은 온갖 어려움을 이겨내고 사업 기반을 다졌습니다.",
"2013년 5월 세계 최초 항체 바이오시밀러 램시마가 유럽의약품청(EMA)로부터 허가를 받으며 셀트리온의 글로벌 시장 진출이 본격화되었습니다. 또한 셀트리온은 글로벌 시장에 의약품을 안정적으로 공급하기 위해 2공장을 신설하고 대량 생산 역량을 갖추었습니다.",
"2016년, 셀트리온은 유럽에 이어 미국 FDA로부터 램시마의 판매 허가를 획득하며 새로운 기회의 신대륙에 발을 내디뎠습니다. 또한 셀트리온은 항체 신약과 백신, 바이오베터 개발 등 새로운 치료제 및 신기술 개발에도 앞장서며 글로벌 종합생명공학 회사로 발전해 나가고 있습니다."];

$(function(){
  // init();

  // 마우스 휠
  $("article").on("mousewheel",function(e){
    var delta = 0;
    delta = e.originalEvent.wheelDelta/120; //기본으로 한번 마우스 휠 움직임의 값이 120정도

    // var moveTop = null;
    if(delta>0){ //마우스 휠 올림
      try{
          var prev = $(this).prev().offset().top;
          // $(this).find(".picBox").stop().animate({left:"-100%"},500);
          // $(this).find(".txtBox").stop().animate({opacity:"0"},500);          
      }catch(e){
        return false;
      }
      $("html, body").stop().animate({scrollTop:prev},1000);
        
    }else{ //마우스 휠 내림
        
      try{
        var next = $(this).next().offset().top;
        // $(this).next().find(".picBox").stop().animate({left:"10%"},800);
        // $(this).next().find(".txtBox").stop().animate({top:"3%",opacity:"1"},1000);
      }catch(e){
        return false;
      }
      var target1 = $(this).next().find(".picBox"); 
      var target2 = $(this).next().find(".txtBox"); 

      $("html, body").stop().animate({scrollTop:next},1000,function(){
        target1.stop().animate({left:"10%"},800);
        target2.stop().animate({top:"3%",opacity:"1"},900);
      });
    }
  })

  
  /*-------------------사진 밑 텍스트 넣기-------------------*/
  
  size = $(".txtBox_date").length;
  for(i=0; i<size; i++){
    $(".txtBox_date").eq(i).html(txtBox_dateA[i]);
    $(".txtBox_text").eq(i).html(txtBox_textA[i]);
  }

  size = $(".picBox").length;
  for(i=0; i<size-1; i++){
    $(".picBox").eq(i).css("background","url(img/history/img"+i+".jpg) no-repeat center center").css("backgroundSize","contain");
  }
  $(".picBox").eq(6).css("background","url(img/history/img"+6+".png) no-repeat center center").css("backgroundSize","contain");

  size = $(".history_title").length;
  for(i=0; i<size; i++){
    $(".history_title").eq(i).html(history_titleA[i]);
    $(".history_txt").eq(i).html(history_txtA[i]);
  }

});

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
  
}