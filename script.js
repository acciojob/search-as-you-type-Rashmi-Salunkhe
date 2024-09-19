//your JS code here. If required.
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
let timeoutId = null;

// Debounce function to wait for user to stop typing for 500ms
searchInput.addEventListener('input', () => {
    clearTimeout(timeoutId);
    
    // Clear the search results when the input is empty
    if (!searchInput.value.trim()) {
        searchResults.innerHTML = '';
        return;
    }

    timeoutId = setTimeout(() => {
        fetchResults(searchInput.value.trim());
    }, 500);
});

async function fetchResults(query) {
    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${query}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3a9a6b376msh528c0d78a1c317ap1759efjsn28df182c8b4f',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayResults(data.list);
    } catch (error) {
        console.error('Error fetching results:', error);
        searchResults.innerHTML = '<p>No results found.</p>';
    }
}

function displayResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Display results
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const title = document.createElement('h3');
        title.classList.add('result-title');
        title.textContent = result.word;

        const definition = document.createElement('p');
        definition.classList.add('result-snippet');
        definition.textContent = result.definition;

        const permaLink = document.createElement('a');
        permaLink.classList.add('result-url');
        permaLink.href = result.permalink;
        permaLink.textContent = 'Read more';

        resultDiv.appendChild(title);
        resultDiv.appendChild(definition);
        resultDiv.appendChild(permaLink);

        searchResults.appendChild(resultDiv);
    });
}
