const canvas = document.querySelector("canvas");
const amplitudeInput = document.querySelector("#amplitude");
const lengthInput = document.querySelector("#length");
const frequencyInput = document.querySelector("#frequency");
const amplitudeDisplay = document.querySelector("#amplitudeDisplay");
const lengthDisplay = document.querySelector("#lengthDisplay");
const frequencyDisplay = document.querySelector("#frequencyDisplay");
const form = document.querySelector("form");
const c = canvas.getContext("2d");

// amplitudeDisplay.innerHTML = amplitudeInput.value;
// frequencyDisplay.innerHTML = frequencyInput.value;
// lengthDisplay.innerHTML = lengthInput.value;

canvas.width = innerWidth;
canvas.height = innerHeight;
let frequency = 0.01;
let increment = frequency;

function animate() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const amplitude = amplitudeInput.value;
    const length = lengthInput.value;
  });

  window.requestAnimationFrame(animate);
  c.fillRect;
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  //this for loop wil run for each pixel along the canvas's width
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, canvas.height / 2 + Math.sin(i * 0.01 + increment) * 300);
  }
  c.strokeStyle = "hsl(200, 50%, 60%)";
  c.stroke();
  increment += frequency;
}

animate();

// function updateAmplitude() {
//   var amplitude = document.getElementById("amplitude").value;
//   amplitudeDisplay.innerHTML = amplitude;
// }

// function updateFrequency() {
//   const frequency = document.getElementById("frequency").value;
//   frequencyDisplay.innerHTML = frequency;
// }

// function updateLength() {
//   const length = document.getElementById("length").value;
//   lengthDisplay.innerHTML = length;
// }
