const dataVegetales = [
    {
        "nombre": "Banano",
        "icon": "banana",
        "fechas": ["291117","081217","131217","201217","020118"],
        "precioskg": ["1980","1780", "1780", "1780", "1780"]
    },
    {
        "nombre": "Brocoli",
        "icon": "broccoli",
        "fechas": ["291117","081217","131217","201217","020118"],
        "precioskg": ["2980","2980","2980","2980","2980"]
    },
    {
        "nombre": "Cebolla",
        "icon": "onion-1",
        "fechas": ["081217","201217","020118"],
        "precioskg": ["3200","3190","3200"]  
    },
    {
        "nombre": "Coliflor",
        "icon": "cauliflower",
        "fechas": ["0"],
        "precioskg": ["4500"]  
    },
    {
        "nombre": "Calabacin Verde",
        "icon": "courgette",
        "fechas": ["0"],
        "precioskg": ["2990"]
    },
    {
        "nombre": "Durasno Venezolano",
        "icon": "peach",
        "fechas": ["291117"],
        "precioskg": ["800"]
    },
    {
        "nombre": "Espinaca",
        "icon": "spinach",
        "fechas": ["131217","271217"],
        "precioskg": ["5780","5780"]  
    },  
    {
        "nombre": "Fresa",
        "icon": "strawberry",
        "fechas": ["161117"],
        "precioskg": ["8760"]  
    },
    {
        "nombre": "Kiwi",
        "icon": "kiwi",
        "fechas": ["281117"],
        "precioskg": ["13180"]  
    },
    {
        "nombre": "Lechuga Batavia",
        "icon": "salad-1",
        "fechas": ["081217","131217","271217"],
        "preciosUnd": ["1780","1750","1890"]  
    },    
    {
        "nombre": "Palta Hass",
        "icon": "avocado",
        "fechas": ["221217","050118"],
        "precioskg": ["4180","3880"]  
    },
    {
        "nombre": "Papa Capira",
        "icon": "potatoes-2",
        "fechas": ["201217"],
        "precioskg": ["1680"]  
    },
    {
        "nombre": "Papa Nevada",
        "icon": "potatoes-2",
        "fechas": ["131217"],
        "precioskg": ["2980"]  
    },
    {
        "nombre": "Pepino",
        "icon": "cucumber",
        "fechas": ["201217","050118"],
        "precioskg": ["1580","1490"]  
    },
    {
        "nombre": "Pimenton",
        "icon": "pepper",
        "fechas": ["081217","131217","201217","020118"],
        "precioskg": ["4680","4680","4800","5690"]  
    },
    {
        "nombre": "Piña Oro Miel",
        "icon": "pineapple",
        "fechas": ["291117","081217","271217"],
        "precioskg": ["1980","1780","2180"]  
    },
    {
        "nombre": "Platano Maduro",
        "icon": "platano",
        "fechas": ["011217","050118"],
        "precioskg": ["1980","980"]  
    },
    {
        "nombre": "Platano Verde",
        "icon": "platano-verde",
        "fechas": ["011217","201217","050118"],
        "precioskg": ["1780","1450","1780"]  
    }, 
    {
        "nombre": "Repollo",
        "icon": "cabbage",
        "fechas": ["081217"],
        "precioskg": ["1180"]  
    },
    {
        "nombre": "Zanahoria",
        "icon": "carrot",
        "fechas": ["161117","291117","081217","131217","201217","050118"],
        "precioskg": ["1290", "1580", "1580", "1780", "1190","1380"]  
    }
];

//permet de creer un id valide pour les divs
function getId(a) {
    return a.split(' ').join('').toLowerCase();
}

//selectionne ul
const listGroup = document.querySelector('.list-group');

//calcul la variation du prix a integrer dans les pills
const priceVariation = (e) => {
    let precios = e.precioskg || e.preciosUnd;
    let variation;
    if (Number(precios[precios.length - 1]) > Number(precios[precios.length - 2])) {
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
                                <img src=icons/${data.icon}.svg>
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

//permet d'afficher toutes les courbes
// listElements.forEach(e => e.addEventListener('click', () => {  
//     listDivs.forEach(div => div.style.display = 'none'); //fait disparaitre l'element precedemment clické
//     dataVegetales.forEach(data => {
//         if(e.nextElementSibling.id === getId(data.nombre)) {
//             e.nextElementSibling.style.display = 'block';
//             new Chartist.Line(`#${e.nextElementSibling.id}`, { labels: data.fechas,
//                                                 series: [
//                                                     data.precioskg.consumo,
//                                                     data.precioskg.jumbo,
//                                                     data.precioskg.exitoExpress
//                                                 ]
//                                             });
//         }
//     })
// }));

//modèle
//let dataChart = {
    //         labels: [],
    //         series: [
    //             []
    //         ]
    //     };

