document.addEventListener('DOMContentLoaded', function() {
    function fetchKanyeQuote() {
        fetch('https://api.kanye.rest')
            .then(response => response.json())
            .then(data => {
                const kanyeQuoteDiv = document.getElementById('kanye-quote');
                kanyeQuoteDiv.innerHTML = `<p>"${data.quote}"</p>`;
            })
            .catch(error => console.error('Error fetching Kanye quotes:', error));
    }

    function fetchMeme() {
        fetch('https://meme-api.com/gimme')
            .then(response => response.json())
            .then(data => {
                const memeDiv = document.getElementById('meme');
                memeDiv.innerHTML = `<img src="${data.url}" alt="${data.title}" style="width: 100%;">`;
            })
            .catch(error => console.error('Error fetching memes:', error));
    }

    function fetchWallpaper() {
        fetch('https://wallhaven.cc/api/v1/w/94x38z')
            .then(response => response.json())
            .then(data => {
                const wallpaperDiv = document.getElementById('wallpaper');
                wallpaperDiv.innerHTML = `<img src="${data.data.path}" alt="Wallpaper" style="width: 100%;">`;
            })
            .catch(error => console.error('Error fetching wallpapers:', error));
    }

    // Fetch initial Kanye quote
    fetchKanyeQuote();

    // Fetch initial meme
    fetchMeme();

    // Fetch initial wallpaper
    fetchWallpaper();

    // Add event listener to the button
    const newKanyeQuoteButton = document.getElementById('new-kanye-quote-button');
    if (newKanyeQuoteButton) {
        newKanyeQuoteButton.addEventListener('click', fetchKanyeQuote);
    }

    // Add event listener to the button
    const newMemeButton = document.getElementById('new-meme-button');
    if (newMemeButton) {
        newMemeButton.addEventListener('click', fetchMeme);
    }

    // Add event listener to the button
    const newWallpaperButton = document.getElementById('new-wallpaper-button');
    if (newWallpaperButton) {
        newWallpaperButton.addEventListener('click', fetchWallpaper);
    }

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
