const audio = new Audio();
const main = document.querySelector('main');
const playlist = document.getElementById('playlist');
const player = document.getElementById('player');
const controls = document.querySelectorAll('.controls button');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const closeBtn = document.getElementById('close-btn');
const details = document.getElementById('details');
const track = document.getElementById('track');
const seek = document.getElementById('seek');
const data = [
    {
        album: "good kid, m.A.A.d city",
        title: "Sherane a.k.a Master Splinter's Daughter",
        artist: "Kendrick Lamar",
        duration: "4:33",
        source: "songs/song-0.mp3",
        poster: "images/image-0.webp",
        thumb: "images/thumb-0.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Bitch, Don't Kill My Vibe",
        artist: "Kendrick Lamar",
        duration: "5:10",
        source: "songs/song-1.mp3",
        poster: "images/image-1.webp",
        thumb: "images/thumb-1.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Backseat Freestyle",
        artist: "Kendrick Lamar",
        duration: "3:32",
        source: "songs/song-2.mp3",
        poster: "images/image-2.webp",
        thumb: "images/thumb-2.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "The Art of Peer Pressure",
        artist: "Kendrick Lamar",
        duration: "5:24",
        source: "songs/song-3.mp3",
        poster: "images/image-3.webp",
        thumb: "images/thumb-3.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Money Tress",
        artist: "Kendrick Lamar feat. Jay Rock",
        duration: "6:26",
        source: "songs/song-4.mp3",
        poster: "images/image-4.webp",
        thumb: "images/thumb-4.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Poetic Justice",
        artist: "Kendrick Lamar feat. Drake",
        duration: "5:00",
        source: "songs/song-5.mp3",
        poster: "images/image-5.webp",
        thumb: "images/thumb-5.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Good kid",
        artist: "Kendrick Lamar",
        duration: "3:34",
        source: "songs/song-6.mp3",
        poster: "images/image-6.webp",
        thumb: "images/thumb-6.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "m.A.A.d city",
        artist: "Kendrick Lamar feat. MC Eiht",
        duration: "5:50",
        source: "songs/song-7.mp3",
        poster: "images/image-7.webp",
        thumb: "images/thumb-7.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Swimming Pools (Drank)",
        artist: "Kendrick Lamar",
        duration: "5:13",
        source: "songs/song-8.mp3",
        poster: "images/image-8.webp",
        thumb: "images/thumb-8.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Sing About Me, I'm Dying of Thirst",
        artist: "Kendrick Lamar",
        duration: "12:03",
        source: "songs/song-9.mp3",
        poster: "images/image-9.webp",
        thumb: "images/thumb-9.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Real",
        artist: "Kendrick Lamar feat. Anna Wise",
        duration: "7:23",
        source: "songs/song-10.mp3",
        poster: "images/image-10.webp",
        thumb: "images/thumb-10.webp"
    },
    {
        album: "good kid, m.A.A.d city",
        title: "Compton",
        artist: "Kendrick Lamar feat. Dr. Dre",
        duration: "4:08",
        source: "songs/song-11.mp3",
        poster: "images/image-11.webp",
        thumb: "images/thumb-11.webp"
    },
    {
        album: "Coloring Book",
        title: "All We Got",
        artist: "Chance the Rapper feat. Kanye West & Chicago Childrens Choir",
        duration: "3:23",
        source: "songs/song-12.mp3",
        poster: "images/image-12.webp",
        thumb: "images/thumb-12.webp"
    },
    {
        album: "Coloring Book",
        title: "No Problem",
        artist: "Chance the Rapper feat. Lil Wayne & 2 Chainz",
        duration: "5:04",
        source: "songs/song-13.mp3",
        poster: "images/image-13.webp",
        thumb: "images/thumb-13.webp"
    },
    {
        album: "Coloring Book",
        title: "Summer Friends",
        artist: "Chance the Rapper feat. Jeremih & Francis & The Lights",
        duration: "4:50",
        source: "songs/song-14.mp3",
        poster: "images/image-14.webp",
        thumb: "images/thumb-14.webp"
    },
    {
        album: "Coloring Book",
        title: "D.R.A.M. Sings Special",
        artist: "Chance the Rapper",
        duration: "1:41",
        source: "songs/song-15.mp3",
        poster: "images/image-15.webp",
        thumb: "images/thumb-15.webp"
    },
    {
        album: "Coloring Book",
        title: "Blessings",
        artist: "Chance the Rapper feat. Jamila Woods",
        duration: "3:41",
        source: "songs/song-16.mp3",
        poster: "images/image-16.webp",
        thumb: "images/thumb-16.webp"
    },
    {
        album: "Coloring Book",
        title: "Same Drugs",
        artist: "Chance the Rapper",
        duration: "4:17",
        source: "songs/song-17.mp3",
        poster: "images/image-17.webp",
        thumb: "images/thumb-17.webp"
    },
    {
        album: "Coloring Book",
        title: "Mixtape",
        artist: "Chance the Rapper feat. Young Thug & Lil Yachty",
        duration: "4:52",
        source: "songs/song-18.mp3",
        poster: "images/image-18.webp",
        thumb: "images/thumb-18.webp"
    },
    {
        album: "Coloring Book",
        title: "Angels",
        artist: "Chance the Rapper feat. Saba",
        duration: "3:26",
        source: "songs/song-19.mp3",
        poster: "images/image-19.webp",
        thumb: "images/thumb-19.webp"
    },
    {
        album: "Coloring Book",
        title: "Juke Jam",
        artist: "Chance the Rapper",
        duration: "3:39",
        source: "songs/song-20.mp3",
        poster: "images/image-20.webp",
        thumb: "images/thumb-20.webp"
    },
    {
        album: "Coloring Book",
        title: "All Night",
        artist: "Chance the Rapper feat. Justin Bieber & Towkio",
        duration: "2:21",
        source: "songs/song-21.mp3",
        poster: "images/image-21.webp",
        thumb: "images/thumb-21.webp"
    },
    {
        album: "Coloring Book",
        title: "How Great",
        artist: "Chance the Rapper feat. Jay Electronica & My cousin Nicole",
        duration: "5:37",
        source: "songs/song-22.mp3",
        poster: "images/image-22.webp",
        thumb: "images/thumb-22.webp"
    },
    {
        album: "Coloring Book",
        title: "Smoke Break",
        artist: "Chance the Rapper feat. Future",
        duration: "3:46",
        source: "songs/song-23.mp3",
        poster: "images/image-23.webp",
        thumb: "images/thumb-23.webp"
    },
    {
        album: "Coloring Book",
        title: "Finish Line / Drown",
        artist: "Chance the Rapper feat. T-Pain, Kirk Franklin, Eryn Allen Kane & Noname",
        duration: "6:46",
        source: "songs/song-24.mp3",
        poster: "images/image-24.webp",
        thumb: "images/thumb-24.webp"
    },
    {
        album: "Coloring Book",
        title: "Blessings",
        artist: "Chance the Rapper feat. Ty Dolla $ign, Raury, BJ The Chicago Kid & Anderson .Paak",
        duration: "3:50",
        source: "songs/song-25.mp3",
        poster: "images/image-25.webp",
        thumb: "images/thumb-25.webp"
    }
]

