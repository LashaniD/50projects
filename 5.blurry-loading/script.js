const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// load the image from 0-100 upon loading of the page 
// decrease blur from 100-0

var load = 0; // loading "number" of the page
var int = setInterval(blurring, 30); // call function every 30 milli sec
function blurring() {
    load++;
    // once its 100 stop function call
    if(load > 99){
        clearInterval(int);
    }

    loadingText.innerHTML = `${load}%`; // increasing the number on the html along with the increasing function 
    loadingText.style.opacity = scale(load, 0, 100, 1, 0); // make the percentage number disappear as page loads

    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)` // do the same with blur effect 

}
// when percentage increases opacity decreases 
const scale = (num, input_min, input_max, output_min, output_max) => {
    return (num - input_min) * (output_max - output_min) / (input_max - input_min) + output_min;
}
