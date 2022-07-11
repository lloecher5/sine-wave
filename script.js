const canvas = document.querySelector("canvas");
const amplitudeInput = document.querySelector("#amplitude");
const lengthInput = document.querySelector("#length");
const frequencyInput = document.querySelector("#frequency");
const amplitudeDisplay = document.querySelector("#amplitudeDisplay");
const lengthDisplay = document.querySelector("#lengthDisplay");
const frequencyDisplay = document.querySelector("#frequencyDisplay");
const form = document.querySelector("form");
const c = canvas.getContext("2d");

lengthDisplay.innerHTML = lengthInput.value;
amplitudeDisplay.innerHTML = amplitudeInput.value;
frequencyDisplay.innerHTML = frequencyInput.value;

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
  length: 0.005,
  amplitude: 100,
  frequency: 0.01,
};

let increment = wave.frequency;

function animate() {
  window.requestAnimationFrame(animate);
  c.fillRect;
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  //this for loop wil run for each pixel along the canvas's width
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(
      i,
      canvas.height / 2 + Math.sin(i * wave.length + increment) * wave.amplitude
    );
  }
  c.strokeStyle = "hsl(200, 50%, 60%)";
  c.stroke();
  increment += wave.frequency;
  console.log(wave.frequency);
}

//form used to update the variables based on user input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  wave.amplitude = Number(amplitudeInput.value);
  wave.length = Number(lengthInput.value);
  wave.frequency = Number(frequencyInput.value);
});

animate();

//functions used to update the values in the HTML
function updateAmplitude() {
  var amplitude = document.querySelector("#amplitude").value;
  amplitudeDisplay.innerHTML = amplitude;
}

function updateLength() {
  var length = document.querySelector("#length").value;
  lengthDisplay.innerHTML = length;
}

function updateFrequency() {
  var frequency = document.querySelector("#frequency").value;
  frequencyDisplay.innerHTML = frequency;
}
