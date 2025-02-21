// website/api-script.js

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://registry.dog/api/v1/breeds')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          displayDogBreeds(data.data);
      })
      .catch(error => {
          console.error('Fetch error:', error);
          document.getElementById('dog-breeds-container').innerHTML = '<p>Failed to load dog breeds.</p>';
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
          breedDiv.classList.add('breed-card'); // Add class for styling

          breedDiv.innerHTML = `
              <h3>${breed.general.name}</h3>
              <p>Group: ${breed.general.group}</p>
              <p>Personality: ${breed.general.personalityTraits.join(', ')}</p>
              <img src="${breed.images.indoors}" alt="${breed.general.name}" onerror="this.src='images/placeholder.jpg'">
          `;
          container.appendChild(breedDiv);
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://registry.dog/api/v1/breeds')
      .then(response => {
          console.log('Response status:', response.status); // Log the response status
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          console.log('API Data received:', data); // Log the entire data object
          displayDogBreeds(data.data);
      })
      .catch(error => {
          console.error('Fetch error:', error);
          document.getElementById('dog-breeds-container').innerHTML = '<p>Failed to load dog breeds.</p>';
      });

  function displayDogBreeds(breeds) {
      console.log('Breeds array:', breeds); // Log the breeds array
      const container = document.getElementById('dog-breeds-container');
      container.innerHTML = ''; // Clear loading message

      if (!breeds || breeds.length === 0) {
          container.innerHTML = '<p>No dog breeds found.</p>';
          return;
      }

      breeds.forEach(breed => {
          const breedDiv = document.createElement('div');
          breedDiv.classList.add('breed-card'); // Add class for styling

          breedDiv.innerHTML = `
              <h3>${breed.general.name}</h3>
              <p>Group: ${breed.general.group}</p>
              <p>Personality: <span class="math-inline">\{breed\.general\.personalityTraits\.join\(', '\)\}</p\>
<img src="{breed.images.indoors}" alt="${breed.general.name}" onerror="this.src='images/placeholder.jpg'">
`;
container.appendChild(breedDiv);
});
}
});
