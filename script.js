window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("search-btn").onclick = () =>{
  event.preventDefault(); // prevent form from submitting and refreshing the page
  
  const wordInput = document.getElementById('wordInput').value;
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
      console.log(data);
    })
    .catch(error => {
      // handle any errors here
      console.error(error);
    });
};
});
