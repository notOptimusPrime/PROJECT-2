function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('media');
});

document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', () => {
        var input = button.previousElementSibling;
        input.disabled = !input.disabled;
        if (!input.disabled) {
            input.focus();
        }
    });
});

document.querySelector('.save-btn').addEventListener('click', () => {
    alert('Saved!');
});

document.querySelector('.cancel-btn').addEventListener('click', () => {
    alert('Cancelled!');
});