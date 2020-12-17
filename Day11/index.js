const player = document.querySelector("#player");
const playerControls = document.querySelector(".player_controls");
const playerVideo = document.querySelector(".player_video");
const viewer = document.querySelector(".viewer");
const playButton = document.querySelector(".play_button");
const ranges = document.querySelectorAll(".player_slider");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector("#progress");
const playerButtons = document.querySelectorAll(".player_button");

function togglePlayButton(){
    let method = viewer.paused ? 'play' : 'pause';
    let icon = viewer.paused ? '❚ ❚' : '►';
    playButton.textContent = icon;
    viewer[method]();
}

function updateProgress(){
    const percent = (viewer.currentTime / viewer.duration) * 100;
    progress.value = percent;
}

function updateRange(){
    viewer[this.name] = this.value;
    console.log(this.value);
}

function popTimeLeft(){
    progress.innerHTML = `<p>${viewer.currentTime}</p>`;
}

function handleProgress(){
    viewer.currentTime += parseFloat(this.dataset.skip);
    console.log(this.value);
}

viewer.addEventListener("click", togglePlayButton);
playButton.addEventListener("click", togglePlayButton);
viewer.addEventListener("timeupdate", updateProgress);
progress.addEventListener("mouseover", popTimeLeft);
ranges.forEach(range => {range.addEventListener("change", updateRange)});
playerButtons.forEach(playButton => {playButton.addEventListener("click", handleProgress)});
