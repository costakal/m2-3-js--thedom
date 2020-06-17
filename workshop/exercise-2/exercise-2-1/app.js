// Preset values
const FROGS = 3;
const track = document.getElementById("track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  track.appendChild(lane);

  let number = document.createElement("span");
  number.innerText = i + 1;
  lane.appendChild(number);

  lane.id = "Frog " + i;
}

const racers = [];

for (let x = 0; x < FROGS; x++) {
  racers.push(frogStable[x]);
}
