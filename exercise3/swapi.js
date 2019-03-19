const url = 'https://swapi.co/api/planets/';

function fetchDataSwapi(url) {
    return fetch(url).then((respone) => respone.json());
}

function tableRow(data) {
    const row = document.createElement('tr');
  //deklarasi key api swapi
    const { 
      name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population
    } = data;
    row.appendChild(element('td', name))
    row.appendChild(element('td',rotation_period))
    row.appendChild(element('td',orbital_period))
    row.appendChild(element('td', diameter))
    row.appendChild(element('td', climate))
    row.appendChild(element('td', gravity))
    row.appendChild(element('td', terrain))
    row.appendChild(element('td', surface_water))
    row.appendChild(element('td', population ))
   
    return row;
}

function element(a,b,c) {
    const A = document.createElement(a);
    const content = document.createTextNode(b);
    A.appendChild(content);
    if (c) {
       A.classList.add(c);
    }
    return A;
}

const viewTablePlanets = document.getElementById('tablePlanets').getElementsByTagName('tbody')[0];
      
fetchDataSwapi(url).then((data) => {
   // console.log(data);
    data.results.forEach(result => {
      const row = tableRow(result);
      viewTablePlanets.appendChild(row);
   });
});