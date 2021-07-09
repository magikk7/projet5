main()
    async function main() {
        const produits = await getProduits();//await dans une fonction asynchrone

        for(produit of produits){
            displayProduit(produit)
        };
    };
//récuparer les produits
    async function getProduits(){
        try {
            const response = await fetch("http://localhost:3000/api/furniture");
            const produits = await response.json();
            return produits;
        } catch (error) {
            return alert("Erreur : " + error);
        };
    };

    
    function displayProduit(produit){
        
        let prix = `${produit.price}`;// console.log(prix);
        let resultat = prix / 100;// console.log(resultat);

        // CHIFFRES => mettre un séparateur des milliers
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
    

        //partie HTML injectée
        document.getElementById("produits").innerHTML += 
        `
        <div id="selection-produit" class="card">
            <div class="card-body">
                <h3 id="${produit.name}" class="card-title">${produit.name}</h3>
                <hr>
                <img src="${produit.imageUrl}" class="card-img-top heightImg-p1" alt="${produit.name}">
                <hr>
                <p class="prix"><span id="${produit.price}">${numStr(resultat,"")} &euro;</span></p>
                <a href="article.html?name=${produit._id}" id="${produit._id}" class="btn btn-gradient mt-4">Voir la description</a>
            </div
        </div>  
        `
    };