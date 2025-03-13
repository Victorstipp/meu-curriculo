window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
};


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('hidden');
    content.classList.toggle('expanded');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const button = document.query('.btn-theme');
    button.innerHTML = document.body.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i> Modo Claro' 
        : '<i class="fas fa-moon"></i> Modo Escuro';
}


document.querySelectorAll('.sidebar a, .header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 991) {
            document.getElementById('sidebar').classList.add('hidden');
            document.getElementById('content').classList.add('expanded');
            document.getElementById('navbarNav').classList.remove('show');
        }
    });
});

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);

function adjustLayout() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    if (window.innerWidth > 991) {
        sidebar.classList.remove('hidden');
        content.classList.remove('expanded');
    } else {
        sidebar.classList.add('hidden');
        content.classList.add('expanded');
    }
}