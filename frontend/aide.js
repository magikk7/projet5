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
        
            <input type="text" class="quantite-produit-select center">
         
            
        <button class="plus">+</button>
        </td>

        <td class="donnees-tableau prix-unique-produit right">${selectionMeublePanier[0].price}</td>
        <td class="donnees-tableau right prix-total-produit"></td>
        <td><button class="donnees-tablea btn-supprimer">Supprimer</button><td>
    </tr>
    `; 




};
    // intégrer valeur input page2 du produit => page3 tableau panier
    let quantiteProduitSelect = document.getElementsByClassName('quantite-produit-select');//collection=boucle
    // console.log(quantiteProduitSelect)//ok
    
    for(i=0; i<quantiteProduitSelect.length; i++){
        // console.log(quantiteProduitSelect[i]);//ok
        let key = localStorage.key(i);
        let coucou = JSON.parse(localStorage.getItem(key))
        // console.log(coucou.length);//ok
        quantiteProduitSelect[i].value = coucou.length;
    };
};


/////////décrémentatin et incrementation / QUANTITE MEUBLES
let decrementBtn = document.getElementsByClassName('moins');
let incrementBtn = document.getElementsByClassName('plus');
// console.log(incrementBtn); // console.log(decrementBtn);


//decrementation
for(i=0; i<decrementBtn.length; i++){
    let btn = decrementBtn[i];
    btn.addEventListener('click', function(event){
        // console.log(event.target);

    let inputNb = event.target.parentElement.children[1];
    let inputNb_value = inputNb.value;

    //CHIFFRE A 1 MINIMUM
    let newValue = parseInt(inputNb_value) - 1;

    if(newValue > 0){
        inputNb.value = newValue;
    };
    });
};

//incrementation
for(i=0; i<incrementBtn.length; i++){
    let btn = incrementBtn[i];
    btn.addEventListener('click', function(event){
        // console.log(event.target);

    let inputNb = event.target.parentElement.children[1];
    let inputNb_value = inputNb.value;
    // console.log(inputNb_value); ==1

    //CHIFFRE A 10 MAXI
    let newValue = parseInt(inputNb_value) + 1;
    
    if(newValue <= 10){
        inputNb.value = newValue;
    };
    });
};


////faire que la nouvelle valeur se calcule avec PRIX///////////////////
let quantiteMeuble = document.getElementsByClassName('quantite-produit-select');//collection=boucle
let inputt = document.querySelector('input'); console.log(inputt);


let sousTotal = document.getElementsByClassName('prix-total-produit');//collection=boucle
let prixMeuble = document.getElementsByClassName('prix-unique-produit');//collection=boucle

    // quantiteMeuble.addEventListener('input', (event) => {
    //     // champ = event.target.value;
    //     // console.log(champ);
    //     // console.log(event);
    // });
    // console.log(quantiteMeuble)


  

    for(i=0; i < inputt.length; i++){
        // console.log(inputt[i]);
        inputt[i].addEventListener('input', (event) => {
            event.target.value;
console.log(event.target.value);

    });
    };


    inputt.addEventListener('input', (event) => {
        champ = event.target.value;
        console.log(champ);
    });

//CALCUL HORIZONTAL DU TABLEAU - SOMME PAR LIGNE DE PRODUITS


// for(i=0; i < quantiteProduit.length; i++){
//     quantiteProduit[i].addEventListener('change', function(event){
//         // prixTotalProduit.innerHTML = `${infoLocalStorage[i].price}`;
//     console.log(event.target);
//     });
// };




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