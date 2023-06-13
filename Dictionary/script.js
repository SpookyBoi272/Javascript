window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("search-btn").onclick = () =>{
  event.preventDefault(); // prevent form from submitting and refreshing the page
  
  const wordInput = document.getElementById('wordInput').value;

  if (wordInput == ""){
    document.getElementById("word").innerHTML= `<h2> Please enter a valid word!!! </h2>`
    document.getElementById("word").style.color =  "red"
  }
  else{
    document.getElementById("word").innerHTML=`<image src="../Sources/R.gif">`
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // handling the api response data
        word = data[0].word
        pos = data[0].meanings[0].partOfSpeech
        phn = data[0].phonetic
        mining = data[0].meanings[0].definitions[0].definition
        exam = data[0].meanings[0].definitions[0].example || ""
        syn = data[0].meanings[0].synonyms[0]
        ant = data[0].meanings[0].antonyms[0]
        document.getElementById("word").innerHTML=`  <h2>`+ toTitleCase(word) +`</h2>
        <div class="info">
            <p class="pos">`+ pos + `</p>
            <p class="phn">`+ phn + `</p>
        </div>
        <div class="meaning">
            <h3>Meaning</h3>
            <p class="mean">`+ mining + `</p>
        </div>
        <div class="example">
            <h3>Example</h3>
            <p class="mean">`+ toTitleCase(exam) +`</p>
        </div>
        <div class="syn">
            <h3>Synonyms</h3>
            <p class="mean">`+ syn +`</p>
        </div>
        <div class="ant">
            <h3>Antonyms</h3>
            <p class="mean">`+ ant +`</p>`
        console.log(exam);
      })
      .catch(error => {
        document.getElementById("word").innerHTML = `<h2>No results found for "`+wordInput+`"</h2>`
        document.getElementById("word").style.color =  "red"
      });
  }
};
});

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}