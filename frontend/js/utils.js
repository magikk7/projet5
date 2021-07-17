//acceuil.js et articles.js
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

//fichier panier.js        
//fonction supprimer dans le tableau panier 
    let supprimerPanier = document.getElementById("supprimer-panier"); //console.log(supprimerPanier);
    let leParentPourTableau = document.getElementById("tbody-panier"); // console.log(leParentPourTableau);//ok

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
        };
    };        