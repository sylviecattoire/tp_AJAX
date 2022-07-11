// 1 - PSEUDO CODE --------------------

// Objectif ---
// Au clic de la race par l'utilisateur, une div apparaît avec toutes les infos de la race sélectionné



// 2 - CODE --------------------

// Intégrer toutes les races de chats de l'API au select 

let breedsList = document.querySelector('#breeds-list');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://catfact.ninja/breeds?', true);
xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {

        let breedsArray = JSON.parse(xhr.responseText).data;

        // On récupère toutes les races
        breedsArray.forEach(breeds => {
            let importBreeds = document.createElement('li');
            importBreeds.innerText = breeds.breed;
            breedsList.appendChild(importBreeds);
            importBreeds.addEventListener('click', () => {
                const found = breedsArray.find(element => element.breed == importBreeds.innerText);
                console.log(found);                
            });
        });

    }
}
xhr.send();