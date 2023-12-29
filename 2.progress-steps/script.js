// references to html elements
const progress = document.getElementById('progress') // progress bar
const prev = document.getElementById('prev') 
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') // node list of circle elements

let currentActive = 1 // variable to track current active circle

// event listener for next active button
next.addEventListener('click', () => {
    currentActive++

    // ensure it does not exceed the number of circles
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    // update to reflect the changes
    update()
})

// event listener for previous button 
prev.addEventListener('click', () => {
    currentActive--

    // ensure not less than 1
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

// function to update the UI based on the currentActive value 
function update() {
    // loop through to add or remove the 'active' class
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // get all elements with the active class
    const actives = document.querySelectorAll('.active')

    // set the width of the progress bar
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    progress.style.backgroundColor = 'var(--line-border-fill)';

    // disable or enable buttons based on currentActive 
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false
    }
}