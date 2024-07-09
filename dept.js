function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';

    const searchInput = document.getElementById('search-input');
    if (page === 'home') {
        searchInput.placeholder = 'Search in Home';
    } else if (page === 'customers') {
        searchInput.placeholder = 'Search in Customers';
    } else if (page === 'departments') {
        searchInput.placeholder = 'Search in Departments';
    } else if (page === 'media') {
        searchInput.placeholder = 'Search in Media';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
