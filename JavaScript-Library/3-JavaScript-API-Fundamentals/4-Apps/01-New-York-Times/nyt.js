const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = 'm1y4j1oUeyGTyCABAhMitbmOg0g3UEpX';
let url;

//search form

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//results navigation

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
nav.style.display = 'none';

//results section

const section = document.querySelector('section');

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    if(startDate.value !== ''){
        console.log(startDate.value)
        url += '&end_date=' + endDate.value;
    }
    fetch(url)
    .then(function(result){
        return result.json();
    }) .then(function(json){
        displayResults(json);
    })
}

function displayResults(json){
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if(articles.length >= 10){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
    
    if(articles.length === 0){
        console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++){
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');

        let current = articles[i];
        console.log("Current:", current);

        link.href = current.web_url;
        link.textContent = current.headlines.main;

        para.textContent = 'Keywords:';

        for(let j = 0; j < current.keywords.length; j++){
            let span = document.createElement('span');
            span.textContent += current.keywords[j].value + '';
            para.appendChild(span);
        }

        if(current.multiedia.length > 0){
            img.src = 'http://www.nytimes.com/' + current.multiedia[0].url;
            img.alt = current.headline.main;
        }

        clearfix.setAttribute('class', 'clearfix');

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
        }
    }
};

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}

function previousPage(e){
    if (pageNumber > 0){
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}


        
    