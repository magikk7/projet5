//création tableau qui représente le panier
let infoQuantiteTableau = parseInt(
  document.getElementById("info-quantite-tableau")
); //pour panier vide
let tbodyPanier = document.getElementById("tbody-panier");

if (sessionStorage == null || sessionStorage == 0) {
  infoQuantiteTableau.innerHTML = "Votre panier est vide";
} else {
  for (i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i); //console.log(key);
    var selectionMeublePanier = JSON.parse(sessionStorage.getItem(key)); //console.log(selectionMeublePanier);

    //partie HTML - visible sur le site avec la boucle for - informations et quantités repris du sessionstorage en cours
    tbodyPanier.innerHTML += `
        <tr class="ligne-produit" id="${key}">
            <td class="donnees-tableau center">${
              selectionMeublePanier[0].name
            }</td>
            <td class="donnees-tableau quantite-produit-select center"></td>
            <td class="donnees-tableau prix-unique-produit right">${
              selectionMeublePanier[0].price / 100
            } &euro;</td>
            
            <td class="donnees-tableau sous-total-produit right"></td>
            <td><button id="bouton" class="donnees-tableau btn-supprimer">Supprimer</button><td>
        </tr>
        `;
  }

  ////////////////////////////////////SUPPRIMER LIGNE DU PANIER////////////////////////////////////////////
  // ${numStr(resultat
  let btnSupprimer = document.getElementsByClassName("btn-supprimer"); // console.log(btnSupprimer);
  let totalPanier = document.getElementById("prix-tout-total"); // console.log(totalPanier);

  function supprimer() {
    if (sessionStorage.length > 0) {
      for (i = 0; i < btnSupprimer.length; i++) {
        btnSupprimer[i].addEventListener("click", function (event) {
          // console.log(event);
          event.preventDefault();

          //la row des produits //5 rows maxi == 5 produits
          event.target.parentElement.parentElement.remove();

          //suppression dans le sessionstorage
          sessionStorage.removeItem(key);

          alert("produit(s) supprimé(s)");
          //rechargement page
          window.location.href = "panier.html";
        });
      }
    } else {
      alert("votre panier est vide");
      totalPanier.innerHTML = `0 &euro;`;
    }
  }
  supprimer();

  ////////////////////// tout supprimer/////////////////
  let supprimerPanier = document.getElementById("supprimer-panier"); //console.log(supprimerPanier);
  let leParentPourTableau = document.getElementById("tbody-panier"); // console.log(leParentPourTableau);//ok
  // let totalPanier = document.getElementById('prix-tout-total');// console.log(totalPanier);

  function toutSupprimer() {
    if (sessionStorage.length > 0) {
      supprimerPanier.addEventListener("click", function (event) {
        //console.log(event);
        event.preventDefault;

        //je selectionne tout le tableau à supprimer
        leParentPourTableau.remove();

        //suppression du sesionstorage
        sessionStorage.clear();

        totalPanier.innerHTML = `0 &euro;`;

          //rechargement page
        location.reload();
      });
    }
  }
  toutSupprimer();

  ///////////////////////recuperer VALEUR PAR LIGNE/////////////////

  let parentPourTableau = document.getElementById("tbody-panier").children; // console.log(parentPourTableau);
  // console.log(parentPourTableau);//ok

  //PARENT
  for (i = 0; i < parentPourTableau.length; i++) {
    // console.log(parentPourTableau[i]);//LIGNE PRODUIT => TR

    //ici je calcule chaque ligne
    //ROW => PREND TOUS LES TD HORIZONTAUX
    let enfant = parentPourTableau[i].children; //collection des TD HORIZONTAUX

    //QUANTITE
    let quantiteP = enfant[1];
    // console.log(quantiteP);

    let key = sessionStorage.key(i);
    let stockage = JSON.parse(sessionStorage.getItem(key));
    // console.log(stockage.length);

    quantiteP.innerHTML = stockage.length;
    let quantiteProduitParLigne = quantiteP.innerHTML;

    //PRIX
    let coutP = enfant[2]; //toute la balise TD PRIX
    let chiffreCoutP = parseInt(coutP.innerHTML);
    // console.log(chiffreCoutP);//number//

    //SOUS TOTAL HORIZONTAL
    let sousTotalP = enfant[3];
    // console.log(sousTotalP);//TD SOUS TOTAL

    function multiplication() {
      return quantiteProduitParLigne * chiffreCoutP;
    }
    // console.log(multiplication());
    sousTotalP.innerHTML = multiplication() + " &euro;";
    // console.log(sousTotalP.innerHTML = multiplication() + ' &euro;')
  }

  ////////////////////////////////////TOTAL => CALCUL VERTICAL////////////////////////////////////////////

  // let totalPanier = document.getElementById('prix-tout-total');
  let ensembleSousTotal = document.getElementsByClassName("sous-total-produit");
  // console.log(ensembleSousTotal);//string

  function sommeDuPanier() {
    let array = [];
    let somme = 0;

    for (i = 0; i < ensembleSousTotal.length; i++) {
      if (ensembleSousTotal.length >= 1) {
        let ensemble = parseInt(ensembleSousTotal[i].innerHTML);

        //creation tableau pour addition des sous totaux
        array.push(ensemble);

        //addition
        const reducer = (acc, cur) => acc + cur;

        somme = array.reduce(reducer);
        // console.log(somme);

        //TOTAL du panier
        totalPanier.innerHTML = `${somme} &euro;`;
      } else {
        totalPanier.innerHTML = `0 &euro;`;
      }
    }
  }
  sommeDuPanier();
  directionFormulaire();
}

