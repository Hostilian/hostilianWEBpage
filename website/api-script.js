document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('dog-breeds-container');

    fetch('https://api.opendogregistry.com/breeds')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';
            data.forEach(breed => {
                const breedElement = document.createElement('p');
                breedElement.textContent = breed.name;
                container.appendChild(breedElement);
            });
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
            container.innerHTML = '<p>Failed to load dog breeds data.</p>';
        });
});
