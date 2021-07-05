let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));//pour panier vide
let tbodyPanier = document.getElementById('tbody-panier');


    if(localStorage == null || localStorage == 0){
        infoQuantiteTableau.innerHTML = 'Votre panier est vide';
    } else {


    for (i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var selectionMeublePanier = JSON.parse(localStorage.getItem(key));


        //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours
        tbodyPanier.innerHTML += `
        <tr class="ligne-produit" id="${key}">
            <td class="donnees-tableau center">${selectionMeublePanier[0].name}</td>
            <td class="donnees-tableau quantite center">
                <input type="text" class="quantite-produit-select center">
            </td>
            <td class="donnees-tableau prix-unique-produit right">${selectionMeublePanier[0].price} &euro;</td>
            <td class="donnees-tableau sous-total-produit right"></td>
            <td><button class="donnees-tableau btn-supprimer">Supprimer</button><td>
        </tr>
        `;
    };

//   ////////////////////////////////////SUPPRIMER LIGNE DU PANIER////////////////////////////////////////////

        let btnSupprimer = document.getElementsByClassName('btn-supprimer');
          // console.log(btnSupprimer);
        let totalPanier = document.getElementById('prix-tout-total');// console.log(totalPanier);

        function supprimer(){
        
            if(localStorage.length > 0){
                for (i = 0; i < btnSupprimer.length; i++){

                    btnSupprimer[i].addEventListener('click', function(event){
                        // console.log(event);
                        event.preventDefault();
    
                        // console.log(key)
                        // console.log(localStorage.removeItem(key));//undefined
    
                        //la row des produits //5 rows maxi 
                        event.target.parentElement.parentElement.remove();
    
                        //suppression dans le localstorage
                        localStorage.removeItem(key);
    
                        alert('produit(s) supprimé(s)');
                        //rechargement page
                        window.location.href = 'panier.html';
                    });
                };   
            }else{
                alert('votre panier est vide');
                totalPanier.innerHTML = `0 &euro;`;
            };
        };
        supprimer()


        ////////////////////// tout supprimer/////////////////
        let supprimerPanier = document.getElementById('supprimer-panier')//;console.log(supprimerPanier);
        // tbody-panier
        let leParentPourTableau = document.getElementById('tbody-panier');// console.log(leParentPourTableau);//ok

        // let totalPanier = document.getElementById('prix-tout-total');// console.log(totalPanier);
                
        function toutSupprimer(){

            if(localStorage.length > 0){
                supprimerPanier.addEventListener('click', function(event){
                //console.log(event);
                event.preventDefault;

                //je selectionne tout le tableau à supprimer
                leParentPourTableau.remove();

                //suppression du localstorage
                localStorage.clear();
                // console.log(Storage.clear());

                totalPanier.innerHTML = `0 &euro;`;
                });
            };
        };
        toutSupprimer();

////////////////////// multiplier par rows dans table html    //recuperer VALEUR PAR LIGNE/////////////////

    let parentPourTableau = document.getElementById('tbody-panier').children;//ok // console.log(parentPourTableau);
    // console.log(parentPourTableau);//ok

//PARENT
    for(i=0; i<parentPourTableau.length;i++){
        // console.log(parentPourTableau[i]);//ok//LIGNE PRODUIT => TR

        //ici je calcule chaque ligne
        //ROW => PREND TOUS LES TD HORIZONTAUX
        let enfant = parentPourTableau[i].children;//collection des TD HORIZONTAUX


//QUANTITE
        let quantiteP = enfant[1].children[0];
        // console.log(quantiteP); //input uniquement // value a voir après

        let key = localStorage.key(i);
        let stockage = JSON.parse(localStorage.getItem(key));
        // console.log(stockage.length);//ok

        quantiteP.value = stockage.length;
        let quantiteProduitParLigne = quantiteP.value;/////
                

//PRIX
        let coutP = enfant[2];//toute la balise TD PRIX
        let chiffreCoutP = parseInt(coutP.innerHTML);/////
        // console.log(chiffreCoutP);//ok//number//
        
        
//SOUS TOTAL HORIZONTAL 
        let sousTotalP = enfant[3];/////
        // console.log(sousTotalP);//ok//TD SOUS TOTAL 


        function multiplication(){
            return quantiteProduitParLigne * chiffreCoutP;
        };
        // console.log(multiplication());
        sousTotalP.innerHTML = multiplication();
    }

    ////////////////////////////////////TOTAL => CALCUL VERTICAL////////////////////////////////////////////

        // let totalPanier = document.getElementById('prix-tout-total');
        // console.log(totalPanier);
        let ensembleSousTotal = document.getElementsByClassName('sous-total-produit');
        // console.log(ensembleSousTotal);//string
        

        function sommeDuPanier(){
            let array = [];
            let somme = 0;

            for(i=0;i<ensembleSousTotal.length;i++){
                if(ensembleSousTotal.length >= 1){
                    let ensemble = parseInt(ensembleSousTotal[i].innerHTML);
                
                    //creation tableau pour addition des sous totaux
                    array.push(ensemble);

                    //addition
                    const reducer = (acc, cur) => acc + cur;
                    
                    somme = array.reduce(reducer);
                    // console.log(somme);

                    //TOTAL du panier
                    totalPanier.innerHTML = somme;
                    }else{
                        totalPanier.innerHTML = `0 &euro;`;
                };
            };
        };;
        sommeDuPanier();
    };


        /////////////////////////formulaire a envoyer au serveur//////////////////////////////////
let formulaire = document.getElementById('formulaire');// console.log(formulaire);
let envoieFormulaire = document.getElementById('envoie-formulaire');//console.log(envoieFormulaire);

let lastname = document.getElementById('lastName').innerHTML; console.log(lastname);
let firstname = document.getElementById('firstName').value;//console.log(firstname);
let address = document.getElementById('address').value;//console.log(address);
let city = document.getElementById('city').value;//console.log(city)
let email = document.getElementById('email').value;//console.log(email);


formulaire.addEventListener('submit', function(event){
// console.log(event);
event.preventDefault();

//OBJET => CONTACT CLIENT
//TABLEAU => PANIER VALIDE => localStorage
// methode POST // array de strings product_id => meubles
    let contact = {
        lastName: lastname,
        firstName: firstname,
        address: address,
        city: city,
        email: email,
    };        

    
    console.log(contact);



// fetch('http://localhost:3000/api/furniture/order', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},    
//     body: JSON.stringify(contact),
//             mode: 'cors',
//             cache: 'default' 
// })
// .then(function(response){
//             if(response.ok){
//                 console.log(response);
//             }else{
//                 console.log(response.statusText);
/
//             return response.json();
//         })
// .then(function(){

//         });
// });


