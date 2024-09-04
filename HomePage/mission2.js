//create a variable that stores the header element
const header = document.querySelector("header");

// Add an event that will listen for when the user scrolls
window.addEventListener("wheel", (scroll) => {
  if (scroll.deltaY > 0) {
    // User is scrolling down, hide the navbar
    header.classList.add("hide");
  } else {
    // User is scrolling up, show the navbar
    header.classList.remove("hide");
  }
});

//create a timer to show how long user has been on page
const time = document.getElementById("time");
let timeSpent = 0;

//setInterval method that repeats a function at a given interval
setInterval(() => {
  timeSpent += 1;
  time.innerHTML = timeSpent;
}, 1000); //in millieseconds
