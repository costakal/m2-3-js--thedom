// Preset values
const FROGS = 3;
const track = document.getElementById("track");
let progressContainer = document.createElement("div");
const main = document.querySelector("main");
main.appendChild(progressContainer);

for (let i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  track.appendChild(lane);

  let number = document.createElement("span");
  number.innerText = i + 1;
  lane.appendChild(number);

  lane.id = "lane-" + i;
}

const racers = [];

for (let x = 0; x < FROGS; x++) {
  racers.push(frogStable[x]);
}

racers.forEach(function (racer, index) {
  let lane = document.getElementById("lane-" + index);
  let frog = document.createElement("span");
  frog.classList.add("frog");
  frog.style.backgroundColor = racer.color;
  frog.innerText = racer.number;
  frog.progress = 0;
  let progressSpan = document.createElement("span");
  progressSpan.id = "lane-progress-" + index;
  progressSpan.innerText = frog.progress + "%";
  progressContainer.appendChild(progressSpan);
  lane.appendChild(frog);
});

// 75%

function racingFrog(racerObject) {
  Math.floor(Math.random() * 10);
}

setInterval(function () {
  racingFrog();
}, 3000);

// 1. Create a function called racingFrog. It will accept one parameter. This parameter will be a frog object from the racers array.
// 2. We need to calculate a random distance for each hop the frog will make. Use Math.random() for this. It might be good to consider percentages here...
// 3. Use setInterval to keep the frog hopping until the progress is greater than 100%. Remember to clearInterval once it reaches the end of the course.
// 4. Write a message to the console, once the frog has reached the end.
// 5. If you have ever seen a frog race, it isn't all that exciting. The frogs are generally not that motivated to reach the end... To that end, let's give each frog its own random delay time for the setInterval to simulate a frog waiting around between hops.
// 6. "Why aren't they moving?!!" Examine the CSS file and determine what property you can modify to get them moving on the screen.
// 7. Almost done! Now, call racingFrog() for each frog in the race.
