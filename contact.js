function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    document.getElementById(page).style.display = 'block';
    
    const searchInput = document.getElementById('search-input');
    searchInput.placeholder = `Search in ${page.charAt(0).toUpperCase() + page.slice(1)}`;
}

showPage('home');
