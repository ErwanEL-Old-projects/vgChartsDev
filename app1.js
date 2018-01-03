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

const listGroup = document.querySelector('.list-group');

//non fonctionnel
const pillsToggle = () => {
    this.classList.toggle('badge-danger');
    this.classList.toggle('badge-success');
}

//calcul la variation du prix a integrer dans les pills
const priceVariation = (e) => {
    let precios = e.precioskg || e.preciosUnd;
    let variation;
    if (precios[precios.length - 1] > precios[precios.length - 2]) {
        variation = `+${precios[precios.length - 1] - precios[precios.length - 2]}COP`
    } else {
        variation = `${precios[precios.length - 1] - precios[precios.length - 2]}COP`;
    }
    return variation;
}

//permet de creer les elements de la liste en fonction de la data
const list = () =>  {
    dataVegetales.forEach(data => {
        listGroup.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <img src=${data.icon} alt="${data.nombre}">
                                ${data.nombre}
                                <span class="badge badge-danger badge-pill">${priceVariation(data)}</span>
                                </li>
                                <div>
                                </div>`
    });
};
list();


const listElements = Array.from(listGroup.children);

//permet de changer la couleur de la pill (non fonctionnel)
listElements.forEach(e => {
    let spanPills = e.firstElementChild.nextElementSibling;
    if(parseInt(spanPills.textContent) < 0 ) {
        e.firstElementChild.nextElementSibling.classList.remove('badge-danger');              
        e.firstElementChild.nextElementSibling.classList.add('badge-success');
    } else {
        e.firstElementChild.nextElementSibling.classList.remove('badge-success');
        e.firstElementChild.nextElementSibling.classList.add('badge-danger');              
    }
})

//permet d'implementer la courbe (non fonctionnel)
listElements.forEach(e => e.addEventListener('click', () => {
    dataVegetales.forEach(veg => {
        if(e.firstElementChild.alt === veg.nombre) {
            e.nextElementSibling.classList.add('ct-chart')
            new Chartist.Line('.ct-chart', {
                fechas: veg.fechas,
                precios: [
                  veg.precioskg
                ]
              });
        }
       
    })
}));


//modèle chart

// new Chartist.Line('.ct-chart', {
//     fechas: [],
//     precios: [
//       []
//     ]
//   });


//modèle li initial

// let li = `<li class="list-group-item d-flex justify-content-between align-items-center">
//             <img src=${data.icon} alt="">
//             ${data.nombre}
//             <span class="badge badge-danger badge-pill"></span>
//             </li>`