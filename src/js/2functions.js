//permet de creer un id valide pour les divs
const getId = (a) => {
    return a.split(' ').join('').toLowerCase();
}

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
                                <img src=img/icons/${data.icon}.svg>
                                ${data.nombre}
                                <span class="badge badge-danger badge-pill">${priceVariation(data)}</span>
                                </li>
                                <div id=${getId(data.nombre)}>
                                </div>`
    });
};