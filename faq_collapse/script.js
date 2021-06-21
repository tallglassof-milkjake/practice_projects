const toggleBtn = document.querySelectorAll('.faq-toggle');

toggleBtn.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})