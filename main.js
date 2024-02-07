// Makes it so you can oress the boxes
document.querySelectorAll(".style-drums").forEach((item) => {
  item.addEventListener("click", (e) => {
    const audio = item.querySelector("audio");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});

// Defining the keypresses
const keyPresses = {
  A: () => playAndAdd("clapSound", "clap"),
  S: () => playAndAdd("hiHatSound", "hihat"),
  D: () => playAndAdd("kickSound", "kick"),
  F: () => playAndAdd("openHatSound", "openhat"),
  G: () => playAndAdd("rideSound", "ride"),
  H: () => playAndAdd("snareSound", "snare"),
  J: () => playAndAdd("tinkSound", "tink"),
  K: () => playAndAdd("tomSound", "tom"),
};

// Added play sound and class add on press
function playAndAdd(elemId, divId) {
  playSound(elemId);
  classAdd(divId);
}

// Function to play with id
function playSound(elemId) {
  const audio = document.getElementById(elemId);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

// Add class to look pressed
function classAdd(divId) {
  const element = document.getElementById(divId);
  if (element) {
    element.classList.add("pressed");

    setTimeout(() => {
      element.classList.remove("pressed");
    }, 200);
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const action = keyPresses[key];
  if (action) {
    action();
  }
});
