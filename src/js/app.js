//list init
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
    //fait disparaitre l'element precedemment clické
    listDivs.forEach(div => div.style.display = 'none');
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


//modèle
//let dataChart = {
    //         labels: [],
    //         series: [
    //             []
    //         ]
    //     };

