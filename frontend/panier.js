let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));//pour panier vide
let tbodyPanier = document.getElementById('tbody-panier');


    if(localStorage == null || localStorage == 0){
        infoQuantiteTableau.innerHTML = 'Votre panier est vide';
    } else {


    for (i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let selectionMeublePanier = JSON.parse(localStorage.getItem(key));


        //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours
        tbodyPanier.innerHTML += `
        <tr class="ligne-produit" id="${key}">
            <td class="donnees-tableau center">${selectionMeublePanier[0].name}</td>
            <td class="donnees-tableau quantite center">
                <input type="text" class="quantite-produit-select center">
            </td>
            <td class="donnees-tableau prix-unique-produit right">${selectionMeublePanier[0].price}</td>
            <td class="donnees-tableau sous-total-produit right"></td>
            <td><button class="donnees-tablea btn-supprimer"><img src="img/supprime.png" alt="#" class="dimension-icone"></button><td>
        </tr>
        `;
    };


    ////////////////////// multiplier par rows dans table html    //recuperer VALEUR PAR LIGNE/////////////////


    let parentPourTableau = document.getElementById('tbody-panier').children;//ok // console.log(parentPourTableau);
    // console.log(parentPourTableau);//ok

//PARENT
    for(i=0; i<parentPourTableau.length;i++){
        // console.log(parentPourTableau[i]);//ok//LIGNE PRODUIT => TR

        //ici je calcule chaque ligne
        //ROW => PREND TOUS LES TD HORIZONTAUX
        let enfant = parentPourTableau[i].children;//collection des TD HORIZONTAUX


// valeur VALUE => QUANTITE
        let quantiteP = enfant[1].children[0];
        console.log(quantiteP); //input uniquement // value a voir après

        let key = localStorage.key(i);
        let stockage = JSON.parse(localStorage.getItem(key))
        console.log(stockage.length);//ok

        quantiteP.value = stockage.length;
        let quantiteProduitParLigne = quantiteP.value;/////
                

//PRIX
        let coutP = enfant[2];//toute la balise TD PRIX
        let chiffreCoutP = parseInt(coutP.innerHTML);/////
        // console.log(chiffreCoutP);//ok//number//recuperable
        
        
//SOUS TOTAL HORIZONTAL 
        let sousTotalP = enfant[3];/////
        console.log(sousTotalP);//ok//TD SOUS TOTAL 


        function multiplication(){
            return quantiteProduitParLigne * chiffreCoutP
        };
        console.log(multiplication());
        sousTotalP.innerHTML = multiplication();

///////////////////////////////////////////////////////////////////////////////////////stop
        // let ligneProduit = document.getElementsByClassName('ligne-produit');
        // console.log(ligneProduit);//ok TR => ligne

        //SOUSTOTAL VERTICAL
        let sousTotalDuProduit = document.getElementsByClassName('sous-total-produit');//collection des TD SOUS TOTAL
        // console.log(sousTotalDuProduit);//ok RESULTAT
        // sousTotalDuProduit.innerHTML = "bonjour";
    }



//BOUCLE pourcalcul des sous totaux
//POUR CHAQUE LIGNE => QTE * PRIX === SOUS TOTAL
    // for(let i = 0; i < sousTotalDuProduit.length; i++){
    //     // console.log(sousTotalDuProduit[i]);//ok
    //     let prixProduit = document.getElementsByClassName('prix-unique-produit');// console.log(prixProduit);
    //     let quantiteProduit = document.getElementsByClassName('quantite-produit-select');// console.log(quantiteProduit);
    // };


    



    






    };




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



        // function getTotal(array){
        //     let total = 0;
            
        //     array.forEach((row) => {
        //     let valeur = Number(row.querySelector('.prix-unique-produit').innerText);
        //     console.log(valeur);
        //     //total += valeur;//
        // });
        // console.log(total);//0 si pas addition
        //     return total;
        // };