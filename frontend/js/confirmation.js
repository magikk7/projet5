//id de commande dans le localstorage
const idCommande = sessionStorage.getItem('responseId');
//total commandé dans le localStorage
const panierCommande = sessionStorage.getItem('totalCommande');


//AFFICHER LES INFORMATIONS SUR LA PAGE
let numeroCommande = document.getElementById('numero-commande');// console.log(numeroCommande);
let montantCommande = document.getElementById('montant-commande');// console.log(montantCommande);

//informations en dynamique dans les balises HTML
numeroCommande.innerHTML = idCommande;
montantCommande.innerHTML = panierCommande;  
