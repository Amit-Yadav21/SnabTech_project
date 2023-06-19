const goTopBtn = document.querySelector('.back-top');

window.addEventListener('scroll',checkHeight)

function checkHeight(){
    if(window.scrollY  >300){
        goTopBtn.style.display = "flex"
    }
    else{
        goTopBtn.style.display = "none"
    }
}