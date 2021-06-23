let infoLocalStorage = JSON.parse(localStorage.getItem('caracteristiques'));
let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));//pour panier vide
let tbodyPanier = document.getElementById('tbody-panier');//le corps du panier


///ne pas afficher les memes données dans le tableau
let tableau_id = infoLocalStorage;
// console.log(tableau_id);
let temp = tableau_id.reduce(
    (acc, el) => {
        return acc.add(el._id)
    }, new Set()
    );
let tableau_sans_doublons = [...temp];
// console.log(infoLocalStorage[0]._id == tableau_sans_doublons);




if(infoLocalStorage == null || infoLocalStorage == 0){
    infoQuantiteTableau.innerHTML = 'Votre panier est vide';//?? verifications
} else {
//partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours

    for(i=0; i<infoLocalStorage.length; i++){
        if(infoLocalStorage[i]._id == tableau_sans_doublons){
        tbodyPanier.innerHTML += `
        <tr class="ligne-produit" id="${infoLocalStorage[i]._id}">
            <td class="donnees-tableau center">${infoLocalStorage[i].name}</td>
            <td class="donnees-tableau center quantite-produit">1</td>
            <td class="donnees-tableau prix-unique-produit right">${infoLocalStorage[i].price}</td>
            <td class="donnees-tableau right prix-total-produit"></td>
            <td><button class="donnees-tablea btn-supprimer">Supprimer</button><td>
        </tr>
        `;   
    }
    else {
        // let quantiteUn = document.getElementsByClassName('quantite-produit')[i].innerHTML;
        // let quantiteProduit = document.getElementsByClassName('quantite-produit')[i];

        //  // console.log(quantiteUn);
        // quantiteProduit.innerHTML = parseInt(quantiteUn)  +1;        
        
        
        // tbodyPanier.innerHTML += `
        // <tr class="ligne-produit" id="${infoLocalStorage[i]._id}">
        //     <td class="donnees-tableau center">${infoLocalStorage[i].name}</td>
        //     <td class="donnees-tableau center quantite-produit">1</td>
        //     <td class="donnees-tableau prix-unique-produit right">${infoLocalStorage[i].price}</td>
        //     <td class="donnees-tableau right prix-total-produit"></td>
        //     <td><button class="donnees-tablea btn-supprimer">Supprimer</button><td>
        // </tr>
        // `;   

    };
        };

// };
// }else{
// for(i=0; i<infoLocalStorage.length; i++){
//     let quantiteUn = document.getElementsByClassName('quantite-produit')[i].innerHTML;
//     let quantiteProduit = document.getElementsByClassName('quantite-produit')[i];
//     // console.log(quantiteUn);
//     quantiteProduit.innerHTML = parseInt(quantiteUn)  +1;
    
    //ajouter +1 au panier
//     parseInt(quantitePlusUn)
//     tbodyPanier.innerHTML += `
//     <tr class="ligne-produit" id="${infoLocalStorage[i]._id}">
//         <td class="donnees-tableau center">${infoLocalStorage[i].name}</td>
//         <td class="donnees-tableau center quantite-produit">1</td>
//         <td class="donnees-tableau prix-unique-produit right">${infoLocalStorage[i].price}</td>
//         <td class="donnees-tableau right prix-total-produit"></td>
//         <td><button class="donnees-tableau btn-supprimer">Supprimer</button><td>
//     </tr>
//     `;   
// };
// };


};
//<td class="donnees-tableau center"><input type="number" value="1" class="quantite-produit"></td></td>
        
// si 
// // console.log(localStorage.caracteristiques);
// est deja dans le tableau alors 
// ne pas afficher mais ajouter 1


// si id n'existe pas => rajouter id + quantite
// si id existe => rajouter que quantite
// console.log(infoLocalStorage[1]._id);


