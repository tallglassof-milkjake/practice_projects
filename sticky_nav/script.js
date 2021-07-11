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
const icons = document.getElementsByClassName('fab');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        // e.preventDefault();
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      body.className.add('active')
    });
}

// for (var i = 0; i < icons.length; i++) {
//     icons[i].addEventListener("click", function(e) {
//         // e.preventDefault();
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";

//       body.className.add('active')
//     });
// }

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

// form animations
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('');
});



// document.querySelector('#text-area').focus(function() {
//     document.querySelector(this).value = '';
//  });

document.querySelector('#text-area').blur();
