window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('line1').classList.add('visible'), 400);
  setTimeout(() => document.getElementById('line2').classList.add('visible'), 1000);
  setTimeout(() => document.getElementById('line3').classList.add('visible'), 1600);
});

document.getElementById('scrollButton').addEventListener('click', function() {
  document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const animations = {
        'zoom-anim': 'zoom 1s ease',
        'rotate-anim': 'rotate 2s linear',
        'shake-anim': 'shake 0.5s ease-in-out',
        'fade-anim': 'fade 2s infinite',
        'slide-anim': 'slide 1.5s ease infinite'
    };

    document.querySelectorAll('.animation-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.animation-card');
            const img = card.querySelector('img');
            const animId = card.id;
            
            img.style.animation = animations[animId];
            
            setTimeout(() => {
                img.style.animation = 'none';
            }, 2000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item (mobile)
    const menuItems = document.querySelectorAll('.navbar-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    });
});