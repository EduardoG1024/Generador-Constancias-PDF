const song = document.getElementById('song')
const playBtn = document.getElementById('playBtn');

song.loop = false;

playBtn.addEventListener('click', () => {
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
})