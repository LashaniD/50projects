// select all elements with class 'panel'
const panels = document.querySelectorAll('.panel')

// click event listener to each panel 
// when a panel is clicked, the event listener is triggered, and it executes the provided arrow function 
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // calling function to remove the 'active' class from all panels
    removeActiveClasses()
    // adding the 'active' class to the clicked panel
    panel.classList.add('active')
  })
})

// function to remove the 'active' class panel
// forEach to iterate through all panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
