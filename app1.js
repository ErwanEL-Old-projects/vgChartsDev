const dataVegetales = [
    {
        "nombre": "Banano",
        "icon": "banana",
        "fechas": ["291117","081217","131217","201217","020118","120118"],
        "precios": {
            "consumo" :["1980","1780", "1780", "1780", "1780", "1980"],
            "jumbo" :   ["1190","1190","1190","1190","1190"], //exemple
            "exito" : ["1290","1290","1290","1290","2000"] //exemple
        } 
    },
    {
        "nombre": "Brocoli",
        "icon": "broccoli",
        "fechas": ["291117","081217","131217","201217","020118"],
        "precios": {
            "consumo" : ["2980","2980","2980","2980","2980"]
        }
    },
    {
        "nombre": "Cebolla",
        "icon": "onion-1",
        "fechas": ["081217","201217","020118","120118"],
        "precios": {
            "consumo" :["3200","3190","3200","1980"],
            "jumbo" : [],
            "exito" : ["2700","2700"]
        }
    },
    {
        "nombre": "Coliflor",
        "icon": "cauliflower",
        "fechas": ["0"],
        "precios": {
            "consumo" :["4500"],
            "jumbo" : ["4500"],
            "exito" : []
        }
    },
    {
        "nombre": "Calabacin Verde",
        "icon": "courgette",
        "fechas": ["0"],
        "precios": {
            "consumo" :[],
            "jumbo" : ["2990"],
            "exito" : []
        }
    },
    {
        "nombre": "Durasno Venezolano",
        "icon": "peach",
        "fechas": ["291117"],
        "precios": {
            "consumo" :["800"]
        }
    },
    {
        "nombre": "Espinaca",
        "icon": "spinach",
        "fechas": ["131217","271217","120118"],
        "precios": {
            "consumo" :["5780","5780","5780"]
        }
    },  
    {
        "nombre": "Fresa",
        "icon": "strawberry",
        "fechas": ["161117"],
        "precios": {
            "consumo" :["8760"]
        }
    },
    {
        "nombre": "Kiwi",
        "icon": "kiwi",
        "fechas": ["281117"],
        "precios": {
            "consumo" :["13180"]
        } 
    },
    {
        "nombre": "Lechuga Batavia und",
        "icon": "salad-1",
        "fechas": ["081217","131217","271217","120118"],
        "precios": {
            "consumo" :["1780","1750","1890","1980"]
        }
    },    
    {
        "nombre": "Palta Hass",
        "icon": "avocado",
        "fechas": ["221217","050118"],
        "precios": {
            "consumo" : ["4180","3880"]
        }
    },
    {
        "nombre": "Papa Capira",
        "icon": "potatoes-2",
        "fechas": ["201217"],
        "precios": {
            "consumo" :["1680"]
        }
    },
    {
        "nombre": "Papa Nevada",
        "icon": "potatoes-2",
        "fechas": ["131217"],
        "precios": {
            "consumo" :["2980"]
        }
    },
    {
        "nombre": "Pepino",
        "icon": "cucumber",
        "fechas": ["201217","050118"],
        "precios": {
            "consumo" :["1580","1490"],
            "jumbo" : ["2290"],
            "exito" : []
        }
    },
    {
        "nombre": "Pimenton",
        "icon": "pepper",
        "fechas": ["081217","131217","201217","020118","120118"],
        "precios": {
            "consumo" :["4680","4680","4800","5690","5090"]  
        } 
    },
    {
        "nombre": "Piña Oro Miel",
        "icon": "pineapple",
        "fechas": ["291117","081217","271217","120118"],
        "precios": {
            "consumo" :["1980","1780","2180","1980"] 
        }
    },
    {
        "nombre": "Platano Maduro",
        "icon": "platano",
        "fechas": ["011217","050118"],
        "precios": {
            "consumo" :["1980","980"] 
        }
    },
    {
        "nombre": "Platano Verde",
        "icon": "platano-verde",
        "fechas": ["011217","201217","050118"],
        "precios": {
            "consumo" :["1780","1450","1780"] 
        }
    }, 
    {
        "nombre": "Repollo",
        "icon": "cabbage",
        "fechas": ["081217","120118"],
        "precios": {
            "consumo" :["1180","1550"],
            "jumbo" : ["1900"],
            "exito" : []
        }
    },
    {
        "nombre": "Repollo Morado",
        "icon": "cabbage-red",
        "fechas": ["120118"],
        "precios": {
            "consumo" :["1850"]
        }
    },
    {
        "nombre": "Tomate",
        "icon": "tomato",
        "fechas": [],
        "precios": {
            "consumo" :[]
        }
    },
    {
        "nombre": "Zanahoria",
        "icon": "carrot",
        "fechas": ["161117","291117","081217","131217","201217","050118"],
        "precios": {
            "consumo" :["1290", "1580", "1580", "1780", "1190","1380"],
            "jumbo" : [],
            "exito" : ["2000"]
        }
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
    let precios = e.precios.consumo;
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

//permet d'afficher toutes les courbes
listElements.forEach(e => e.addEventListener('click', () => {  
    listDivs.forEach(div => div.style.display = 'none'); //fait disparaitre l'element precedemment clické
    dataVegetales.forEach(data => {
        if(e.nextElementSibling.id === getId(data.nombre)) {
            e.nextElementSibling.style.display = 'block';
            new Chartist.Line(`#${e.nextElementSibling.id}`, { labels: data.fechas,
                series: [
                    data.precios.consumo,
                    data.precios.jumbo,
                    data.precios.exito
                ]
            });
        }
    })
}));

//permet d'implementer la courbe pour chaque click (ancienne version)
// listElements.forEach(e => e.addEventListener('click', () => {  
//     listDivs.forEach(div => div.style.display = 'none'); //fait disparaitre l'element precedemment clické
//     dataVegetales.forEach(data => {
//         if(e.nextElementSibling.id === getId(data.nombre)) {
//             e.nextElementSibling.style.display = 'block';
//             new Chartist.Line(`#${e.nextElementSibling.id}`, { labels: data.fechas,
//                                                 series: [
//                                                     data.precioskg || data.preciosUnd
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

