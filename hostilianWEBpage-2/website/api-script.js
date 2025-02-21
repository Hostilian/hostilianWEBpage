document.addEventListener('DOMContentLoaded', function() {
    // Fetch Kanye Quotes
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            document.getElementById('kanye-quote').innerText = data.quote;
        })
        .catch(error => {
            console.error('Error fetching Kanye quote:', error);
            const kanyeQuoteDiv = document.getElementById('kanye-quote');
            kanyeQuoteDiv.innerHTML = "<p>Error loading Kanye quote.</p>";
        });

    // Fetch Dog Breeds from registry.dog
    fetch('/api/dogs') // Use the proxy endpoint
        .then(response => response.json())
        .then(data => {
            const dogBreedsDiv = document.getElementById('dog-breeds');
            if (data && data.message) {
                data.message.forEach(breed => {
                    const breedDiv = document.createElement('div');
                    breedDiv.classList.add('breed-item'); // Add a class for styling
                    breedDiv.innerHTML = `<h3>${breed}</h3>`;
                    dogBreedsDiv.appendChild(breedDiv);
                });
            } else {
                dogBreedsDiv.innerHTML = "<p>Failed to load dog breeds.</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
            const dogBreedsDiv = document.getElementById('dog-breeds');
            dogBreedsDiv.innerHTML = "<p>Error loading dog breeds.</p>";
        });
});
