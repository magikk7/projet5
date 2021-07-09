//création tableau qui représente le panier
let infoQuantiteTableau = parseInt(document.getElementById('info-quantite-tableau'));//pour panier vide
let tbodyPanier = document.getElementById('tbody-panier');      

    if(localStorage == null || localStorage == 0){
        infoQuantiteTableau.innerHTML = 'Votre panier est vide';
    } else {

    for (i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);//console.log(key);
        var selectionMeublePanier = JSON.parse(localStorage.getItem(key));//console.log(selectionMeublePanier);

        //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du localstorage en cours
        tbodyPanier.innerHTML += `
        <tr class="ligne-produit" id="${key}">
            <td class="donnees-tableau center">${selectionMeublePanier[0].name}</td>
            <td class="donnees-tableau quantite-produit-select center"></td>
            <td class="donnees-tableau prix-unique-produit right">${selectionMeublePanier[0].price/100} &euro;</td>
            <td class="donnees-tableau sous-total-produit right"></td>
            <td><button id="bouton" class="donnees-tableau btn-supprimer">Supprimer</button><td>
        </tr>
        `;
    };

////////////////////////////////////SUPPRIMER LIGNE DU PANIER////////////////////////////////////////////

        let btnSupprimer = document.getElementsByClassName('btn-supprimer');// console.log(btnSupprimer);
        let totalPanier = document.getElementById('prix-tout-total');// console.log(totalPanier);

        function supprimer(){
        
            if(localStorage.length > 0){
                for (i = 0; i < btnSupprimer.length; i++){

                    btnSupprimer[i].addEventListener('click', function(event){
                        // console.log(event);
                        event.preventDefault();   
    
                        //la row des produits //5 rows maxi == 5 produits
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
        supprimer();


        ////////////////////// tout supprimer/////////////////
        let supprimerPanier = document.getElementById('supprimer-panier');//;console.log(supprimerPanier);
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

                totalPanier.innerHTML = `0 &euro;`;
                });
            };
        };
        toutSupprimer();

///////////////////////recuperer VALEUR PAR LIGNE/////////////////

    let parentPourTableau = document.getElementById('tbody-panier').children;// console.log(parentPourTableau);
    // console.log(parentPourTableau);//ok

//PARENT
    for(i=0; i<parentPourTableau.length;i++){
        // console.log(parentPourTableau[i]);//LIGNE PRODUIT => TR

        //ici je calcule chaque ligne
        //ROW => PREND TOUS LES TD HORIZONTAUX
        let enfant = parentPourTableau[i].children;//collection des TD HORIZONTAUX


//QUANTITE
        let quantiteP = enfant[1];
        // console.log(quantiteP);

        let key = localStorage.key(i);
        let stockage = JSON.parse(localStorage.getItem(key));
        // console.log(stockage.length);

        quantiteP.innerHTML = stockage.length;
        let quantiteProduitParLigne = quantiteP.innerHTML;
                

//PRIX
        let coutP = enfant[2];//toute la balise TD PRIX
        let chiffreCoutP = parseInt(coutP.innerHTML);
        // console.log(chiffreCoutP);//number//
        
        
//SOUS TOTAL HORIZONTAL 
        let sousTotalP = enfant[3];
        // console.log(sousTotalP);//TD SOUS TOTAL 


        function multiplication(){
            return quantiteProduitParLigne * chiffreCoutP;
        };
        // console.log(multiplication());
        sousTotalP.innerHTML = multiplication() + ' &euro;';
        // console.log(sousTotalP.innerHTML = multiplication() + ' &euro;')
    };
    

    ////////////////////////////////////TOTAL => CALCUL VERTICAL////////////////////////////////////////////

        // let totalPanier = document.getElementById('prix-tout-total');
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
                    totalPanier.innerHTML = `${somme} &euro;`;
                    }else{
                        totalPanier.innerHTML = `0 &euro;`;
                };
            };
        };
        sommeDuPanier();
    };


    /////////////////////////formulaire a envoyer au serveur//////////////////////////////////
    let formulaire = document.getElementById('formulaire');// console.log(formulaire);
    let totalPanier = document.getElementById('prix-tout-total');// console.log(totalPanier);
    let sommePanier = parseInt(totalPanier.innerHTML);// console.log(sommePanier);

    
    // si panier vide => VALIDATION formulaire pas possible
    let envoieFormulaire = document.getElementById('envoie-formulaire');//console.log(envoieFormulaire.disabled);
    if(sommePanier > 1 ){
        envoieFormulaire.disabled = false;
    };


    /////////////////////////////////valider tous les champs du formulaire avant envoie au server///////////////////

    ////valider lastname
    formulaire.lastName.addEventListener('change', function(){
        validLastName(this);
    });

    const validLastName = function(inputLastName){
        let lastNameRegex = new RegExp('^[A-Z][A-Za-z\é\è\ê\-]{2,30}$');        

        let testLastName = lastNameRegex.test(inputLastName.value);
            let refus = inputLastName.nextElementSibling;
        // console.log(testLastName);
        if(testLastName){
        refus.innerHTML = "Nom de famille valide";
        }else{
        refus.innerHTML = "Nom de famille non valide";
        };
    };


    ////valider firstname
    formulaire.firstName.addEventListener('change', function(){
        validFirstName(this);
    });

    const validFirstName = function(inputFirstName){
        let firstNameRegex = new RegExp('^[A-Z][A-Za-z\é\è\ê\-]{2,30}$');        

        let testFirstName = firstNameRegex.test(inputFirstName.value);
            let refus = inputFirstName.nextElementSibling;
        // console.log(testLastName);
        if(testFirstName){
        refus.innerHTML = "Prénom valide";
        }else{
        refus.innerHTML = "Prénom non valide";
        };
    };

    ////valider city
    formulaire.city.addEventListener('change', function(){
        validCity(this);
    });

    const validCity = function(inputCity){
        let cityRegex = new RegExp('^[A-Z][A-Za-z\é\è\ê\-]{2,30}$');              

        let testCity = cityRegex.test(inputCity.value);
            let refus = inputCity.nextElementSibling;
        // console.log(testCity);
        if(testCity){
        refus.innerHTML = "Ville valide";
        }else{
        refus.innerHTML = "Ville non valide";
        };
    };


    ////valider addresse
    formulaire.address.addEventListener('change', function(){
        validAddress(this);
    });

    const validAddress = function(inputAddress){
        let addressRegex = new RegExp('^([0-9a-zA-Z,\. ]*)$');


        let testAddress = addressRegex.test(inputAddress.value);
            let refus = inputAddress.nextElementSibling;
        // console.log(testAddress)
        if(testAddress){
        refus.innerHTML = "Addresse valide";
        }else{
        refus.innerHTML = "Addresse non valide";
        };
    };

    ////valider code postal
    formulaire.codePostal.addEventListener('change', function(){
        validCodePostal(this);
    });

    const validCodePostal = function(inputCodePostal){
        let codePostalRegex = new RegExp('^(([1-95]{2}|2A|2B)[0-9]{3})$|^[971-974]$');


        let testCodePostal = codePostalRegex.test(inputCodePostal.value);
            let refus = inputCodePostal.nextElementSibling;
        // console.log(testAddress);
        if(testCodePostal){
        refus.innerHTML = "Code Postal valide";
        }else{
        refus.innerHTML = "Code Postal non valide";
        };
    };


        ////valider email//////
    formulaire.email.addEventListener('change', function(){
        validEmail(this);
    });

    const validEmail = function(inputEmail){
        let emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

        let testEmail = emailRegex.test(inputEmail.value);
            let refus = inputEmail.nextElementSibling;
        // console.log(testEmail);
        if(testEmail){
        refus.innerHTML = "Addresse Email valide";
        }else{
        refus.innerHTML = "Addresse Email valide";
        };
    };
    

