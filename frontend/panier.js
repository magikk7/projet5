let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));//pour panier vide
let tbodyPanier = document.getElementById('tbody-panier');

if(localStorage == null || localStorage == 0){
    infoQuantiteTableau.innerHTML = 'Votre panier est vide';
} else {


for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let selectionMeublePanier = JSON.parse(localStorage.getItem(key));


    //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours
    tbodyPanier.innerHTML += `
    <tr class="ligne-produit" id="${key}">
        <td class="donnees-tableau center">${selectionMeublePanier[0].name}</td>
        <td class="donnees-tableau center">
            <button class="moins"><img src="img/moins.png" alt="#" class="dimension-icone"></button>
            <input type="text" class="quantite-produit-select center">
            <button class="plus"><img src="img/plus.png" alt="#" class="dimension-icone"></button>
        </td>
        <td class="donnees-tableau prix-unique-produit right">${selectionMeublePanier[0].price}</td>
        <td class="donnees-tableau right sous-total-produit"></td>
        <td><button class="donnees-tablea btn-supprimer"><img src="img/supprime.png" alt="#" class="dimension-icone"></button><td>
    </tr>
    `;
};
    // intégrer valeur input page2 du produit => page3 tableau panier
    let quantiteProduitSelect = document.getElementsByClassName('quantite-produit-select');//collection=boucle
    // console.log(quantiteProduitSelect)//ok
    
    for(i=0; i<quantiteProduitSelect.length; i++){
        // console.log(quantiteProduitSelect[i]);//ok
        let key = localStorage.key(i);
        let stockage = JSON.parse(localStorage.getItem(key))
        // console.log(stockage.length);//ok
        quantiteProduitSelect[i].value = stockage.length;
    };
};


/////////décrémentation et incrementation / QUANTITE MEUBLES
let decrementBtn = document.getElementsByClassName('moins');
let incrementBtn = document.getElementsByClassName('plus');
// console.log(decrementBtn); // console.log(incrementBtn); 


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



//////////////////////SOUS TOTAL =>QUANTITE ET PRIX///////////////////

        //recup valeurs quantites
        let quantiteSousTotal = document.getElementsByClassName('quantite-produit-select');
        for(b=0; b<quantiteSousTotal.length; b++) {
            // console.log(quantiteSousTotal[i].value)//ok
            // console.log(quantiteSousTotal[i];//ok collection = faire boucle
            var reponse1 = parseInt(quantiteSousTotal[b].value);//string
            console.log(reponse1)//number
        };

        
        //recup valeurs quantites
        let prixProduit  = document.getElementsByClassName('prix-unique-produit');
        for(c=0; c<prixProduit.length;c++) {
            // console.log(prixProduit[i].innerHTML)//ok
            // console.log(prixProduit);//ok collection = faire boucle
            var reponse2 = parseInt(prixProduit[c].innerHTML);//string
            console.log(reponse2)//number
        };



let sousTotalProduit = document.getElementsByClassName('sous-total-produit');
// console.log(sousTotalProduit)//ok collection = faire boucle
for(a=0; a<sousTotalProduit.length; a++) {    
sousTotalProduit[a].innerHTML = reponse1 * reponse2;
};









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