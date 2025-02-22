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

    // Fetch initial Kanye quote
    fetchKanyeQuote();

    // Add event listener to the button
    const newQuoteButton = document.getElementById('new-quote-button');
    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', fetchKanyeQuote);
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
