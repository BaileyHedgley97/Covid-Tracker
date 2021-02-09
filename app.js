let api = 'https://corona.lmao.ninja/v2/countries/';
const btn = document.getElementById('submit');

document.getElementById('submit').addEventListener('click', getCovidStats);

function getCovidStats() {
    fetch(api + document.getElementById('search').value)
    .then(function(resp) { return resp.json()})
    .then(function(data){
        let population = data.population;
        let country = data.country;
        let cases = data.cases;
        let deaths = data.deaths;
        let critical = data.critical;
        let todayCases = data.todayCases;
        let todayDeaths = data.todayDeaths;
        let tests = data.tests;
        let casePerPerson = data.oneCasePerPeople;

        document.getElementById('population').innerHTML = population.toLocaleString('en');
        document.getElementById('country').innerHTML = country.toLocaleString('en');
        document.getElementById('cases').innerHTML = cases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('critical').innerHTML = critical.toLocaleString('en');
        document.getElementById('today-cases').innerHTML = todayCases.toLocaleString('en');
        document.getElementById('today-deaths').innerHTML = todayDeaths.toLocaleString('en');
        document.getElementById('tests').innerHTML = tests.toLocaleString('en');
        document.getElementById('casePerPerson').innerHTML = casePerPerson.toLocaleString('en');

    })
    
}