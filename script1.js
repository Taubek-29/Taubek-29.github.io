document.addEventListener('DOMContentLoaded', function() {
    // Получаем сохраненные данные
    const portfolioData = JSON.parse(localStorage.getItem('portfolioData'));
    
    if (!portfolioData) {
        alert('Данные не найдены. Пожалуйста, заполните форму сначала.');
        window.location.href = 'index.html';
        return;
    }
    
    // Заполняем данные
    document.getElementById('portfolio-name').textContent = portfolioData.name;
    document.getElementById('portfolio-job').textContent = portfolioData.job;
    document.getElementById('about-text').textContent = portfolioData.about;
    document.getElementById('contact-email').textContent = portfolioData.email;
    document.getElementById('contact-email').href = `mailto:${portfolioData.email}`;
    
    // Заполняем навыки
    const skillsList = document.getElementById('skills-list');
    portfolioData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.textContent = skill;
        skillsList.appendChild(skillElement);
    });
    
    // Заполняем проекты
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project}</h3>
            <p>Описание проекта может быть здесь</p>
        `;
        projectsGrid.appendChild(projectCard);
    });
    
    // Устанавливаем выбранную тему
    document.getElementById('theme-selector').value = portfolioData.theme;
    applyTheme(portfolioData.theme);
    
    // Обработчик изменения темы
    document.getElementById('theme-selector').addEventListener('change', function() {
        applyTheme(this.value);
    });
    
    // Применение темы
    function applyTheme(theme) {
        const portfolioTheme = document.getElementById('portfolio-theme');
        
        // Удаляем все классы тем
        portfolioTheme.classList.remove(
            'theme-minimal',
            'theme-creative',
            'theme-tech',
            'theme-elegant'
        );
        
        // Добавляем выбранную тему
        portfolioTheme.classList.add(`theme-${theme}`);
    }
});