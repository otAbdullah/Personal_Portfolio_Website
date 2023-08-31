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
