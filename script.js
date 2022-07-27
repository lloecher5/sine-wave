const canvas = document.querySelector("canvas");
const amplitudeInput = document.querySelector("#amplitude");
const lengthInput = document.querySelector("#length");
const frequencyInput = document.querySelector("#frequency");
const amplitudeDisplay = document.querySelector("#amplitudeDisplay");
const lengthDisplay = document.querySelector("#lengthDisplay");
const frequencyDisplay = document.querySelector("#frequencyDisplay");
const form = document.querySelector("form");
const c = canvas.getContext("2d");

const wave = {
  length: 0.01,
  amplitude: 200,
  frequency: 0.03,
};

lengthDisplay.innerHTML = wave.length;
amplitudeDisplay.innerHTML = wave.amplitude;
frequencyDisplay.innerHTML = wave.frequency;

canvas.width = innerWidth * 0.5;
canvas.height = innerHeight * 0.5;

let increment = wave.frequency;

//function used to create the animated sine wave
function animate() {
  //tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an
  //animation before the next repaint
  window.requestAnimationFrame(animate);
  //draws a filled rectangle
  c.fillRect;
  //clears a recatangle within a given rectangle
  c.clearRect(0, 0, canvas.width, canvas.height);

  //begins a path
  c.beginPath();
  //moves the path to a location
  c.moveTo(0, canvas.height / 2);
  //this for loop wil run for each pixel along the canvas's width
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(
      i,
      canvas.height / 2 + Math.sin(i * wave.length + increment) * wave.amplitude
    );
  }
  c.strokeStyle = "hsl(200, 50%, 60%)";
  //actually draws the path with all the moveTo and lineTo methods.
  c.stroke();
  increment += wave.frequency;
}

animate();

//functions used to update the wave values
function updateAmplitude() {
  var amplitude = document.querySelector("#amplitude").value;
  amplitudeDisplay.innerHTML = amplitude;
  wave.amplitude = amplitude;
}

function updateLength() {
  var length = document.querySelector("#length").value;
  lengthDisplay.innerHTML = length;
  wave.length = length;
}

function updateFrequency() {
  var frequency = document.querySelector("#frequency").value;
  frequencyDisplay.innerHTML = frequency;
  wave.frequency = Number(frequency);
}
