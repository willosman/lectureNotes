const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";//API address, declaring a variable to use later. 
const key = 'm1y4j1oUeyGTyCABAhMitbmOg0g3UEpX';//API key and variable. 
let url;// declaring a variable 

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
// declaring variables from HTML file. 
nav.style.display = 'none';//hides the previous and next buttons from the HTML file. 



let pageNumber = 0;//initializing the starting page number. 
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);//calls the function for fetchResults
nextBtn.addEventListener('click', nextPage); //calls the function for nextPage
previousBtn.addEventListener('click', previousPage);// calls the function for previousPage

function fetchResults(e){//"e" is a pre-declared variable
    // console.log(e);
    e.preventDefault();//keeps the page from refreshing on submit. 
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;// setting the url variable to a string concat of all the elements. 
    console.log('URL:', url);

    if(startDate.value !== ''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== ''){
        console.log(endDate.value);
        url += '&end_date=' + endDate.value;
    }

    fetch(url)// pulling the data from the url 
    .then(function(result){
        // console.log(result);
        return result.json();//converting to a json
    }) .then(function(json){
        // console.log(json);
        displayResults(json);//calls the function display results. 
    })
}

function displayResults(json){
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if(articles.length >= 10){//checking the length of how many articles there are. 
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
    
    if(articles.length === 0){
        console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++){//for loop 
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');

        let current = articles[i];//pulling the current article that is being iterated through. 
        console.log("Current:", current);

        link.href = current.web_url;//what is the url to the current article we are iterating.
        console.log(link);
        link.textContent = current.headline.main;

        para.textContent = 'Keywords:';

        for(let j = 0; j < current.keywords.length; j++){
            let span = document.createElement('span');
            span.textContent += current.keywords[j].value + '';
            para.appendChild(span);
        }//iterating the keywords from the current article and then appending them. 

        if(current.multimedia.length > 0){
            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
            img.alt = current.headline.main;
        }//sets the image to the url. 

        clearfix.setAttribute('class', 'clearfix');

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
        }
    }
    if (articles.length === 10){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
};


function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}//This function fetchs the results to the associated "next page". 

function previousPage(e){
    if (pageNumber > 0){
        pageNumber--;
        fetchResults(e);
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}//This function fetchs the results to the associated "previous page". 


        
    