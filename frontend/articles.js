//je recupere URL
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

// je recupere ID dans URL avec un constructeur
const my_url = new URLSearchParams(queryString_url_id);//je crée une instance
// console.log(my_url);

const page = my_url.get("name");//methode GET pour URL
//recup valeur


    // appel AJAX - requête server
    let elementMeuble = document.getElementById('element-meuble');
    let requete = new XMLHttpRequest();

    requete.onreadystatechange = function(){
        // console.log(this);
        //si la requete est terminée et la réponse est prête et que la requête est à 200 (ok) else erreur renvoie à 404
        if (this.readyState == 4 && this.status == 200) {
            // elementMeuble.innerHTML = JSON.stringify(this.response)
            // console.log(this); 
            let prix = `${this.response.price}`;
            // console.log(prix);

            let resultat = prix / 100;
            // console.log(resultat);

            // mettre un séparateur des milliers
            function numStr(a, b) {
                a = '' + a;
                b = b || ' ';
                var c = '',
                    d = 0;
                while (a.match(/^0[0-9]/)) {
                    a = a.substr(1);
                }
                for (var i = a.length-1; i >= 0; i--) {
                    c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
                    d++;
                }
                return c;
            };

            //partie HTML
    elementMeuble.innerHTML = 
    `
        <div id="${this.response._id}" class="card">
            <div class="card-body">
                <h3 id="${this.response.imageUrl}" class="card-title">${this.response.name}</h3>
                <img src="${this.response.imageUrl}" class="card-img-top heightImg" alt="${this.response.name}">
                    
                <div class="card-body--descriptif">
                    <div class="descriptif">
                        <p class="description">${this.response.description}</p>
                        <p class="prix">Prix : <span id="${this.response.price}">${numStr(resultat,"")} &euro;</span></p>
                    </div>
                    <hr>
                    <form class="choix-dimension">
                    <div>
                        <label for="meubles" class="label-article">Choisir une couleur de vernis :</label>
                        <select class="form-select" name="meubles" id="meubles"></select>
                    </div>
                
                    <button class="btn btn-primary btn-validation" id="bouton_validation" type="button">Ajouter au panier</button>                    </a>
                </form>
                </div>
            </div
        </div>  
        `
    ;

        // boucle do while - pour incrémenter les options de couleur de vernis
        let i = 0;

        do {
            // console.log(varnish[i]);
            let options = document.createElement('option');
            options.classList.add('class_option');
            options.innerHTML = `<option value="${this.response.varnish[i]}">${this.response.varnish[i]}</option>`;
            document.getElementById('meubles').appendChild(options);
            i += 1;
            } 
        while (i < this.response.varnish.length);


        //Incrémenter PANIER dans nav + en local storage / Aller au PANIER
        let idBouton = document.getElementById('bouton_validation');
    
        idBouton.addEventListener('click', (event) => {
            event.preventDefault();

            //récup les données pour le local storage avec cette variable
            const choixMeuble = {
                _id: `${this.response._id}`,
                name: `${this.response.name}`,
                price: `${this.response.price}`,
                imageUrl: `${this.response.imageUrl}`
            };
            // console.log(choixMeuble);


            let infoLocalStorage = JSON.parse(localStorage.getItem(choixMeuble._id));//valeur "dynamique" => représentée par ID

            const localstorage = function(){
                // ajoutPanier();

                infoLocalStorage.push(choixMeuble);
                localStorage.setItem(choixMeuble._id, JSON.stringify(infoLocalStorage));//valeur "dynamique" => représentée par ID
                
                alert("Un produit est ajouté au panier");//violation...
            };



            if(infoLocalStorage){
            localstorage();
                
            //ajoute les caracteristiques du meuble dans le local storage
            } else {
            infoLocalStorage = [];
            localstorage();
            };

            // compteur pour avoir la quantité cliqué dans le PANIER
            // function ajoutPanier(){
            //     let idPanier = document.getElementById('panier');
            //     let compteur = localStorage.getItem('ajoutPanier');

            //     compteur++;

            //     localStorage.setItem('ajoutPanier', compteur);
            //     idPanier.innerHTML = `${compteur}`;
            // };
        });        
            
        } else if (this.readyState == 4 && this.status == 404) {
            alert('Erreur 404 : Une erreur s\'est produite. La page est introuvable. ');
        };
    };

//récupération avec lien URL API du produit attaché à son ID
//argument GET pour récup
requete.open('GET', 'http://localhost:3000/api/furniture/' + page, true);
requete.responseType = "json";
//envoie de la requête créée
requete.send(null);