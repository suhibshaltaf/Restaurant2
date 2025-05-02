
    // اضافه كبسه الاطلع لفوق 

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = 'Back to Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

   

    // مشان اعرف اتحكم في العناصر من الناف بس ينزلو ينزلو شوي شوي 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
