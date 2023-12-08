function getJokes() {
    try {
        let selectedValue = document.querySelector('input[name="numberOfJokes"]:checked').value;
        console.log('Selected value:', selectedValue);

        let apiUrl = 'https://api.api-ninjas.com/v1/jokes?category=computers&limit=' + selectedValue;
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
                    console.log('Only one joke retrieved');
                }

                let jokeText = data.map(function(jokeData) {
                    return `${jokeData.joke}`;
                }).join('<br>'+'<br>');

                let jokePlaceholder = document.getElementById('jokePlaceholder');
                jokePlaceholder.innerHTML = jokeText;
            })

            .catch(function(error) {
                console.error('An error occurred in connecting to API:', error);
            });

    } catch (error) {
        console.error('An error occurred in getting jokes:', error);
    }
}

document.getElementById('getJokesButton').addEventListener('click', getJokes);