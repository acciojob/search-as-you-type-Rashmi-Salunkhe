# Search As you Type

Given an input field, implement a `search-as-you-type` feature that queries an API after the user stops typing for `500 milliseconds`. You should be able to handle scenarios where the API returns results asynchronously.
Please use this dictionary api and fetch data real time
`X-RapidAPI-Key`: `c3a9a6b376msh528c0d78a1c317ap1759efjsn28df182c8b4f`
`X-RapidAPI-Host`: `mashape-community-urban-dictionary.p.rapidapi.com`

## Instructions

1. Make an `input` with an id of `search-input` where the user can type and it searches as the user is typing
2. Display the search results in the div with the id of `search-results`
3. When there are no results, show the text `No results found.` in the div.
4. Each result should have a div with the class of `result`
5. It should have the title with the class of `result-title`
6. The result definition should have a class of `result-snippet`
7. The permaLink should have a class of `result-url`
8. Whenever the user stops typing for `500ms`, only then fetch the results.
9. The results should be cleared then the search box is empty
