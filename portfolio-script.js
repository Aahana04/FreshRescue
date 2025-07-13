// Enhanced project data with more impressive examples
const projects = [
    {
        id: 1,
        title: "FinanceFlow - SaaS Platform",
        description: "A comprehensive financial management SaaS platform serving 10,000+ users with real-time analytics, automated reporting, and AI-powered insights.",
        image: "�",
        tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Chart.js"],
        category: "web",
        github: "https://github.com/alexmorgan/financeflow",
        demo: "https://financeflow-demo.com"
    },
    {
        id: 2,
        title: "DevCollab - Team Management",
        description: "A next-generation team collaboration platform with real-time code sharing, integrated video calls, and advanced project analytics used by 50+ development teams.",
        image: "�",
        tech: ["Vue.js", "Express", "Socket.io", "MongoDB", "WebRTC", "Docker"],
        category: "web",
        github: "https://github.com/alexmorgan/devcollab",
        demo: "https://devcollab-platform.com"
    },
    {
        id: 3,
        title: "FitTrack Pro - Mobile App",
        description: "A comprehensive fitness tracking app with AI workout recommendations, nutrition tracking, and social features. Featured in App Store with 4.8★ rating.",
        image: "�️",
        tech: ["React Native", "Redux", "Firebase", "ML Kit", "Stripe"],
        category: "mobile",
        github: "https://github.com/alexmorgan/fittrack-pro",
        demo: "https://apps.apple.com/app/fittrack-pro"
    },
    {
        id: 4,
        title: "CloudAPI Gateway",
        description: "High-performance API gateway handling 1M+ requests/day with advanced rate limiting, analytics, and microservices orchestration for enterprise clients.",
        image: "☁️",
        tech: ["Node.js", "Redis", "Docker", "Kubernetes", "AWS", "GraphQL"],
        category: "api",
        github: "https://github.com/alexmorgan/cloudapi-gateway",
        demo: "https://api-docs.cloudgateway.dev"
    },
    {
        id: 5,
        title: "ReactFlow UI Library",
        description: "Open-source React component library with 2,500+ GitHub stars, providing 50+ customizable components used by companies like Shopify and Airbnb.",
        image: "🎨",
        tech: ["React", "TypeScript", "Storybook", "Rollup", "CSS-in-JS"],
        category: "opensource",
        github: "https://github.com/alexmorgan/reactflow-ui",
        demo: "https://reactflow-ui.dev"
    },
    {
        id: 6,
        title: "E-Learning Platform",
        description: "Scalable e-learning platform supporting 25,000+ students with video streaming, interactive quizzes, progress tracking, and AI-powered course recommendations.",
        image: "📚",
        tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "AWS S3", "WebRTC"],
        category: "web",
        github: "https://github.com/alexmorgan/elearning-platform",
        demo: "https://eduflow-platform.com"
    },
    {
        id: 7,
        title: "CryptoTrader Analytics",
        description: "Real-time cryptocurrency trading analytics platform with advanced charting, portfolio management, and automated trading strategies for institutional clients.",
        image: "�",
        tech: ["Vue.js", "Python", "WebSocket", "Redis", "TradingView", "AWS"],
        category: "web",
        github: "https://github.com/alexmorgan/crypto-analytics",
        demo: "https://cryptotrader-analytics.com"
    },
    {
        id: 8,
        title: "Neural Network Visualizer",
        description: "Interactive machine learning visualization tool that helps students and researchers understand neural networks. Used by top universities worldwide.",
        image: "🧠",
        tech: ["D3.js", "Python", "TensorFlow", "Flask", "WebGL"],
        category: "opensource",
        github: "https://github.com/alexmorgan/neural-visualizer",
        demo: "https://neural-viz.org"
    }
];

// Enhanced repository data
const repositories = [
    {
        name: "financeflow-saas",
        description: "Full-stack SaaS platform for financial management with advanced analytics and AI insights.",
        language: "JavaScript",
        stars: 1247,
        forks: 189,
        url: "https://github.com/alexmorgan/financeflow-saas"
    },
    {
        name: "ml-trading-bot",
        description: "Machine learning-powered cryptocurrency trading bot with backtesting and risk management.",
        language: "Python",
        stars: 2156,
        forks: 445,
        url: "https://github.com/alexmorgan/ml-trading-bot"
    },
    {
        name: "reactflow-ui-library",
        description: "Professional React component library with TypeScript support and comprehensive documentation.",
        language: "TypeScript",
        stars: 2678,
        forks: 234,
        url: "https://github.com/alexmorgan/reactflow-ui-library"
    },
    {
        name: "microservices-gateway",
        description: "High-performance API gateway for microservices with advanced routing and load balancing.",
        language: "Go",
        stars: 891,
        forks: 123,
        url: "https://github.com/alexmorgan/microservices-gateway"
    },
    {
        name: "ai-code-assistant",
        description: "VS Code extension providing AI-powered code completion and refactoring suggestions.",
        language: "TypeScript",
        stars: 3421,
        forks: 567,
        url: "https://github.com/alexmorgan/ai-code-assistant"
    },
    {
        name: "blockchain-voting-system",
        description: "Secure blockchain-based voting system with zero-knowledge proofs for privacy.",
        language: "Solidity",
        stars: 1543,
        forks: 298,
        url: "https://github.com/alexmorgan/blockchain-voting"
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

// Dark mode functionality
function initializeDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark-theme', savedTheme === 'dark');
    updateThemeIcon(icon, savedTheme === 'dark');
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(icon, isDark);
        
        // Update particles color scheme
        updateParticlesTheme(isDark);
    });
}

function updateThemeIcon(icon, isDark) {
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// Particle.js configuration
function initializeParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#667eea"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#667eea",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

function updateParticlesTheme(isDark) {
    const color = isDark ? "#a78bfa" : "#667eea";
    
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        const pJS = window.pJSDom[0].pJS;
        pJS.particles.color.value = color;
        pJS.particles.line_linked.color = color;
        
        // Update existing particles
        for (let i = 0; i < pJS.particles.array.length; i++) {
            pJS.particles.array[i].color.value = color;
        }
    }
}

// Initialize portfolio
function initializePortfolio() {
    setupNavigation();
    initializeDarkMode();
    initializeParticles();
    loadProjects();
    loadRepositories();
    setupProjectFilters();
    setupContactForm();
    setupScrollAnimations();
    setupSmoothScrolling();
    
    // Animate counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        });
    });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
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