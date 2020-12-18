const url = "https://api.covid19api.com/summary";

async function covid(url) {
  const response = await fetch(url);
  let data = await response.json();
  // console.log(data);
  if (response) {
    covidData();
  }
  return data;
}

covid(url).then((data) => show(data));

function covidData() {
  document.getElementById("loading").style.display = "none";
}

function show(data) {
  let table = `<tr>
            <th>Country</th>
            <th>Country Code</th>
            <th>New Confirmed</th>
            <th>New Deaths</th>
            <th>New Recovered</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
            </tr>`;
  // console.log(data);
  // console.log(table);

  for (let r of data.Countries) {
    table += `<tr>
        <td>${r.Country}</td>
        <td>${r.CountryCode}</td>
        <td>${r.NewConfirmed}</td>
        <td>${r.NewDeaths}</td>
        <td>${r.NewRecovered}</td>
        <td>${r.TotalConfirmed}</td>
        <td>${r.TotalDeaths}</td>
        <td>${r.TotalRecovered}</td>
        </tr>`;
  }
  // console.log(table);
  document.getElementById("covid").innerHTML = table;
}

show(data);

// let coronavirus = document.getElementById('button1')

// coronavirus.addEventListener('click', displayData);

// function covid() {
//     fetch(url)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
// }

// function covid(){
//     fetch(url)
//     .then((res) => res.json())
//     .then((json) => displayData(json.Countries[0].Country.CountryCode))
// }

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data));

// function displayData(covidData){
// let ronaText = document.getElementById('rona');
// for(let i = 0; i < data.length; i++){
// let div = document.createElement("div");
// div.innerHTML = 'Country:' + data[i].Country + '' + data[i].CountryCode + '' + data[i].NewConfirmed;
// mainContainer.appendChild(div);
// ronaText.innerHTML = covidData;
// }
// }

// function displayData(covidData){
// let ronaText = document.getElementById('rona');
// ronaText.innerHTML = covidData;
// }
