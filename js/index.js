
function smallImg(x) {
    x.style.width = "420px";
    x.style.height = "340px";
}
function normalImg(x) {
    x.style.width = "440px";
    x.style.height = "360px";
}
 
function menu(){
    answer=confirm("분식 레시피 메뉴를 보시겠습니까?");

    if(answer==true){
        alert("어떤 음식을 만드실 건가요?");
        window.open("menu.html");
    }
    else{
        alert("메인화면에 머물겠습니다.")
    }
}

function address(){ 
    window.open("imageAddress.html");
}
