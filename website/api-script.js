document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('api-integration');
    const loadingElement = document.createElement('div');
    loadingElement.id = 'loading';
    loadingElement.className = 'loading-state';
    loadingElement.innerHTML = `
        <div class="spinner"></div>
        <p>Fetching dogs from the swamp...</p>
    `;
    container.appendChild(loadingElement);

    const maxRetries = 3; // Maximum number of retries
    let retryCount = 0;

    function fetchDogBreeds() {
        fetch('https://registry.dog/api/v1/breeds/list', {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Hostilian-Portfolio/1.0'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            loadingElement.remove();
            if (data.status === 'success') {
                displayDogBreeds(data.data);
            } else {
                throw new Error('API returned error status');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            loadingElement.remove();
            if (retryCount < maxRetries) {
                retryCount++;
                console.log(`Retrying fetch, attempt ${retryCount}/${maxRetries}`);
                setTimeout(fetchDogBreeds, 2000); // Retry after 2 seconds
            } else {
                displayError(`Failed to load dog breeds after ${maxRetries} retries. ${error.message}`);
            }
        });
    }

    fetchDogBreeds(); // Initial fetch

    function displayDogBreeds(breeds) {
        const breedsGrid = document.createElement('div');
        breedsGrid.className = 'breeds-grid';

        breeds.forEach(breed => {
            const card = document.createElement('div');
            card.className = 'breed-card shrek-themed';
            card.innerHTML = `
                <img src="${breed.images.small.studio || 'images/default-dog.jpg'}" alt="${breed.general.name}">
                <div class="breed-info">
                    <h3>${breed.general.name}</h3>
                    <p class="group">${breed.general.group}</p>
                    <p class="description">${breed.general.shortDescription}</p>
                    <div class="stats">
                        <span>Height: ${breed.general.height}″</span>
                        <span>Weight: ${breed.general.weight}lbs</span>
                        <span>Lifespan: ${breed.general.lifespan}yrs</span>
                    </div>
                    <div class="breed-traits">
                        ${breed.general.personalityTraits
                            .map(trait => `<span class="trait-tag">${trait}</span>`)
                            .join('')}
                    </div>
                </div>`;
            breedsGrid.appendChild(card);
        });

        container.appendChild(breedsGrid);
    }

    function displayError(message) {
        container.innerHTML = `
            <div class="error-message shrek-themed">
                <h2>Donkey! Something went wrong!</h2>
                <p>${message}</p>
                <button onclick="location.reload()" class="retry-button">
                    Get Out of My Swamp and Try Again
                </button>
            </div>`;
    }
});
