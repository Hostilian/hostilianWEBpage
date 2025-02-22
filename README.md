### Project Structure
```
/shrek-themed-portfolio
│
├── /images
│   ├── shrek-background.jpg
│   ├── dog-breeds-preview.jpg
│   └── kanye-api-preview.jpg
│
├── /website
│   ├── index.html
│   ├── projects.html
│   ├── api.html
│   ├── about.html
│   ├── contact.html
│   ├── gallery.html
│   ├── style.css
│   ├── api-script.js
│   └── script.js
│
├── package.json
└── README.md
```

### 1. **HTML Files**

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shrek Themed Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Shrek's Swamp</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <h1>Welcome to Shrek's Swamp</h1>
        <p>Get inspired by Kanye and explore dog breeds!</p>
        <a href="projects.html" class="button">View My Work</a>
    </section>

    <footer>
        <p>&copy; 2025 Shrek's Swamp. All rights reserved.</p>
    </footer>
</body>
</html>
```

#### projects.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - Shrek's Swamp</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Shrek's Swamp</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h2>My Projects</h2>
        <div class="projects-grid">
            <div class="project-item">
                <img src="images/kanye-api-preview.jpg" alt="Kanye REST API Preview">
                <h3>Kanye REST API</h3>
                <p>A free REST API for random Kanye West quotes.</p>
                <a href="api.html" class="button">View Project</a>
            </div>
            <div class="project-item">
                <img src="images/dog-breeds-preview.jpg" alt="Dog Breeds API Preview">
                <h3>Dog Breeds API</h3>
                <p>Interactive web application showcasing various dog breeds.</p>
                <a href="api.html" class="button">View Project</a>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Shrek's Swamp. All rights reserved.</p>
    </footer>
</body>
</html>
```

#### api.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Integration - Shrek's Swamp</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Shrek's Swamp</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="api-integration">
        <h1>Kanye Quotes</h1>
        <div id="kanye-quote"></div>
        <h1>Dog Breeds</h1>
        <div id="dog-breeds"></div>
    </section>

    <footer>
        <p>&copy; 2025 Shrek's Swamp. All rights reserved.</p>
    </footer>

    <script src="api-script.js"></script>
</body>
</html>
```

#### gallery.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Shrek's Swamp</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Shrek's Swamp</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h2>Image Gallery</h2>
        <div class="gallery-grid">
            <img src="images/shrek-background.jpg" alt="Shrek Background">
            <img src="images/dog-breeds-preview.jpg" alt="Dog Breeds Preview">
            <img src="images/kanye-api-preview.jpg" alt="Kanye API Preview">
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Shrek's Swamp. All rights reserved.</p>
    </footer>
</body>
</html>
```

### 2. **CSS File (style.css)**
```css
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background: url('images/shrek-background.jpg') no-repeat center center fixed;
    background-size: cover;
}

header {
    background: rgba(106, 153, 78, 0.8); /* Shrek green */
    color: white;
    padding: 1rem 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
}

#hero {
    text-align: center;
    padding: 6rem 0;
    color: white;
}

.projects-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.project-item {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.button {
    background: #e8491d; /* Accent color */
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    text-decoration: none;
}

footer {
    background: rgba(244, 244, 244, 0.8);
    color: #333;
    text-align: center;
    padding: 2rem 0;
}

.gallery-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.gallery-grid img {
    width: 300px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

### 3. **JavaScript File (api-script.js)**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Fetch Kanye Quotes
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            const kanyeQuoteDiv = document.getElementById('kanye-quote');
            kanyeQuoteDiv.innerHTML = `<p>"${data.quote}"</p>`;
        })
        .catch(error => console.error('Error fetching Kanye quotes:', error));

    // Fetch Dog Breeds
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(data => {
            const dogBreedsDiv = document.getElementById('dog-breeds');
            data.message.forEach(dogImage => {
                const img = document.createElement('img');
                img.src = dogImage;
                img.alt = 'Dog Breed';
                img.style.width = '200px';
                img.style.margin = '10px';
                dogBreedsDiv.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));
});
```

### 4. **README.md**
```markdown
# Shrek Themed Portfolio

Welcome to the Shrek Themed Portfolio project! This project showcases various web development skills and integrates the Kanye REST API and Dog Breeds API.

## Project Structure

- **index.html**: Main entry point of the website.
- **projects.html**: Lists various projects.
- **api.html**: Integrates the Kanye REST API and Dog Breeds API.
- **gallery.html**: Displays a gallery of images.
- **style.css**: Contains the CSS styles for the website.
- **api-script.js**: JavaScript file for fetching data from APIs.

## Features

- **Kanye REST API Integration**: Fetches random quotes from Kanye West.
- **Dog Breeds API Integration**: Displays random dog breed images.
- **Shrek Theme**: Themed design inspired by Shrek.
- **Image Gallery**: Displays a gallery of images related to the projects.

## Setup Instructions

1. Clone the repository.
2. Open `index.html` in a web browser to view the project.

## License

This project is open-source and available under the MIT License.
```

### 5. **Running the Project**
1. Ensure you have a local server running (you can use `nodemon` or any other server).
2. Open `index.html` in your browser to view the project.

### Conclusion
This project combines a fun Shrek theme with the functionality of the Kanye West quotes API and the Dog Breeds API. You can further enhance it by adding more features, improving the design, or integrating additional APIs.


