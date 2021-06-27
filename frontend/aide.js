let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));//pour panier vide
let tbodyPanier = document.getElementById('tbody-panier');

if(localStorage == null || localStorage == 0){
    infoQuantiteTableau.innerHTML = 'Votre panier est vide';
} else {


for (var i = 0; i < localStorage.length; i++) {
    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    let key = localStorage.key(i);
    let selectionMeublePanier = JSON.parse(localStorage.getItem(key));
    // let key = localStorage.key(i);
    // console.log(selectionMeublePanier[0]._id);


    //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours
    tbodyPanier.innerHTML += `
    <tr class="ligne-produit" id="${key}">
        <td class="donnees-tableau center">${selectionMeublePanier[0].name}</td>

        <td class="donnees-tableau center">
        <button class="moins">-</button>
        <input type="number" value="1" class="quantite-produit center">
        <button class="plus">+</button>
        </td>

        <td class="donnees-tableau prix-unique-produit right">${selectionMeublePanier[0].price}</td>
        <td class="donnees-tableau right prix-total-produit"></td>
        <td><button class="donnees-tablea btn-supprimer">Supprimer</button><td>
    </tr>
    `;   
};
};


/////////décrémentatin et incrementation
let decrementBtn = document.getElementsByClassName('moins');
let incrementBtn = document.getElementsByClassName('plus');
// console.log(incrementBtn);
// console.log(decrementBtn);

for(i=0; i<decrementBtn.length; i++){
    let btn = decrementBtn[i];
    btn.addEventListener('click', function(event){
        console.log(event.target);

    let inputNb = event.target.parentElement.children[1];
    // console.log(inputNb);

    let inputNb_value = inputNb.value
    });

};


//     // supprimer();


// afficherPanier();

//SUPPRIMER UNE LIGNE DANS TABLEAU
// function supprimer(){
//     let btnSupprimer = document.getElementsByClassName('btn-supprimer');

//     for (i = 0; i < btnSupprimer.length; i++){
//         btnSupprimer[i].addEventListener('click', function(event){
//         event.target.parentElement.parentElement.remove();

//         if(infoLocalStorage.length > 0){
//         let infoLocalStorage = JSON.parse(localStorage.setItem('choixMeuble'));

//         for(i = 0; i < infoLocalStorage.length; i++) {
//             console.log(infoLocalStorage[i]);
//         };
//         };
//     })};   
// };


// si ID.legnth    == 1 affiché HTML alors afficher
//else l'article est existant dans votre panier, veuillez choisir la quantité dans le tableau
// ne pas rajouté de ligne cdar duplicat

//comment je trouve id.length