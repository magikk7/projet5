    let infoLocalStorage = JSON.parse(localStorage.getItem('caracteristiques'));
    // console.log(infoLocalStorage[0]);ok
    console.log(localStorage.key(0));
    console.log(localStorage.key(0));
    console.log(Object.entries(localStorage));
    // let trucMuche = Object.entries(localStorage);
    // console.log(trucMuche.slice(0, 0));



    let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));
    let tbodyPanier = document.getElementById('tbody-panier');
    
    if(infoLocalStorage == null || infoLocalStorage == 0){
        infoQuantiteTableau.innerHTML = 'Votre panier est vide';
    } else {
    //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours
    for(i=0; i<infoLocalStorage.length; i++){
        tbodyPanier.innerHTML += `
        <tr class="ligne-produit" id="${infoLocalStorage[i]._id}">
            <td class="donnees-tableau center">${infoLocalStorage[i].name}</td>
            <td class="donnees-tableau center"><button>moins</button></td>
            <td class="donnees-tableau center"><input type="number" value="1" class="quantite-produit"></td>
            <td class="donnees-tableau center"><button>plus</button></td>
            <td class="donnees-tableau prix-unique-produit right">${infoLocalStorage[i].price}</td>
            <td class="donnees-tableau right prix-total-produit"></td>
            <td><button class="donnees-tablea btn-supprimer">Supprimer</button><td>
        </tr>
        `;   
    };
};

//SUPPRIMER UNE LIGNE DANS TABLEAU
function supprimer(){
    let btnSupprimer = document.getElementsByClassName('btn-supprimer');

    for (i = 0; i < btnSupprimer.length; i++){
        btnSupprimer[i].addEventListener('click', function(event){
        event.target.parentElement.parentElement.remove();
    })};   
};
supprimer();


//CALCUL HORIZONTAL DU TABLEAU - SOMME PAR LIGNE DE PRODUITS
//afficher resultat
    let calculSommeLigne = document.getElementsByClassName('calcul-somme-ligne');//collection
    let quantiteProduit = document.getElementsByClassName('quantite-produit');//collection
    let prixTotalProduit = document.getElementsByClassName('prix-total-produit');//ok
    let prixUniqueProduit = document.getElementsByClassName('prix-unique-produit');//collection

    for(i=0; i < quantiteProduit.length; i++){
        quantiteProduit[i].addEventListener('change', function(event){
            // prixTotalProduit.innerHTML = `${infoLocalStorage[i].price}`;
        console.log(event.target);
        });
    };
    
////////////// AVEC MISE A JOUR DU LOCALSTORAGE
// ok
//CALCUL VERTICAL DU TABLEAU DES PRIX - SOMME DES LIGNES
let prixToutTotal = document.getElementById('prix-tout-total');
let prixTableau = [];

if(infoLocalStorage > 0 || infoLocalStorage !== null){
    for (i=0; i<infoLocalStorage.length; i++){
        let prixMeublePanier = parseInt(infoLocalStorage[i].price);
        
        //transformer les strings pour le calcul
        prixTableau.push(prixMeublePanier);
        // console.log(prixTableau);
        let reducer2 = (acc, cur) => acc + cur
        // console.log(prixTableau.reduce(reducer2));

        prixToutTotal.innerHTML = prixTableau.reduce(reducer2);
    };
};










// for(i=0; i<infoLocalStorage.length; i++){
//     console.log(infoLocalStorage.splice(0, 1));
// };




        //supprimer 1 seul element en fonction de l'index Array
        // infoLocalStorage.splice(infoLocalStorage[1], 1);

        // for(i=0; i<infoLocalStorage.length; i++){
        //     // console.log(infoLocalStorage.splice(0, 1));
        // console.log(localStorage.removeItem('caracteristiques'));
        // };