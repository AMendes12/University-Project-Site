document.addEventListener('DOMContentLoaded', function() {
    // Abre os itens principais por padrão
    const mainItems = document.querySelectorAll('.first-open');
    mainItems.forEach(item => {
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.classList.add('section-highlight');
            setTimeout(() => target.classList.remove('section-highlight'), 2000);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('add-comment');
    const commentText = document.getElementById('comment-text');
    const commentsContainer = document.getElementById('comments-container');
    
    commentForm.addEventListener('click', function() {
        console.log("Botão clicado!"); // Debug
        if (commentText.value.trim() === '') {
            console.log("Texto vazio!"); // Debug
            return;
        }
        
        const bgColor = document.getElementById('bg-color').value;
        const textColor = document.getElementById('text-color').value;
        const textSize = document.getElementById('text-size').value + 'px';
        
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.style.backgroundColor = bgColor;
        commentDiv.style.color = textColor;
        commentDiv.style.fontSize = textSize;
        
        commentDiv.innerHTML = `
            <p>${commentText.value}</p>
            <button class="delete-comment">×</button>
        `;
        
        commentsContainer.prepend(commentDiv);
        commentText.value = '';
        
        // Deletar comentário
        commentDiv.querySelector('.delete-comment').addEventListener('click', function() {
            commentDiv.remove();
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

    // Configuração dos acordeões
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isMainHeader = this.parentElement.classList.contains('first-open');
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            const parentColumn = this.closest('.accordion-column');
            
            // Fecha outros itens na mesma coluna
            if (!isMainHeader) {
                parentColumn.querySelectorAll('.accordion-content').forEach(content => {
                    if (content !== accordionContent) {
                        content.style.maxHeight = null;
                        content.previousElementSibling.classList.remove('active');
                    }
                });
            }
            
            // Alterna o item atual (apenas para subcategorias)
            if (!isMainHeader) {
                this.classList.toggle('active');
            }
            
            // Controla a abertura/fechamento
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
                
                // Se estiver fechando uma subcategoria, reabre o principal
                if (!isMainHeader) {
                    const mainHeader = parentColumn.querySelector('.first-open .accordion-header');
                    const mainContent = mainHeader.nextElementSibling;
                    mainContent.style.maxHeight = mainContent.scrollHeight + 'px';
                }
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                
                // Se estiver abrindo uma subcategoria, fecha o principal
                if (!isMainHeader) {
                    const mainHeader = parentColumn.querySelector('.first-open .accordion-header');
                    const mainContent = mainHeader.nextElementSibling;
                    mainContent.style.maxHeight = null;
                }
            }
        });
    });
});