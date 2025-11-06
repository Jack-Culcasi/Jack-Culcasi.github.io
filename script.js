document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active link
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Set active link based on scroll position
    const sections = document.querySelectorAll('.section');
    
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // Typewriter effect for terminal
    const terminals = document.querySelectorAll('.terminal');
    
    terminals.forEach(terminal => {
        const originalText = terminal.innerHTML;
        terminal.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                terminal.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }
        
        // Start typewriter after a delay
        setTimeout(typeWriter, 1000);
    });
    
    // Project hover effects
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(74, 144, 226, 0.1)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});
