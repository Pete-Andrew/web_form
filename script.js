// stops the page instantly refreshing on click submit
// document.getElementById("submitButton").addEventListener("click", function(event){
//   event.preventDefault()
// });


function handleFormSubmit(event) {
  event.preventDefault();
  
  var data = new FormData(document.getElementById("userDetails"));
  // const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  // formJSON.snacks = data.getAll('snacks');
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
  console.log(results.innerText);
}
  


function woo() { 
console.log("wicca woo");

}


// confetti 
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

// function userDetailsLog() {
//   console.log(smartCardNumber.value) 
// }

//Comments:
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

// Referrences: 

//https://www.learnwithjason.dev/blog/get-form-values-as-json/
//https://www.youtube.com/watch?v=QS554vB5gKI
//https://www.youtube.com/watch?v=GtHN0VnmgzA
//https://github.com/catdad/canvas-confetti