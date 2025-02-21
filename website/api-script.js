document.addEventListener('DOMContentLoaded', function() {
  fetch('https://registry.dog/api/v1/breeds/list')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          if (data.status === 'success') {
              displayDogBreeds(data.data);
          } else {
              console.error('Failed to load dog breeds:', data.message);
              document.getElementById('dog-breeds-container').innerHTML =
                  '<p>Failed to load dog breeds data. Please try again later.</p>';
          }
      })
      .catch(error => {
          console.error('Fetch error:', error);
          document.getElementById('dog-breeds-container').innerHTML =
              '<p>Failed to load dog breeds data. Please try again later.</p>';
      });

  function displayDogBreeds(breeds) {
      const container = document.getElementById('dog-breeds-container');
      container.innerHTML = ''; // Clear loading message

      if (!breeds || breeds.length === 0) {
          container.innerHTML = '<p>No dog breeds found.</p>';
          return;
      }

      breeds.forEach(breed => {
          const breedDiv = document.createElement('div');
          breedDiv.classList.add('breed-card');

          breedDiv.innerHTML = `
              <h3>${breed.general.name}</h3>
              <p>Group: ${breed.general.group}</p>
              <p>Personality Traits: ${breed.general.personalityTraits.join(', ')}</p>
              <img src="${breed.images.indoors}" alt="${breed.general.name}"
                   onerror="this.src='images/placeholder.jpg'">
          `;
          container.appendChild(breedDiv);
      });
  }
});
