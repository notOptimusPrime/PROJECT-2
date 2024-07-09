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