// script.js
window.onload = function() {
    const letters = document.querySelectorAll('.logo span');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
            letter.style.transform = 'translateY(0)';
        }, index * 300);
    });

    document.body.classList.add('visible');

    // Показать первый раздел при загрузке (например, "About Me")
    toggleSection('about');
};

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
    setTimeout(() => {
        activeSection.classList.add('show');
    }, 10);
}

function showSkills() {
    toggleSection('skills');

    const skills = [
        { id: 'skill-python', width: '90%' },
        { id: 'skill-flask', width: '80%' },
        { id: 'skill-js', width: '45%' },
        { id: 'skill-sql', width: '70%' },
        { id: 'skill-html', width: '70%' },
        { id: 'skill-git', width: '65%' },
        { id: 'skill-linux', width: '60%' }
    ];

    skills.forEach(skill => {
        const progressBar = document.getElementById(skill.id);
        progressBar.style.width = '1%'; // Начальная ширина 1%

        let width = 1; // Начальная ширина
        const targetWidth = parseInt(skill.width); // Конечное значение

        const interval = setInterval(() => {
            if (width >= targetWidth) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 20); // Задержка между итерациями (мс)
    });
}

function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
