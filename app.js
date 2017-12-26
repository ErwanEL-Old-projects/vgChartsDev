var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Mon', 'Tue', 'Wed', 'Thu', 'Fri','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };
  
  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.

const apple = document.getElementById('apple');
const modal = document.getElementById('modal');  

apple.addEventListener('click', () => {
    new Chartist.Line('.ct-chart', data);
});

const dropdown = document.querySelector('.dropdown');
const dro = document.querySelector('.dropdown-menu');

dro.addEventListener("click", function(e) {
	if (e.target.className === 'dropdown-item') {
        dropdown.firstElementChild.textContent = e.target.textContent;
    }
});