///////////////////////tableau de mes images/cartes/////////////////////
let imagesFruits = [
"https://static.vecteezy.com/ti/vecteur-libre/t2/3475515-dessin-anime-peche-fruit-vectoriel.jpg",
"https://static.vecteezy.com/ti/vecteur-libre/t2/4747278-vecteur-dessin-anime-frais-prune-fruit-vectoriel.jpg", 
"https://static.vecteezy.com/ti/vecteur-libre/t2/5403255-apple-fruit-cartoon-icon-illustration-flat-cartoon-style-food-fruit-icon-concept-isolated-icon-vectoriel.jpg",
"https://img.freepik.com/vecteurs-premium/illustration-vectorielle-banane-dessin-anime-icone-plate-fruit-banane-fraiche-contour_385450-1124.jpg?w=2000",
"https://static.vecteezy.com/ti/vecteur-libre/p1/2203893-kiwi-fruit-entier-et-tranche-vectoriel.jpg",
"https://static.vecteezy.com/ti/vecteur-libre/t2/3475515-dessin-anime-peche-fruit-vectoriel.jpg",
"https://static.vecteezy.com/ti/vecteur-libre/t2/4747278-vecteur-dessin-anime-frais-prune-fruit-vectoriel.jpg", 
"https://static.vecteezy.com/ti/vecteur-libre/t2/5403255-apple-fruit-cartoon-icon-illustration-flat-cartoon-style-food-fruit-icon-concept-isolated-icon-vectoriel.jpg",
"https://img.freepik.com/vecteurs-premium/illustration-vectorielle-banane-dessin-anime-icone-plate-fruit-banane-fraiche-contour_385450-1124.jpg?w=2000",
"https://static.vecteezy.com/ti/vecteur-libre/p1/2203893-kiwi-fruit-entier-et-tranche-vectoriel.jpg",
"https://img.freepik.com/vecteurs-premium/avocat-kawaii-vert-drole-mignon-sourire-isole-fond-blanc-icone-illustration-kawaii-personnage-dessin-anime-plat-concept-avocat-caractere-fruit-illustration-vectorielle_342166-291.jpg?w=2000",
"https://img.freepik.com/vecteurs-premium/avocat-kawaii-vert-drole-mignon-sourire-isole-fond-blanc-icone-illustration-kawaii-personnage-dessin-anime-plat-concept-avocat-caractere-fruit-illustration-vectorielle_342166-291.jpg?w=2000"
];

//////////////////////fonction qui récupère le nom des img et qui les compare//////////////////
let tableau = [];
let idArray =[];

function retrieveAndCompare(id){
  tableau.push(id.children[0].src);
  idArray.push(id);
  if(tableau.length === 2){
    if(tableau[0] === tableau[1]){
      tableau.length = 0;
      idArray.length = 0;
    }else{
      tableau.length = 0;
      setTimeout(()=>idArray[0].classList.remove('rotate'),500);
      setTimeout(()=>idArray[1].classList.remove('rotate'),500);
      setTimeout(()=>idArray.length = 0,501);
    }
  }
};
///////////////////////////// fonction pour retourner mes cartes au clic////////////////

function afficher(i){  
  let id = document.querySelector('#' + i);
    id.classList.add('rotate');
  retrieveAndCompare(id);
};
//////////////////////////////fonction qui place les cartes aléatoirement/////////////////////

const copieImagesFruits = Array.from(imagesFruits);

let max = copieImagesFruits.length;
let newArray = [];

function melange(){
  while(copieImagesFruits.length > 0){
    let e = Math.floor(Math.random() * (max));
    if(e <= copieImagesFruits.length){
      newArray.push(copieImagesFruits[e]);
      copieImagesFruits.splice(e,1);
      max = copieImagesFruits.length
    } 
  };
};
melange();

document.querySelector('.front1').src = newArray[0];
document.querySelector('.front2').src = newArray[1];
document.querySelector('.front3').src = newArray[2];
document.querySelector('.front4').src = newArray[3];
document.querySelector('.front5').src = newArray[4];
document.querySelector('.front6').src = newArray[5];
document.querySelector('.front7').src = newArray[6];
document.querySelector('.front8').src = newArray[7];
document.querySelector('.front9').src = newArray[8];
document.querySelector('.front10').src = newArray[9];
document.querySelector('.front11').src = newArray[10];
document.querySelector('.front12').src = newArray[11];

///////////////////////////////fonction qui compte le nombre de coup et les affiche dans le html/////////////////////////
const grid = document.querySelector('.grid');
const nombreCoup = document.querySelector('#nombre-coup');
let clic = 0;
grid.addEventListener('click', () => {
  clic = (clic + 0.5);
  if(Number.isInteger(clic)){
    nombreCoup.innerHTML = clic;
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
