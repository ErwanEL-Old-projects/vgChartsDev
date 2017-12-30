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
Permet de charger dynamiquement les icones
*/

for(let i = 0 ; i < vegetal.length; i+=1) {
    for (let j = 0; j < dataVegetales.length; j+=1) {
       if (i === j) {
           vegetal[i].firstElementChild.firstElementChild.src = dataVegetales[j].icon;
           vegetal[i].firstElementChild.firstElementChild.alt = dataVegetales[j].nombre;
       }
    }   
}

/*
pour chaque click sur un légume, défini le titre du modal et affiche
la courbe correspondante (a modifier)
 */
vegetal.forEach(veg => {
    veg.addEventListener('click', () => {
        let alt = veg.firstElementChild.firstElementChild.alt;
        dataVegetales.forEach(veg => {
            if (alt === veg.nombre) {
                titleModal.textContent = veg.nombre;
                data.labels = veg.fechas;
                data.series[0] = veg.precioskg;                
            }
        })
        //appeler la data ici
        new Chartist.Line('.ct-chart', data);
        console.log(data);
    })
});

//Permet de changer le titre du bouton mercado en fonction du mercado choisi

mercado.addEventListener("click", function(e) {
	if (e.target.className === 'dropdown-item') {
        mercadoList.firstElementChild.textContent = e.target.textContent;
    }
});