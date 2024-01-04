const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrolling); //action when window is scrolled

function scrolling() {
    const triggerBottom = window.innerHeight * (4/5);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //get viewport position from top of page to top of box
        if (triggerBottom > boxTop){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}