var data = {
    labels: ['date', 'date', 'date', 'date', 'date','date', 'date', 'date', 'date', 'date'],
    series: [
      [0 , 2, 4, 2, 5000]
    ]
  };

const apple = document.getElementById('apple');
const modal = document.getElementById('modal');
const chart = document.querySelector('.ct-chart');
let title = document.querySelector('.modal-title'); 
const list = document.querySelector('#list')
let vege = list.querySelectorAll('.col-2');
const dropdown = document.querySelector('.dropdown');
const dro = document.querySelector('.dropdown-menu');

vege.forEach(veg => {
    veg.addEventListener('click', () => {
        title.textContent = veg.firstElementChild.firstElementChild.alt;
        new Chartist.Line('.ct-chart', data);
    })
});

dro.addEventListener("click", function(e) {
	if (e.target.className === 'dropdown-item') {
        dropdown.firstElementChild.textContent = e.target.textContent;
    }
});