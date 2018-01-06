const dataVegetales = [
    {
        "nombre": "Banano",
        "icon": "icons/banana.svg",
        "fechas": ["281117","081217","131217","201217","271217"],
        "precioskg": ["1980","1780", "1780", "1780", "1780"]
    },
    {
        "nombre": "Brocoli",
        "icon": "icons/broccoli.svg",
        "fechas": ["291117","081217","131217","201217"],
        "precioskg": ["2980","2980","2980","2980"]  
    },
    {
        "nombre": "Cebolla",
        "icon": "icons/onion-1.svg",
        "fechas": ["081217","201217"],
        "precioskg": ["3200","3190"]  
    },
    {
        "nombre": "Durasno Venezolano",
        "icon": "icons/peach.svg",
        "fechas": ["291117"],
        "precioskg": ["800"]
    },
    {
        "nombre": "Espinaca",
        "icon": "icons/spinach.svg",
        "fechas": ["131217","271217"],
        "precioskg": ["5780","5780"]  
    },  
    {
        "nombre": "Fresa",
        "icon": "icons/strawberry.svg",
        "fechas": ["161117"],
        "precioskg": ["8760"]  
    },
    {
        "nombre": "Kiwi",
        "icon": "icons/kiwi.svg",
        "fechas": ["281117"],
        "precioskg": ["13180"]  
    },
    {
        "nombre": "Lechuga Batavia",
        "icon": "icons/salad-1.svg",
        "fechas": ["081217","131217","271217"],
        "preciosUnd": ["1780","1750","1890"]  
    },    
    {
        "nombre": "Palta Hass",
        "icon": "icons/avocado.svg",
        "fechas": ["221217"],
        "precioskg": ["4180"]  
    },
    {
        "nombre": "Papa Capira",
        "icon": "icons/potatoes-2.svg",
        "fechas": ["201217"],
        "precioskg": ["1680"]  
    },
    {
        "nombre": "Papa Nevada",
        "icon": "icons/potatoes-2.svg",
        "fechas": ["131217"],
        "precioskg": ["2980"]  
    },
    {
        "nombre": "Pepino",
        "icon": "icons/cucumber.svg",
        "fechas": ["201217"],
        "precioskg": ["1580"]  
    },
    {
        "nombre": "Pimenton",
        "icon": "icons/pepper.svg",
        "fechas": ["081217","131217","201217"],
        "precioskg": ["4680","4680","4800"]  
    },
    {
        "nombre": "Piña Oro Miel",
        "icon": "icons/pineapple.svg",
        "fechas": ["291117","081217","271217"],
        "precioskg": ["1980","1780","2180"]  
    },
    {
        "nombre": "Platano Maduro",
        "icon": "icons/platano.svg",
        "fechas": ["011217"],
        "precioskg": ["1980"]  
    },
    {
        "nombre": "Platano Verde",
        "icon": "icons/platano-verde.svg",
        "fechas": ["011217","201217"],
        "precioskg": ["1780","1450"]  
    }, 
    {
        "nombre": "Repollo",
        "icon": "icons/cabbage.svg",
        "fechas": ["081217"],
        "precioskg": ["1180"]  
    },
    {
        "nombre": "Zanahoria",
        "icon": "icons/carrot.svg",
        "fechas": ["161117","291117","081217","131217","201217"],
        "precioskg": ["1290", "1580", "1580", "1780", "1190"]  
    }
];

//permet de creer un id valide pour les divs
function getId (a) {
    return a.split(' ').join('').toLowerCase();
}

//selectionne ul
const listGroup = document.querySelector('.list-group');

//calcul la variation du prix a integrer dans les pills
const priceVariation = (e) => {
    let precios = e.precioskg || e.preciosUnd;
    let variation;
    if (precios[precios.length - 1] > precios[precios.length - 2]) {
        variation = `+${precios[precios.length - 1] - precios[precios.length - 2]}COP`
    } else {
        variation = `${precios[precios.length - 1] - precios[precios.length - 2]}COP`;
    } 
    if (variation === "0COP" || variation === "NaNCOP") {
        variation = `+${precios[precios.length - 1]}COP`;
    }
    return variation;
}

//permet de creer les elements de la liste en fonction de la data
const list = () =>  {
    dataVegetales.forEach(data => {
        listGroup.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <img src=${data.icon}>
                                ${data.nombre}
                                <span class="badge badge-danger badge-pill">${priceVariation(data)}</span>
                                </li>
                                <div id=${getId(data.nombre)}>
                                </div>`
    });
};
list();

//liste des elements et liste des divs
const listElements = document.querySelectorAll('.list-group li');
const listDivs = document.querySelectorAll('.list-group div');

//permet de changer la couleur de la pill
listElements.forEach(e => {
    if(parseInt(e.firstElementChild.nextElementSibling.textContent) > 0 ) {
         e.firstElementChild.nextElementSibling.classList.toggle('badge-success');
         e.firstElementChild.nextElementSibling.classList.toggle('badge-danger');              
    };
});


//permet d'implementer la courbe pour chaque click

listElements.forEach(e => e.addEventListener('click', () => {  
    listDivs.forEach(div => div.style.display = 'none'); //fait disparaitre l'element precedemment clické
    dataVegetales.forEach(data => {
        if(e.nextElementSibling.id === getId(data.nombre)) {
            e.nextElementSibling.style.display = 'block';
            new Chartist.Line(`#${e.nextElementSibling.id}`, { labels: data.fechas,
                                                series: [
                                                    data.precioskg || data.preciosUnd
                                                ]
                                            });
        }
    })
}));

//modèle
//let dataChart = {
    //         labels: [],
    //         series: [
    //             []
    //         ]
    //     };

