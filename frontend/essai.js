
    document.addEventListener('DOMContentLoaded', function() {
    let rowElements = document.getElementById('table').querySelectorAll('tr');
    let total = getTotal(rowElements); // sous total ici
    }, false);
    
    getTotal(array) {
    let total = 0;
        
    array.forEach((row) => {
        let value = Number(row.querySelector('.value').innerText);
        total += value;
    });
        
    return total;
    };

    

    document.addEventListener('DOMContentLoaded', function() {
        //recupere les tr
        let ligneElements = document.getElementById('tbody-panier').querySelectorAll('tr');
        let sousTotal = getSousTotal(lignelements); // sous total ici
        }, false);
        
        getSousTotal(array1) {
        let sousTotal = 0;
            
        //pour chaque ROW => quantite * prix
        array1.forEach((row) => {
            //PRIX
                let prixProduit  = document.getElementsByClassName('prix-unique-produit');
                parseInt(prixProduit).innerHTML;


        });
            
        return sousTotal;
        };






    // Accessing individual quantity fields
    for(i = 0; i < quantityFields.length; i++){//1 reprise input class number
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
                
    }
////////////////////// This function helps to multiply the quantity and the price
function totalCost(event){
    //quantite
    let quantity = event.target

    //parent cible
    quantity_parent = quantity.parentElement.parentElement
    //prix
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    //total
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    
    total_field.children[0].innerText = quantity.value * price_field_content
    
}
















//<button class="moins"><img src="img/moins.png" alt="#" class="dimension-icone"></button>
//<button class="plus"><img src="img/plus.png" alt="#" class="dimension-icone"></button>

/////////décrémentation et incrementation / QUANTITE MEUBLES
let decrementBtn = document.getElementsByClassName('moins');
let incrementBtn = document.getElementsByClassName('plus');
// console.log(decrementBtn); // console.log(incrementBtn); 



///////////////////////////////
//decrementation
// for(i=0; i<decrementBtn.length; i++){
//     let btn = decrementBtn[i];
//     btn.addEventListener('click', function(event){
//         // console.log(event.target);

//     let inputNb = event.target.parentElement.children[1];
//     let inputNb_value = inputNb.value;

//     //CHIFFRE A 1 MINIMUM
//     let newValue = parseInt(inputNb_value) - 1;

//     if(newValue > 0){
//         inputNb.value = newValue;
//     };
//     });
// };

//incrementation
// for(i=0; i<incrementBtn.length; i++){
//     let btn = incrementBtn[i];
//     btn.addEventListener('click', function(event){
//         // console.log(event.target);

//     let inputNb = event.target.parentElement.children[1];
//     let inputNb_value = inputNb.value;
//     // console.log(inputNb_value); ==1

//     //CHIFFRE A 10 MAXI
//     let newValue = parseInt(inputNb_value) + 1;
    
//     if(newValue <= 10){
//         inputNb.value = newValue;
//     };
//     });
// };

////////////////////SOUS TOTAL =>QUANTITE ET PRIX///////////////////

        // recup valeurs quantites
        // let quantiteSousTotal = document.getElementsByClassName('quantite-produit-select');
        // for(b=0; b<quantiteSousTotal.length; b++) {
        //     // console.log(quantiteSousTotal[i].value)//ok
        //     // console.log(quantiteSousTotal[i];//ok collection = faire boucle
        //     var reponse1 = parseInt(quantiteSousTotal[b].value);//string
        //     console.log(parseInt(quantiteSousTotal[b].value))//number
        // };

        
        
        // recup valeurs quantites
        // let prixProduit  = document.getElementsByClassName('prix-unique-produit');
        // var arr3 = [];

        // for(c=0; c<prixProduit.length;c++) {
        //     // console.log(prixProduit[i].innerHTML)//ok
        //     // console.log(prixProduit);//ok collection = faire boucle
        //     var reponse2 = parseInt(prixProduit[c].innerHTML);//string
        //     console.log(parseInt(prixProduit[c].innerHTML));//number
        // };



        // let sousTotalProduit = document.getElementsByClassName('sous-total-produit');

        
/////////////////////////////revoir la methode pour additionner dans les tableaux
// let sousTotalProduit = document.getElementsByClassName('sous-total-produit');
// for(a=0; a<sousTotalProduit.length; a++) { 
//     console.log(sousTotalProduit[a].innerHTML = 3);
    // sousTotalProduit[a].innerHTML += (reponse1 * reponse2);
    
    
    // result = 0;
    // result += reponse1 * reponse2;
    // console.log(result);
    
    
    
    // };


// sousTotalProduit.innerHTML = reponse1 * reponse2;

// console.log(sousTotalProduit)//ok collection = faire boucle
// for(a=0; a<sousTotalProduit.length; a++) { 
// console.log(sousTotalProduit[0].innerHTML = 'chat');
// sousTotalProduit[a].innerHTML += (reponse1 * reponse2);


// result = 0;
// result += reponse1 * reponse2;
// console.log(result);



// };




//CALCUL HORIZONTAL DU TABLEAU - SOMME PAR LIGNE DE PRODUITS


// for(i=0; i < quantiteProduit.length; i++){
//     quantiteProduit[i].addEventListener('change', function(event){
//         // prixTotalProduit.innerHTML = `${infoLocalStorage[i].price}`;
//     console.log(event.target);
//     });
// };

