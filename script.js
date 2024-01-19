// stops the page instantly refreshing on click submit
document.getElementById("submitButton").addEventListener("click", function(event){
  event.preventDefault()
});

function handleFormSubmit(event) {
  event.preventDefault();
  
  var data = new FormData(document.getElementById("userDetails"));
  // const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  // formJSON.snacks = data.getAll('snacks');
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}
  

//   https://www.learnwithjason.dev/blog/get-form-values-as-json/


function woo() { 
console.log("wicca woo");
}

// function userDetailsLog() {
//   console.log(smartCardNumber.value) 
// }
