var hasShown = false; // set the initial state

function show() {
    if (hasShown) return; // if the function has been called before, do nothing

    var scrollNotif = document.getElementsByClassName("scrollNotif");
    for (var i = 0; i < scrollNotif.length; i++) {
        scrollNotif[i].style.display = "flex";
    }

    hasShown = true; // set the flag to true after the function is called
}

function hide() {
    var scrollNotif = document.getElementsByClassName("scrollNotif");
    for (var i = 0; i < scrollNotif.length; i++) {
        scrollNotif[i].style.display = "none";
    }
}

var timer = setTimeout(show, 3000); // show after 2 seconds of page load

window.onscroll = function() {
  clearTimeout(timer); // clear the previous timer
  timer = setTimeout(show, 2000); // set the timer for 2 seconds
  hide(); // hide the notification when the user starts scrolling
};


let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.introduction span').forEach(span => {
   observer.observe(span);
});


// Select all elements with a data-modal-target attribute
const openModalButtons = document.querySelectorAll('[data-modal-target]');

// Select all elements with a data-close-button attribute
const closeModalButtons = document.querySelectorAll('[data-close-button]');

// Loop over each button with a data-modal-target attribute
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the CSS selector of the modal to open
        const modalSelector = button.getAttribute('data-modal-target');

        // Select the modal and add the 'active' class to open it
        const modal = document.querySelector(modalSelector);
        modal.classList.add('active');
    });
});

// Loop over each button with a data-close-button attribute
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest ancestor element with the 'modal' class
        const modal = button.closest('.contactMe');

        // Remove the 'active' class to close the modal
        modal.classList.remove('active');
    });
});

let sections = Array.from(document.querySelectorAll('section'));
let currentIndex = 0;

window.addEventListener('wheel', function(e) {
  e.preventDefault();

  // Determine scroll direction
  if (e.deltaY > 0) {
    // Scroll down
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  } else {
    // Scroll up
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  // Scroll to the section
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
}, { passive: false });

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Discord Tag copied");
}

let hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function() {
  let sidebarMenu = document.getElementById("sidebar-menu");

  if (sidebarMenu.style.visibility === "hidden") {
    sidebarMenu.style.visibility = "visible";
    sidebarMenu.style.left = "0px";
  } else {
    sidebarMenu.style.visibility = "hidden";
    sidebarMenu.style.left = "-250px";
  }
});


