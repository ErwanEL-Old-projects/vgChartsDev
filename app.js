//data de la courbe a modifier avec la data du json
var data = {
    labels: ['date', 'date', 'date', 'date', 'date','date', 'date', 'date', 'date', 'date'],
    series: [
      [0 , 2, 4, 2, 5000]
    ]
  };

//courbe
const chart = document.querySelector('.ct-chart');

//titre du modal prototype, le titre doit etre défini par la data du json
let titleModal = document.querySelector('.modal-title'); 

//liste des fruizélégumes
const listVegetales = document.querySelector('#listVegetales')

//fruit ou légume
let vegetal = listVegetales.querySelectorAll('.col-2');

//div du dropdown menu des differents magasins
const mercadoList = document.querySelector('.dropdown');

//liste des magasins
const mercado = document.querySelector('.dropdown-menu');

/*
pour chaque click sur un légume je défini le titre du modal et j'affiche
la courbe correspondante (a modifier)
 */

vegetal.forEach(veg => {
    veg.addEventListener('click', () => {
        titleModal.textContent = veg.firstElementChild.firstElementChild.alt;
        //appeler la data ici
        new Chartist.Line('.ct-chart', data);
    })
});

//Permet de changer le titre du bouton mercado en fonction du mercado choisi
mercado.addEventListener("click", function(e) {
	if (e.target.className === 'dropdown-item') {
        mercadoList.firstElementChild.textContent = e.target.textContent;
    }
});