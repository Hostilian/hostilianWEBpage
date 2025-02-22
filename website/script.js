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

    // Fetch initial Shrek quote
    fetchShrekQuote();

    // Fetch today's events
    const today = new Date();
    fetchOnThisDay(today.getMonth() + 1, today.getDate());

    // Add event listener to the button
    const newQuoteButton = document.getElementById('new-shrek-quote-button');
    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', fetchShrekQuote);
    }
});