let index = Math.floor(Math.random() * data.length) + 1;
let isPlaying = false;

const loadPlaylist = () => {
    const ulTag = document.createElement('ul');
    playlist.appendChild(ulTag);
    data.forEach((song, i) => {
        const liTag = document.createElement('li');
        liTag.setAttribute('data-index', `${i}`);
        liTag.innerHTML = `
        <img src="${song.thumb}" alt="${song.title}" width="50px" height="50px" loading="lazy">
        <div class="wrapper">
            <h3>${song.title}</h3>
            <h4>${song.artist}</h4>
        </div>
        <button aria-label="More button ${i}" type="button"><span class="icon more-icon"></span></button>`;
        ulTag.appendChild(liTag);
    })
}

const nowPlaying = (songs) => {
    songs = document.querySelectorAll('#playlist li');
    for (let i = 0; i < songs.length; i++) {
        let dataIndex = songs[i].getAttribute('data-index');
        dataIndex == index
        ? songs[i].classList.add('now-playing')
        : songs[i].classList.remove('now-playing');
    }
}

const loadSong = (song) => {
    song = data[index];
    audio.src = song.source;
    document.getElementById('album').innerText = song.album;
    document.getElementById('title').innerText = song.title;
    document.getElementById("artist").innerText = song.artist;
    document.getElementById('duration').innerText = song.duration;
    document.getElementById('poster').setAttribute('src', song.poster);
    document.getElementById('poster').setAttribute('alt', song.album);
    const bg = 'linear-gradient(to bottom, #454755ec 0%, #1c1c1ff2 100%)';
    player.style.background = `${bg}, url(${song.poster}) no-repeat center center / cover`;
    seek.style.width = 0;
    nowPlaying();
}

window.addEventListener('load', () => {
    loadPlaylist();
    loadSong(index);
})

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let minutes = min < 10 ? `${min}` : `${min}`;
    let seconds = sec < 10 ? `0${sec}` : `${sec}`;
    return `${minutes}:${seconds}`;
}

setInterval(() => {
    const timer = document.getElementById('timer');
    timer.innerText = formatTime(audio.currentTime)
}, 1000);

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    seek.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

track.addEventListener('click', setProgress);

const playSong = () => {
    audio.play();
    playBtn.querySelector('.icon').classList.add('pause-icon');
    playBtn.querySelector('.icon').classList.remove('play-icon');
    player.classList.add('playing');
    isPlaying = true;
}

const pauseSong = () => {
    audio.pause();
    playBtn.querySelector('.icon').classList.add('play-icon');
    playBtn.querySelector('.icon').classList.remove('pause-icon');
    player.classList.remove('playing');
    isPlaying = false;
}

const togglePlayback = () => {
    isPlaying ? pauseSong() : playSong();
}

const prevSong = () => {
    index--;
    if (index < 0) {
        index = data.length - 1;
    }
    loadSong(index);
    playSong();
}

const nextSong = () => {
    index++;
    if (index > data.length - 1) {
        index = 0;
    }
    loadSong(index);
    playSong();
}

audio.addEventListener('ended', nextSong);

playlist.addEventListener('click', (e) => {
    index = e.target.closest('li').getAttribute('data-index');
    loadSong(index);
    playSong();
})

details.addEventListener('click', () => {
    main.classList.add('overlay');
    player.classList.add('expanded');
});

const closePlayer = () => {
    main.classList.remove('overlay');
    player.classList.remove('expanded');
}

const addRipple = (e) => {
    const el = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(el.clientWidth, el.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - el.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - el.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = el.getElementsByClassName('ripple')[0];

    if (ripple) {
        ripple.remove()
    }

    el.appendChild(circle);
}

for (const btn of controls) {
    btn.addEventListener('click', addRipple);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.servieWorker
        .register('sw.js')
        .then(res => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err))
    })
}