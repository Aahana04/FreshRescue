# Personal Portfolio Website

A modern, responsive portfolio website showcasing your projects, skills, and GitHub repositories.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful animations and transitions
- 📱 Mobile-friendly interface
- 🚀 Fast loading with smooth scrolling
- 📊 Project filtering and categorization
- 🔗 GitHub repository integration
- 📧 Contact form with validation
- 🌙 Professional gradient design

## Quick Start

1. Open `portfolio.html` in your web browser
2. Customize with your personal information (see below)
3. Deploy to your hosting platform

## Customization Guide

### 1. Personal Information

Edit the following sections in `portfolio.html`:

#### Hero Section
```html
<!-- Update your name and title -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
<p class="hero-description">
    Your personal description goes here...
</p>
```

#### Social Links
```html
<!-- Update with your actual social media links -->
<div class="social-links">
    <a href="https://github.com/yourusername" target="_blank">
    <a href="https://linkedin.com/in/yourusername" target="_blank">
    <a href="https://twitter.com/yourusername" target="_blank">
    <a href="mailto:your.email@example.com">
</div>
```

#### Contact Information
```html
<!-- Update with your contact details -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### 2. Projects and Repositories

#### Adding Your Projects

Edit the `projects` array in `portfolio-script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",
        description: "Description of your project",
        image: "🚀", // Use an emoji or replace with actual image
        tech: ["React", "Node.js", "MongoDB"], // Your tech stack
        category: "web", // Categories: web, mobile, api, opensource
        github: "https://github.com/yourusername/project",
        demo: "https://your-project-demo.com"
    },
    // Add more projects...
];
```

#### GitHub Integration

##### Option 1: Manual Repository Data
Edit the `repositories` array in `portfolio-script.js`:

```javascript
const repositories = [
    {
        name: "repository-name",
        description: "Repository description",
        language: "JavaScript",
        stars: 42,
        forks: 7,
        url: "https://github.com/yourusername/repository-name"
    },
    // Add more repositories...
];
```

##### Option 2: Automatic GitHub API (Recommended)
Uncomment and modify this function in `portfolio-script.js`:

```javascript
async function loadRealGitHubData() {
    const username = 'youractualusername'; // Replace with your GitHub username
    const realRepos = await fetchGitHubRepos(username);
    
    repositories.length = 0;
    repositories.push(...realRepos);
    
    loadRepositories();
}

// Call this function to load real data
// loadRealGitHubData();
```

### 3. Skills Section

Update your skills in `portfolio.html`:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-items">
        <span class="skill-item">Your Skills Here</span>
        <!-- Add more skills -->
    </div>
</div>
```

### 4. About Section

Customize your biography in `portfolio.html`:

```html
<div class="about-text">
    <p>
        Write your personal story and background here...
    </p>
    <p>
        Add more details about your experience...
    </p>
</div>
```

Update the statistics:

```html
<div class="stat">
    <span class="stat-number" data-target="50">0</span>
    <span class="stat-label">Projects Completed</span>
</div>
```

### 5. Color Theme Customization

To change the color scheme, update these CSS variables in `portfolio-style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
}
```

Or modify the gradient:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 6. Profile Image

Replace the placeholder icon with your actual photo:

```html
<!-- Replace this: -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- With this: -->
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-image">
</div>
```

Add corresponding CSS:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}
```

## Deployment Options

### 1. GitHub Pages
1. Create a new repository named `yourusername.github.io`
2. Upload all portfolio files
3. Enable GitHub Pages in repository settings
4. Access at `https://yourusername.github.io`

### 2. Netlify
1. Drag and drop your portfolio folder to [Netlify](https://netlify.com)
2. Get instant deployment with custom domain support

### 3. Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Automatic deployment on every commit

### 4. Traditional Web Hosting
Upload all files to your web hosting provider's public folder.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress any images you add
2. **Font Loading**: The portfolio uses Google Fonts with `display=swap`
3. **Code Minification**: Consider minifying CSS and JS for production
4. **CDN**: Font Awesome and Google Fonts are loaded from CDN

## Customization Examples

### Adding a Dark Mode Toggle

Add this CSS to `portfolio-style.css`:

```css
[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --card-bg: #2d2d2d;
}

.theme-toggle {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1000;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
}
```

### Adding More Project Categories

1. Add new filter button in HTML:
```html
<button class="filter-btn" data-filter="newcategory">New Category</button>
```

2. Add projects with the new category in JavaScript:
```javascript
{
    // ... project details
    category: "newcategory"
}
```

## SEO Optimization

1. Update the `<title>` tag in `portfolio.html`
2. Add meta description:
```html
<meta name="description" content="Your portfolio description">
```
3. Add Open Graph tags for social sharing:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="link-to-your-image">
```

## Contact Form Setup

The contact form currently simulates submission. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Set up a backend** with Node.js, Python, or PHP
3. **Use serverless functions** with Vercel or Netlify

### Example with Formspree:

```html
<form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
```

## Support

If you need help customizing your portfolio:

1. Check the browser console for any errors
2. Validate your HTML and CSS
3. Test on different devices and browsers
4. Consider using browser developer tools for debugging

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Happy coding! 🚀**

Remember to customize all the placeholder content with your actual information to make this portfolio truly yours.