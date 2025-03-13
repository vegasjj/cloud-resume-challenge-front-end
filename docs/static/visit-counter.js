document.addEventListener("DOMContentLoaded", function() {
    fetch('https://webresume-to-counter.azurewebsites.net/api/webresume_to_counter?')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visit-counter').innerText = data.count;
        })
        .catch(error => console.error('Error fetching visit counter:', error));
});
