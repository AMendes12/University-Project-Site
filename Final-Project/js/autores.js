document.addEventListener('DOMContentLoaded', function() {
    // Efeitos de hover nos cards de membros
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
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