////////////////////RAJOUTER DANS FICHIER DES FONCTIONS
//function => axer le client vers le formulaire
function directionFormulaire() {
  if (sessionStorage.length >= 1) {
    // console.log(sessionStorage)
    let divAllerAuFormulaire = document.getElementById("direction-form");

    let newButton = document.createElement("button");
    newButton.setAttribute('class', 'btn');
    newButton.setAttribute('class', 'bouton-dim');
    newButton.classList.add("allerFormulaire");
    newButton.innerText = "Valider le panier en complétant le formulaire";
    newButton.style.visibility = "visible";

    divAllerAuFormulaire.appendChild(newButton);

    let supprimerPanier = document.getElementById("supprimer-panier");
    supprimerPanier.style.visibility="visible";

    let partieFormulaire = document.getElementById("partie-formulaire");
    partieFormulaire.style.visibility="visible"; 
  }else{
    // aller page accueil
    let divAllerAuFormulaire = document.getElementById("direction-form");

    let accueilButton = document.createElement("button");
    accueilButton.setAttribute('class', 'btn');
    accueilButton.setAttribute('class', 'bouton-dim');
    accueilButton.classList.add("allerPageAccueil");
    accueilButton.style.visibility = "visible";

    //ahref
    let lienAccueil = document.createElement("a");
    lienAccueil.setAttribute('href', 'index.html');
    lienAccueil.innerHTML = "&lsaquo; Retour Accueil";

    accueilButton.appendChild(lienAccueil);
    divAllerAuFormulaire.appendChild(accueilButton);    
  };
};


/////////////////////////PARTIE FORMULAIRE a envoyer au serveur//////////////////////////////////
let formulaire = document.getElementById("formulaire"); // console.log(formulaire);
let totalPanier = document.getElementById("prix-tout-total"); // console.log(totalPanier);
let sommePanier = parseInt(totalPanier.innerHTML); // console.log(sommePanier);
let inputLastName = document.getElementById("lastName");
let inputFirstName = document.getElementById("firstName");
let inputCodePostal = document.getElementById("codePostal");
let inputAdress = document.getElementById("address");
let inputCity = document.getElementById("city");
let inputEmail = document.getElementById("email");


// si panier vide => VALIDATION formulaire pas possible
let envoieFormulaire = document.getElementById("envoie-formulaire"); //console.log(envoieFormulaire.disabled);
if (sommePanier > 1) {
  envoieFormulaire.disabled = false;
}

/////////////////////////////////valider tous les champs du formulaire avant envoie au server///////////////////

////valider lastname
formulaire.lastName.addEventListener("change", function () {
  validLastName(this);
});

const validLastName = function (inputLastName) {
let lastNameRegex = new RegExp("^[a-zA-Z][A-Za-zéèê-]{1,30}$");

  let testLastName = lastNameRegex.test(inputLastName.value);
  let refus = inputLastName.nextElementSibling;
  // console.log(testLastName);
  
  if (testLastName || typeof testLastName == false || parseInt(testLastName) == NaN) {
    refus.innerHTML = "Nom de famille valide";
    // console.log(parseInt(testLastName));
  } else {
    refus.innerHTML =
      "Nom de famille non valide. Minuscules et majuscules acceptées. N'insérez pas de chiffres, ni de caractères spéciaux.";
    //effacer le champ si saisie de chiffre
    //console.log(inputLastName.value);
      inputLastName.value = "";
  };
};

////valider firstname
formulaire.firstName.addEventListener("change", function () {
  validFirstName(this);
});

const validFirstName = function (inputFirstName) {
  let firstNameRegex = new RegExp("^[a-zA-Z][A-Za-zéèê-]{1,30}$");

  let testFirstName = firstNameRegex.test(inputFirstName.value);
  let refus = inputFirstName.nextElementSibling;
  // console.log(testLastName);
  if (testFirstName || typeof testFirstName == false || parseInt(testFirstName) == NaN) {
    refus.innerHTML = "Prénom valide";
  } else {
    refus.innerHTML =
      "Prénom non valide. Minuscules et majuscules acceptées. N'insérez pas de chiffres, ni de caractères spéciaux.";
    //effacer le champ si saisie de chiffre
    //console.log(inputFirstName.value);
    inputFirstName.value = "";
  };
};

