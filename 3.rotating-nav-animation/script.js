const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container'); // period represents class

//to open or close navigation bar when x or open is clicked
open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));


