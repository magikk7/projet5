//je recupere URL
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

// je recupere ID dans URL avec un constructeur
let my_url = new URLSearchParams(queryString_url_id);//je crée une instance
console.log(my_url);

const page = my_url.get("name");//methode GET pour URL
console.log(page);//recup valeur
// console.log(my_url.has("name"));//true

    // appel AJAX
    //requête server
    let elementMeuble = document.getElementById('element-meuble');
    let requete = new XMLHttpRequest();

    requete.onreadystatechange = function () {
        // console.log(this);
        //si la requete est terminée et la réponse est prête et que la requête est à 200 alors (ok)
        //else si soucis avec la requete afficher l'erreur statut 404
        if (this.readyState == 4 && this.status == 200) {
            elementMeuble.innerHTML = JSON.stringify(this.response)
            // console.log(this.response.imageUrl);

            // const imager = this.response.imageUrl;
            document.getElementById('element-meuble').innerHTML = 
            `
            <div id="selection-produit">
            <div class="card-body card-center">
                <div class="image-dimension">
                    <img src="${this.response.imageUrl}" class="card-img-top heightImg" alt="${this.response.name}">
                    <p class="description">${this.response.description}</p>
                </div>

                <div class="caracteristique-dimension">
                        <p id="${this.response.name}" class="card-title2">${this.response.name} : <span id="price">${this.response.price} &euro;</span></p>
                        <hr>
                        
                        <div class="choix-dimension">
                            <select class="form-select" aria-label="Default select example" name="meubles" id="meubles">
                                <option selected>Choisir une couleur de vernis : </option>
                                    <option value="${this.response.varnish}">${this.response.varnish}</option>
                            </select>
                            <div class="d-grid gap-2">
                        <button class="btn btn-primary" id="bouton_click" onclick="bouton_click()" type="button">Ajout au panier</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
            
            `;
        } else if (this.readyState == 4 && this.status == 404) {
            alert('Erreur 404 : Une erreur s\'est produite. La page est introuvable. ');
        };
    };

//récupération avec lien URL API du produit attaché à son ID
//argument GET pour récup
requete.open('GET', 'http://localhost:3000/api/furniture/' + page, true);
requete.responseType = "json";
//envoie de la requête créée
requete.send();



////////////////////
// const structure = `<h3>lien => ${page}</h3>`;
// const elementMeuble = document.getElementById("element-meuble");
// elementMeuble.innerHTML = structure;