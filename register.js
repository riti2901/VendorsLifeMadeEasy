function showform(){
    document.querySelector('.regform').classList.add('showregform');
}
function closeform(){
    document.querySelector('.regform').classList.remove('showregform');
}

var regbtn=document.querySelector("#regbtn");
regbtn.addEventListener("click",showform);

var closereg=document.querySelector(".close-btn");
closereg.addEventListener("click",closeform);