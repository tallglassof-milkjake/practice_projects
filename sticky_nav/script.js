let body = document.body;

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = (window.pageYOffset);

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
});

const navMenu = document.getElementById('nav');
const btns = document.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        // e.preventDefault();
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      body.className.add('active')
    });
}

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};