///////////////////Pour envoie au serveur

            ////le localstorage équivaut au panier enregistré
            let product_id = [];

            for(i=0; i<localStorage.length; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
            };

            formulaire.addEventListener('submit', function(event){
            // console.log(event); 
            event.preventDefault();

            let contact = {
                lastName: document.getElementById('lastName').value,
                firstName: document.getElementById('firstName').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                email: document.getElementById('email').value
            };

            let data = {
                contact,
                products: product_id
            };
            // console.log(data);



            //method POST
            fetch("http://localhost:3000/api/furniture/order",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(function(res){ return res.json();
            })
            .then(function(data){ 
                console.log(JSON.stringify(data),
                //recup de l'id de commande / par un tableau
                console.log('Votre id est : ' + Object.values(data)[2]));
                console.log(totalPanier.innerHTML);//ok

                let confirmCommande = document.getElementById('confirmCommande');
                confirmCommande.innerHTML =
                `<div class="row">
                    <div class="col alert alert-success" role="alert">
                    Nous vous confirmons que votre commande n°${Object.values(data)[2]} d'un montant de ${totalPanier.innerHTML} a bien été validée.<br>Nous vous en remercions. A bientôt sur notre site.
                    </div>
                </div>`;

                // si panier vide => VALIDATION formulaire pas possible
                // let envoieFormulaire = document.getElementById('envoie-formulaire');//console.log(envoieFormulaire.disabled);
                envoieFormulaire.addEventListener('click', function(){
                envoieFormulaire.disabled = true;
            });


                // suppression localstorage après confirmation de la commande
                localStorage.clear();
            });
            });
