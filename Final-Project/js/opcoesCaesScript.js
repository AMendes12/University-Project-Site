document.addEventListener('DOMContentLoaded', function() {
    const addCommentButton = document.getElementById('add-comment'); 
    const commentText = document.getElementById('comment-text');
    const commentsContainer = document.getElementById('comments-container');

    addCommentButton.addEventListener('click', function() {
        if (commentText.value.trim() === '') return;

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

        
        commentDiv.querySelector('.delete-comment').addEventListener('click', function() {
            commentDiv.remove();
        });
    });
});
