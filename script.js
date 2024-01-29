// stops the page instantly refreshing on click submit
// document.getElementById("submitButton").addEventListener("click", function(event){
//   event.preventDefault()
// });
let clickCounterNum = 0;

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
  clickCounterNum++;
  console.log(clickCounterNum);
  // clickCounter();

}

function partyHorn() {
  var audio = new Audio('party_horn.mp3');
  audio.play();
}
 
//closure function stops the loop being played twice
var glados = (function() {
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;
          // do something
          var glados = new Audio('glados_form_2.mp3');
          glados.loop = false;
          glados.play();
      }
  };
})();

// function clickCounter() {
//   if (clickCounterNum == 11) {
//     var gladosClick = new Audio('glados_clicking.wav');
//     gladosClick.loop = false;
//     gladosClick.play();
//   }
// }


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

function fireworks () {
  
var duration = 8 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
}
// Referrences: 

//https://www.kirilv.com/canvas-confetti/
//https://www.learnwithjason.dev/blog/get-form-values-as-json/
//https://www.youtube.com/watch?v=QS554vB5gKI
//https://www.youtube.com/watch?v=GtHN0VnmgzA
//https://github.com/catdad/canvas-confetti
//https://www.nerdaxic.com/glados-voice-generator/