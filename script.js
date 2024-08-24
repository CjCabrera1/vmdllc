document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const dropdown = document.getElementById('dropdown');

    menuIcon.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});
