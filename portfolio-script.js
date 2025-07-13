// Sample project data - replace with your actual projects
const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        description: "A full-featured e-commerce platform with user authentication, payment integration, and admin panel.",
        image: "🛒",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "web",
        github: "https://github.com/yourusername/ecommerce-website",
        demo: "https://your-ecommerce-demo.com"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        image: "📋",
        tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        category: "web",
        github: "https://github.com/yourusername/task-manager",
        demo: "https://your-task-manager.com"
    },
    {
        id: 3,
        title: "Weather Mobile App",
        description: "A cross-platform mobile app providing detailed weather forecasts with beautiful animations.",
        image: "🌤️",
        tech: ["React Native", "Redux", "API Integration"],
        category: "mobile",
        github: "https://github.com/yourusername/weather-app",
        demo: "https://play.google.com/store/apps/details?id=com.yourweatherapp"
    },
    {
        id: 4,
        title: "REST API Service",
        description: "A robust RESTful API service with authentication, rate limiting, and comprehensive documentation.",
        image: "🔌",
        tech: ["FastAPI", "Python", "Docker", "PostgreSQL"],
        category: "api",
        github: "https://github.com/yourusername/rest-api-service",
        demo: "https://api-docs.your-service.com"
    },
    {
        id: 5,
        title: "Open Source Library",
        description: "A lightweight JavaScript library for data visualization with customizable charts and graphs.",
        image: "📊",
        tech: ["JavaScript", "D3.js", "Canvas", "TypeScript"],
        category: "opensource",
        github: "https://github.com/yourusername/data-viz-library",
        demo: "https://your-library-docs.com"
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing projects and skills with modern design principles.",
        image: "💼",
        tech: ["HTML5", "CSS3", "JavaScript", "SCSS"],
        category: "web",
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-portfolio.com"
    }
];

// Sample repository data - replace with actual GitHub API call
const repositories = [
    {
        name: "awesome-project",
        description: "An awesome project that does amazing things with modern web technologies.",
        language: "JavaScript",
        stars: 245,
        forks: 42,
        url: "https://github.com/yourusername/awesome-project"
    },
    {
        name: "python-data-analysis",
        description: "Data analysis tools and utilities built with Python and pandas.",
        language: "Python",
        stars: 128,
        forks: 23,
        url: "https://github.com/yourusername/python-data-analysis"
    },
    {
        name: "react-component-library",
        description: "A collection of reusable React components with TypeScript support.",
        language: "TypeScript",
        stars: 89,
        forks: 15,
        url: "https://github.com/yourusername/react-component-library"
    },
    {
        name: "api-gateway",
        description: "Microservices API gateway built with Node.js and Express.",
        language: "JavaScript",
        stars: 156,
        forks: 34,
        url: "https://github.com/yourusername/api-gateway"
    },
    {
        name: "machine-learning-models",
        description: "Collection of machine learning models and experiments.",
        language: "Python",
        stars: 203,
        forks: 67,
        url: "https://github.com/yourusername/machine-learning-models"
    },
    {
        name: "mobile-ui-kit",
        description: "Beautiful UI components for React Native applications.",
        language: "JavaScript",
        stars: 92,
        forks: 18,
        url: "https://github.com/yourusername/mobile-ui-kit"
    }
];

// Language colors for GitHub repositories
const languageColors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    "C++": "#f34b7d",
    Go: "#00ADD8",
    Rust: "#dea584",
    PHP: "#4F5D95"
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    setupNavigation();
    loadProjects();
    loadRepositories();
    setupProjectFilters();
    setupContactForm();
    setupScrollAnimations();
    animateCounters();
    setupSmoothScrolling();
}

// Navigation functionality
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load and display GitHub repositories
function loadRepositories() {
    const githubRepos = document.getElementById('github-repos');
    if (!githubRepos) return;

    githubRepos.innerHTML = repositories.map(repo => `
        <div class="repo-card">
            <a href="${repo.url}" target="_blank" class="repo-name">${repo.name}</a>
            <p class="repo-description">${repo.description}</p>
            <div class="repo-stats">
                <div class="repo-language">
                    <span class="language-dot" style="background-color: ${languageColors[repo.language] || '#ccc'}"></span>
                    <span>${repo.language}</span>
                </div>
                <div class="repo-stars">
                    <i class="fas fa-star"></i> ${repo.stars}
                </div>
                <div class="repo-forks">
                    <i class="fas fa-code-branch"></i> ${repo.forks}
                </div>
            </div>
        </div>
    `).join('');
}

// Project filtering functionality
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, .stat, .contact-form').forEach(el => {
        observer.observe(el);
    });
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const current = parseInt(counter.textContent);
        const increment = target / 50; // Adjust speed here
        
        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(() => animateCounter(counter), 20);
        } else {
            counter.textContent = target;
        }
    };

    // Intersection observer for counters
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-number');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to fetch GitHub repositories (for real implementation)
async function fetchGitHubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        return repos.map(repo => ({
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language || 'Unknown',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url
        }));
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        return repositories; // Fall back to sample data
    }
}

// Optional: Load real GitHub data
// Uncomment and modify the following function to use real GitHub data
/*
async function loadRealGitHubData() {
    const username = 'yourusername'; // Replace with actual GitHub username
    const realRepos = await fetchGitHubRepos(username);
    
    // Update repositories array with real data
    repositories.length = 0;
    repositories.push(...realRepos);
    
    // Reload repositories display
    loadRepositories();
}
*/

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add some CSS for loading state
const loadingStyles = `
    <style>
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: '';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 10000;
        }
        
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', loadingStyles);