////valider city
formulaire.city.addEventListener("change", function () {
  validCity(this);
});

const validCity = function (inputCity) {
  let cityRegex = new RegExp("^[a-zA-Z][A-Za-zéèê-]{1,30}$");

  let testCity = cityRegex.test(inputCity.value);
  let refus = inputCity.nextElementSibling;
  // console.log(testCity);
  if (testCity || typeof testCity == false || parseInt(testCity) == NaN) {
  // if (testCity || typeof testCity == false) {
    refus.innerHTML = "Ville valide";
  } else {
    refus.innerHTML =
      "Ville non valide. Minuscules et majuscules acceptées. N'insérez pas de chiffres, ni de caractères spéciaux.";
       //effacer le champ si saisie de chiffre
    inputCity.value = "";
  };
};

////valider addresse
formulaire.address.addEventListener("change", function () {
  validAddress(this);
});

const validAddress = function (inputAddress) {
  let addressRegex = new RegExp("^([0-9a-zA-Z,. ]*){1,30}$");

  let testAddress = addressRegex.test(inputAddress.value);
  let refus = inputAddress.nextElementSibling;
  // console.log(testAddress)
  if (testAddress) {
    refus.innerHTML = "Addresse valide";
  } else {
    refus.innerHTML = "Addresse non valide. Minuscules et majuscules acceptées.";
    //effacer le champ si mauvaise saisie addresse
    inputAddress.value = "";
  };
};

////valider code postal
formulaire.codePostal.addEventListener("change", function () {
  validCodePostal(this);
});

const validCodePostal = function (inputCodePostal) {
  let codePostalRegex = new RegExp("^(([1-95]{2}|2A|2B)[0-9]{3})$|^[971-974]$");

  let testCodePostal = codePostalRegex.test(inputCodePostal.value);
  let refus = inputCodePostal.nextElementSibling;
  // console.log(testAddress);
  if (testCodePostal) {
    refus.innerHTML = "Code Postal valide";
  } else {
    refus.innerHTML = "Code-postal non valide. Veuillez mettre un code-postal à 5 chiffres.";
    //effacer le champ si saisie de lettres
    inputCodePostal.value = "";
  };
};

////valider email//////
formulaire.email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegex = new RegExp(
    "^([a-zA-Z0-9.-]+)@([da-z\.-]+)\.([a-z\.]{2,6})$"
  );


  let testEmail = emailRegex.test(inputEmail.value);
  let refus = inputEmail.nextElementSibling;
  // console.log(testEmail);
  if (testEmail) {
    refus.innerHTML = "Addresse Email valide";
  } else {
    refus.innerHTML = "Addresse Email non valide. 'Ex: martin.dupont@gmail.fr'";
    //effacer le champ si mauvaise saisie
    inputEmail.value = "";
  };
};

///////////////////Pour envoie au serveur

////le sessionstorage équivaut au panier enregistré
let product_id = [];

for (i = 0; i < sessionStorage.length; i++) {
  var key = sessionStorage.key(i);
  var value = sessionStorage[key];
}

formulaire.addEventListener("submit", function (event) {
  // console.log(event);
  event.preventDefault();

  let contact = {
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };

  let data = {
    contact,
    products: product_id,
  };
  // console.log(data);

  //method POST
  fetch("http://localhost:3000/api/furniture/order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      
      //id de commande dans le localstorage
      localStorage.setItem('responseId', JSON.stringify(Object.values(data)[2]));
      //total commandé dans le localStorage
      localStorage.setItem('totalCommande', JSON.stringify(totalPanier.innerHTML));

      console.log(
        JSON.stringify(data),
        //recup de l'id de commande / par un tableau
        console.log("Votre id est : " + Object.values(data)[2])
      );
      console.log(totalPanier.innerHTML); //ok


      let confirmCommande = document.getElementById("confirmCommande");
      confirmCommande.innerHTML = `<div class="row">
                    <div class="col alert alert-success" role="alert">
                    Nous vous confirmons que votre commande n°${
                      Object.values(data)[2]
                    } d'un montant de ${
        totalPanier.innerHTML
      } a bien été validée.<br>Nous vous en remercions. A bientôt sur notre site.
                    </div>
                </div>`;

      document.location.href = "confirmation.html";

      // // si panier vide => VALIDATION formulaire pas possible
      // // let envoieFormulaire = document.getElementById('envoie-formulaire');//console.log(envoieFormulaire.disabled);
      // envoieFormulaire.addEventListener("click", function () {
      //   envoieFormulaire.disabled = true;

      //   //rechargement page
      //   window.location.href = "panier.html";

      //   //suppression sessionstorage après confirmation de la commande
      //   sessionStorage.clear();
      // });
    });
});
