document.addEventListener('DOMContentLoaded', function() {
    function fetchShrekQuote() {
        fetch('https://shrek-quotes-api.herokuapp.com/api/quotes/random')
            .then(response => response.json())
            .then(data => {
                const shrekQuoteDiv = document.getElementById('shrek-quote');
                shrekQuoteDiv.innerHTML = `<p>"${data.quote}"</p>`;
            })
            .catch(error => console.error('Error fetching Shrek quotes:', error));
    }

    function fetchOnThisDay(month, day) {
        fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
            .then(response => response.json())
            .then(data => {
                const eventsDiv = document.getElementById('on-this-day-events');
                eventsDiv.innerHTML = data.events.map(event => `
                    <div>
                        <h3>${event.year}</h3>
                        <p>${event.description}</p>
                        <a href="${event.wikipedia[0].wikipedia}" target="_blank">${event.wikipedia[0].title}</a>
                    </div>
                `).join('');
            })
            .catch(error => console.error('Error fetching On This Day events:', error));
    }

    function fetchRonSwansonQuote() {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(response => response.json())
            .then(data => {
                const ronQuoteDiv = document.getElementById('ron-quote');
                ronQuoteDiv.innerHTML = `<p>"${data[0]}"</p>`;
            })
            .catch(error => console.error('Error fetching Ron Swanson quotes:', error));
    }

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

    // Fetch initial Shrek quote
    fetchShrekQuote();

    // Fetch today's events
    const today = new Date();
    fetchOnThisDay(today.getMonth() + 1, today.getDate());

    // Fetch initial Ron Swanson quote
    fetchRonSwansonQuote();

    // Fetch initial Kanye quote
    fetchKanyeQuote();

    // Fetch initial meme
    fetchMeme();

    // Fetch initial wallpaper
    fetchWallpaper();

    // Add event listener to the button
    const newShrekQuoteButton = document.getElementById('new-shrek-quote-button');
    if (newShrekQuoteButton) {
        newShrekQuoteButton.addEventListener('click', fetchShrekQuote);
    }

    // Add event listener to the button
    const newRonQuoteButton = document.getElementById('new-ron-quote-button');
    if (newRonQuoteButton) {
        newRonQuoteButton.addEventListener('click', fetchRonSwansonQuote);
    }

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

    // Add event listener to the form
    const onThisDayForm = document.getElementById('on-this-day-form');
    if (onThisDayForm) {
        onThisDayForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const month = document.getElementById('month').value;
            const day = document.getElementById('day').value;
            fetchOnThisDay(month, day);
        });
    }
});
