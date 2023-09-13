const dogFactbtn = document.getElementById('dog-fact')
dogFactbtn.addEventListener('click', function() {
    
    fetch('https://dogapi.dog/api/v2/facts')
    .then (function(response) {
        return response.json()
    })
    .then (function (data) {
        const heroText = document.getElementById('hero-text')
        const dogFact = data.data[0].attributes.body
        heroText.innerText = dogFact
        heroText.classList.add('is-size-3')
    })
})


