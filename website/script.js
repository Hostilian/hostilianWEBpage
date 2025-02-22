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

    // Fetch initial Shrek quote
    fetchShrekQuote();

    // Add event listener to the button
    const newQuoteButton = document.getElementById('new-shrek-quote-button');
    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', fetchShrekQuote);
    }
});
