let dataVegetales = [
    {
        "nombre": "Zanahoria",
        "icon": "icons/carrot.svg",
        "fechas": ["161117","291117","081217","131217","201217"],
        "precioskg": ["1290", "1580", "1580", "1780", "1190"]  
    },
    {
        "nombre": "Fresa",
        "icon": "icons/strawberry.svg",
        "fechas": ["161117"],
        "precioskg": ["8760"]  
    },
    {
        "nombre": "PaltaHass",
        "icon": "icons/avocado.svg",
        "fechas": ["221217"],
        "precioskg": ["4180"]  
    },
    {
        "nombre": "Kiwi",
        "icon": "icons/kiwi.svg",
        "fechas": ["281117"],
        "precioskg": ["13180"]  
    },
    {
        "nombre": "Banano",
        "icon": "icons/banana.svg",
        "fechas": ["281117","081217","131217","201217","271217"],
        "precioskg": ["1980","1780", "1780", "1780", "1780"]
    },
    {
        "nombre": "Durasno Venezolano",
        "icon": "icons/peach.svg",
        "fechas": ["291117"],
        "precioskg": ["800"]  
    },
    {
        "nombre": "Brocoli",
        "icon": "icons/broccoli.svg",
        "fechas": ["291117","081217","131217","201217"],
        "precioskg": ["2980","2980","2980","2980"]  
    },
    {
        "nombre": "Piña Oro Miel",
        "icon": "icons/pineapple.svg",
        "fechas": ["291117","081217","271217"],
        "precioskg": ["1980","1780","2180"]  
    },
    {
        "nombre": "Platano Maduro",
        "icon": "icons/banana.svg",
        "fechas": ["011217"],
        "precioskg": ["1980"]  
    },
    {
        "nombre": "Platano Verde",
        "icon": "icons/banana.svg",
        "fechas": ["011217","201217"],
        "precioskg": ["1780","1450"]  
    },
    {
        "nombre": "Pimenton",
        "icon": "icons/pepper.svg",
        "fechas": ["081217","131217","201217"],
        "precioskg": ["4680","4680","4800"]  
    },
    {
        "nombre": "Cebolla",
        "icon": "icons/onion-1.svg",
        "fechas": ["081217","201217"],
        "precioskg": ["3200","3190"]  
    },
    {
        "nombre": "Repollo",
        "icon": "icons/cabbage.svg",
        "fechas": ["081217"],
        "precioskg": ["1180"]  
    },
    {
        "nombre": "Lechuga Batavia",
        "icon": "icons/salad-1.svg",
        "fechas": ["081217","131217","271217"],
        "preciosUnd": ["1780","1750","1890"]  
    },
    {
        "nombre": "Espinaca",
        "icon": "icons/spinach.svg",
        "fechas": ["131217","271217"],
        "precioskg": ["5780","5780"]  
    },
    {
        "nombre": "Papa Nevada",
        "icon": "icons/potatoes-2.svg",
        "fechas": ["131217"],
        "precioskg": ["2980"]  
    },
    {
        "nombre": "Papa Capira",
        "icon": "icons/potatoes-2.svg",
        "fechas": ["201217"],
        "precioskg": ["1680"]  
    },
    {
        "nombre": "Pepino",
        "icon": "icons/cucumber.svg",
        "fechas": ["201217"],
        "precioskg": ["1580"]  
    }
];

//data de la courbe a modifier avec la data du json
var data = {
    labels: [],
    series: [
      []
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

//span du dernier prix connu
const ultimoPrecioConocido = document.getElementById('ultimoPrecio');

//span du prix moyen
const precioMedio = document.getElementById('precioMedio');

//fonction permettant le calcul du prix moyen
function calculPrecioMedio (arr) {
    let precioParse = arr.map(precio => parseInt(precio));
    let precioMedio = precioParse.reduce((total,precio) => total + precio) / precioParse.length;
    return precioMedio.toFixed(0);
}

/*
Permet de charger dynamiquement les icons
*/

for(let i = 0 ; i < vegetal.length; i+=1) {
    for (let j = 0; j < dataVegetales.length; j+=1) {
       if (i === j) {
           vegetal[i].firstElementChild.firstElementChild.src = dataVegetales[j].icon; //assignation du svg de l'element dans le html
           vegetal[i].firstElementChild.firstElementChild.alt = dataVegetales[j].nombre;//assignation du nom de l'element au html
       }
    }   
}

/*
pour chaque click sur un légume, défini le titre du modal et affiche
la courbe correspondante (a modifier)
 */

vegetal.forEach(veg => { //pour chaque click sur un element icon
    veg.addEventListener('click', () => {
        let alt = veg.firstElementChild.firstElementChild.alt; //selection du "alt" dont le contenu est le nom de l'element
        dataVegetales.forEach(veg => { //pour chaques element de la data
            if (alt === veg.nombre) { //si le "alt" de l'element === au nom de la data
                titleModal.textContent = veg.nombre; //Assignation du titre du modal avec le nom de la data
                data.labels = veg.fechas; // assignation des elements de l'abscisse
                if ('preciosUnd' in veg) { //si la clé 'preciosUnd' est contenu dans la data
                    data.series[0] = veg.preciosUnd; //assignation des prix par unité à l'ordonnée
                    ultimoPrecioConocido.textContent = `${veg.preciosUnd[veg.preciosUnd.length - 1]} Cop`; //assignation du dernier prix à l'unité
                    precioMedio.textContent = `${calculPrecioMedio(veg.preciosUnd)} Cop`; //assignation du prix moyen
                } else { //autrement la clé devrait etre precioskg soit le prix au kilo
                    data.series[0] = veg.precioskg; //assignation ordonnée
                    ultimoPrecioConocido.textContent = `${veg.precioskg[veg.precioskg.length - 1]} Cop`; //assignation dernier prix au kilo
                    precioMedio.textContent = `${calculPrecioMedio(veg.precioskg)} Cop`; //assignation du prix moyen
                }
            }
        });
        new Chartist.Line('.ct-chart', data); //création de la courbe en fonction de la classe et de la data
    })
});

//Permet de changer le titre du bouton mercado en fonction du mercado choisi

mercado.addEventListener("click", function(e) {
	if (e.target.className === 'dropdown-item') {
        mercadoList.firstElementChild.textContent = e.target.textContent; //textContent du bouton === textContent de l'element clické
    }
});