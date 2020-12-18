/*Tests */
let url = "https://api.adviceslip.com/advice";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    randomAdvice(data.slip.advice);
  });

  function randomAdvice(advice){
      let adviceText = document.getElementById("my-4");
     adviceText.innerText = advice; 
  }