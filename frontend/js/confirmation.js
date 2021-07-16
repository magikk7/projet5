//id de commande dans le localstorage
const idCommande = localStorage.getItem('responseId');
//total commandé dans le localStorage
const panierCommande = localStorage.getItem('totalCommande');


//AFFICHER LES INFORMATIONS SUR LA PAGE
// let confirmationCommande = document.getElementById('confirmation-commande'); console.log(confirmationCommande);
let numeroCommande = document.getElementById('numero-commande');
// console.log(numeroCommande);

let montantCommande = document.getElementById('montant-commande');
// console.log(montantCommande);

//informations en dynamique dans balises HTML
numeroCommande.innerHTML = idCommande;
montantCommande.innerHTML = panierCommande;  