$(function(){
    /*-----top버튼-----*/
    //default.js에 포함
    /*----------------로그인 파트--------------- */
    $(".loginBtn").click(function(){
		return checkValue();
	});

    /*----------------회원가입 파트--------------- */
    var tabBtn = $(".join_menu>li");
    var tabCont = $(".join_cont>li");
    
    tabBtn.eq(0).css("font-weight","bold");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        if($(".must").is(":checked") == true){
			no = $(this).index();
            tabCont.hide();
            tabCont.eq(no).show();
            tabBtn.css("font-weight","normal");
            tabBtn.eq(no).css("font-weight","bold");
		}else{
			alert("필수 약관에 모두 동의해주세요.")
		}
    });


    //약관 트리구조 열고닫기
    var target = $(".cont1>ul>li").not($(".cont1_title")).find("p");
    var div_box = $(".cont1>ul>li").not($(".cont1_title")).find("div");
    div_box.hide();

    target.click(function(){
        div_box.stop().slideUp(); //일단모두 숨기기
        var target_div = $(this).parent().find("div");
        if(target_div.css("display")=="block"){ //열려있다면
            target_div.stop().slideUp(); //닫고
        }else{ //아니라면
            target_div.stop().slideDown();//열기
        }
    });

    //체크박스만 클릭했을때는 약관박스 열리지 않도록
    $("input[type='checkbox']").click(function(e){
        e.stopPropagation();
    });
    
    //약관 동의 전체선택
	var agree = $('input[name=agree]');
	$("#agreeAll").click(function(e){
		for(let i=0; i<agree.length; i++){
			agree[i].checked = e.target.checked;
		}
	});
	
	// 개별 체크
	agree.click(function(e){
		var is_checked = true;
		agree.each(function(){
			is_checked = is_checked && $(this).is(":checked");
		});
		$("#agreeAll").prop("checked", is_checked);
	});


	//약관동의 = 다음 단계 버튼
	$(".join_nextBtn").click(function(e){
		e.preventDefault();
		if($(".must").is(":checked") == true){
			tabBtn.css("font-weight","normal");
            tabBtn.eq(1).css("font-weight","bold");
            tabCont.hide();
            tabCont.eq(1).show();
		}else{
			alert("필수 약관에 모두 동의해주세요.")
		}
	});

    // 회원가입 완료 버튼
	$(".join_SuccessBtn").click(function(){
        return checkValue2();
    });
    //인증버튼들 알림창
    $("#idCheck_btn").click(function(){
	    var id = $("#userId").val();
        Idcheck(id);
    });
    $("#tellCheck_btn").click(function(){
        alert("인증번호 : ABC1234")
    });
    $("#smsCheck_btn").click(function(){
        alert("인증되었습니다.")
    });
});

//로그인 버튼 클릭시, 아이디와 비밀번호 유효성 체크 함수
function checkValue(){
    var id =$("#userId").val();
    var id_size = id.length;
    var email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    for(i=0; i<id_size; i++){
        let code= id.charCodeAt(i);
        if(code>128){
            alert("아이디는 영문으로 입력해주세요.")
            $("#userId").focus();
            return false;
        }else{
            if(!id){
                alert("아이디를 입력하세요.");
                $("#userId").focus();
                return false;
            }else{
                if(!email_check.test(id)){
                    alert("아이디를 이메일 형식에 맞게 입력해주세요.");  
                    $("#userId").focus();
                    return false;
                }
            }
        }
    }

	var pw = $("#userPw").val();
	if(!pw){
		alert("비밀번호를 입력하세요.");
		return false;
	}
    
    alert(id+"님 로그인되었습니다.");
    $(location).attr("href","index.html");
}

//회원가입완료 버튼 클릭시, 유효성 체크 함수
function checkValue2(){
	var name = $("#name").val();
	var id = $("#userId").val();
	var pass1 = $("#pass1").val();
	var pass2 = $("#pass2").val();
    var email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	if(!name){		alert("이름을 입력하세요."); $("#name").focus();	return false;	}
	if(!id){		alert("아이디를 입력하세요."); $("#userId").focus();	return false;	}
	if(!pass1){		alert("비밀번호를 입력하세요.");	$("#pass1").focus();  return false;	}
	if(!pass2){		alert("비밀번호 확인을 입력하세요."); $("#pass2").focus();	return false;}

    if(!email_check.test(id)){  alert("아이디를 이메일 형식에 맞게 입력해주세요.");  return false;}
	if(pass1 != pass2){ alert("비밀번호를 동일하게 입력하세요.");return false;}

	alert(name+"님 회원가입이 완료 되었습니다.");
	$(location).attr("href","login.html");
}

function Idcheck(t){
    var id = t;
    console.log(id);
    var id_size = id.length;
    console.log(id_size);
    var email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    
      
    for(i=0; i<id_size; i++){
        let code= id.charCodeAt(i);
        if(code>128){
            alert("아이디는 영문으로 입력해주세요.")
            $("#userId").focus();
            return false;
        }else{
            if(!id){
                alert("아이디를 입력하세요.");
                $("#userId").focus();
                return false;
            }else{
                if(!email_check.test(id)){
                    alert("아이디를 이메일 형식에 맞게 입력해주세요.");  
                    $("#userId").focus();
                    return false;
                }
        
            }
        }

    }

    alert(id+"는 사용 가능한 ID입니다.")
}