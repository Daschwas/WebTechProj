function getQuotes() {
    try {
        let selectedValue = document.querySelector('input[name="numberOfQuotes"]:checked').value;
        console.log('Selected value:', selectedValue);

        let apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=computers&limit=' + selectedValue;
        const apiKey = 'al/zHrzPIddGWNtdwcS+Kg==J6DqkicNGsAU45le'

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            },
            contentType: 'application/json'
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);

                if (selectedValue !== 1 && data.length === 1) {
                    console.log('Only one quote retrieved');
                }

                let quoteText = data.map(function(quoteData) {
                    return `"${quoteData.quote}" - ${quoteData.author}`;
                }).join('<br>'+'<br>');

                let quotePlaceholder = document.getElementById('quotePlaceholder');
                quotePlaceholder.innerHTML = quoteText;
            })

            .catch(function(error) {
                console.error('An error occurred in connecting to API:', error);
            });

    } catch (error) {
        console.error('An error occurred in getting quotes:', error);
    }
}

document.getElementById('getQuotesButton').addEventListener('click', getQuotes);