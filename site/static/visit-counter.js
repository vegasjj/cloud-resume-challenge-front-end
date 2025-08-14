document.addEventListener("DOMContentLoaded", function() {
    fetch('https://webresume-to-counter.azurewebsites.net/api/webresume_to_counter?')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#visit-counter').innerText = data.visits_counter;
        })
        .catch(error => console.error('Error fetching visit counter:', error));
});
