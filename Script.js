console.log("Welecome to Mymusic.com");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "aabad-barbaad-1", filePath: "songs/1.mp3", coverPath: "covers/3.jpg" }, //1
    { songName: "jaan-nisaa-2", filePath: "songs/2.mp3", coverPath: "covers/1.jpg" }, //2
    { songName: "Aye Bairagi-", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" }, //3
    { songName: "Itani-si-bat-h-4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" }, //4
    { songName: "Lohore-Lohore", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" }, //5
    { songName: "Fir-Kabhi", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" }, //6
    { songName: "Sukoon Mila", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" }, //7
    { songName: "Subhah-Subhah", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" }, //8
    { songName: " Soon-Re-Gujriaya-song", filePath: "songs/9.mp3", coverPath: "covers/8.jpg" }, //9
    { songName: "Haardam-Hamdaam", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }, //10
    { songName: "Bandeya-Re Bandeya", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" }, //11
    { songName: "Dil ye Dhoka dhadi", filePath: "songs/9.mp3", coverPath: "covers/12.jpg" }, //12
    { songName: "Kalak-title-track", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" }, //13
    { songName: "Sajade jhukaowe-be", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" }, //14
    { songName: "Dheeme-dheeme jo", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" }, //15
]
songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    // Update Seekbar
    progrss = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progrss;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 14) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// audioStatus = function() {
//     var music = document.getElementById('natureSounds');
//     if (musicTracker == 'noMusic') {
//         music.play();
//         musicTracker = 'playMusic';
//     } else {
//         music.pause();
//         musicTracker = 'noMusic';
//     }
// };