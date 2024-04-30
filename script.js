// app.js

// Function to handle search functionality
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== '') {
            // Perform search functionality (replace with actual search implementation)
            alert(`Searching for: ${searchTerm}`);
            // Clear the search input field after searching
            searchInput.value = '';
        } else {
            alert('Please enter a search term.');
        }
    });
}

// Call handleSearch function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    handleSearch();
});
