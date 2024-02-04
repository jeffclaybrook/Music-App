const audio = new Audio();
const data = [
	{
		album: "good kid, m.A.A.d city",
		title: "Sherane a.k.a Master Splinter's Daughter",
		artist: "Kendrick Lamar",
		length: "4:33",
		source: "songs/song-1.mp3",
		poster: "images/image-1.webp",
		thumb: "images/thumb-1.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Bitch, Don't Kill My Vibe",
		artist: "Kendrick Lamar",
		length: "5:10",
		source: "songs/song-2.mp3",
		poster: "images/image-2.webp",
		thumb: "images/thumb-2.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Backseat Freestyle",
		artist: "Kendrick Lamar",
		length: "3:32",
		source: "songs/song-3.mp3",
		poster: "images/image-3.webp",
		thumb: "images/thumb-3.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "The Art of Peer Pressure",
		artist: "Kendrick Lamar",
		length: "5:24",
		source: "songs/song-4.mp3",
		poster: "images/image-4.webp",
		thumb: "images/thumb-4.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Money Tress",
		artist: "Kendrick Lamar feat. Jay Rock",
		length: "6:26",
		source: "songs/song-5.mp3",
		poster: "images/image-5.webp",
		thumb: "images/thumb-5.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Poetic Justice",
		artist: "Kendrick Lamar feat. Drake",
		length: "5:00",
		source: "songs/song-6.mp3",
		poster: "images/image-6.webp",
		thumb: "images/thumb-6.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Good kid",
		artist: "Kendrick Lamar",
		length: "3:34",
		source: "songs/song-7.mp3",
		poster: "images/image-7.webp",
		thumb: "images/thumb-7.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "m.A.A.d city",
		artist: "Kendrick Lamar feat. MC Eiht",
		length: "5:50",
		source: "songs/song-8.mp3",
		poster: "images/image-8.webp",
		thumb: "images/thumb-8.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Swimming Pools (Drank)",
		artist: "Kendrick Lamar",
		length: "5:13",
		source: "songs/song-9.mp3",
		poster: "images/image-9.webp",
		thumb: "images/thumb-9.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Sing About Me, I'm Dying of Thirst",
		artist: "Kendrick Lamar",
		length: "12:03",
		source: "songs/song-10.mp3",
		poster: "images/image-10.webp",
		thumb: "images/thumb-10.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Real",
		artist: "Kendrick Lamar feat. Anna Wise",
		length: "7:23",
		source: "songs/song-11.mp3",
		poster: "images/image-11.webp",
		thumb: "images/thumb-11.webp"
	},
	{
		album: "good kid, m.A.A.d city",
		title: "Compton",
		artist: "Kendrick Lamar feat. Dr. Dre",
		length: "4:08",
		source: "songs/song-12.mp3",
		poster: "images/image-12.webp",
		thumb: "images/thumb-12.webp"
	},
	{
		album: "Coloring Book",
		title: "All We Got",
		artist: "Chance the Rapper feat. Kanye West & Chicago Childrens Choir",
		length: "3:23",
		source: "songs/song-13.mp3",
		poster: "images/image-13.webp",
		thumb: "images/thumb-13.webp"
	},
	{
		album: "Coloring Book",
		title: "No Problem",
		artist: "Chance the Rapper feat. Lil Wayne & 2 Chainz",
		length: "5:04",
		source: "songs/song-14.mp3",
		poster: "images/image-14.webp",
		thumb: "images/thumb-14.webp"
	},
	{
		album: "Coloring Book",
		title: "Summer Friends",
		artist: "Chance the Rapper feat. Jeremih & Francis & The Lights",
		length: "4:50",
		source: "songs/song-15.mp3",
		poster: "images/image-15.webp",
		thumb: "images/thumb-15.webp"
	},
	{
		album: "Coloring Book",
		title: "D.R.A.M. Sings Special",
		artist: "Chance the Rapper",
		length: "1:41",
		source: "songs/song-16.mp3",
		poster: "images/image-16.webp",
		thumb: "images/thumb-16.webp"
	},
	{
		album: "Coloring Book",
		title: "Blessings",
		artist: "Chance the Rapper feat. Jamila Woods",
		length: "3:41",
		source: "songs/song-17.mp3",
		poster: "images/image-17.webp",
		thumb: "images/thumb-17.webp"
	},
	{
		album: "Coloring Book",
		title: "Same Drugs",
		artist: "Chance the Rapper",
		length: "4:17",
		source: "songs/song-18.mp3",
		poster: "images/image-18.webp",
		thumb: "images/thumb-18.webp"
	},
	{
		album: "Coloring Book",
		title: "Mixtape",
		artist: "Chance the Rapper feat. Young Thug & Lil Yachty",
		length: "4:52",
		source: "songs/song-19.mp3",
		poster: "images/image-19.webp",
		thumb: "images/thumb-19.webp"
	},
	{
		album: "Coloring Book",
		title: "Angels",
		artist: "Chance the Rapper feat. Saba",
		length: "3:26",
		source: "songs/song-20.mp3",
		poster: "images/image-20.webp",
		thumb: "images/thumb-20.webp"
	},
	{
		album: "Coloring Book",
		title: "Juke Jam",
		artist: "Chance the Rapper",
		length: "3:39",
		source: "songs/song-21.mp3",
		poster: "images/image-21.webp",
		thumb: "images/thumb-21.webp"
	},
	{
		album: "Coloring Book",
		title: "All Night",
		artist: "Chance the Rapper feat. Justin Bieber & Towkio",
		length: "2:21",
		source: "songs/song-22.mp3",
		poster: "images/image-22.webp",
		thumb: "images/thumb-22.webp"
	},
	{
		album: "Coloring Book",
		title: "How Great",
		artist: "Chance the Rapper feat. Jay Electronica & My cousin Nicole",
		length: "5:37",
		source: "songs/song-23.mp3",
		poster: "images/image-23.webp",
		thumb: "images/thumb-23.webp"
	},
	{
		album: "Coloring Book",
		title: "Smoke Break",
		artist: "Chance the Rapper feat. Future",
		length: "3:46",
		source: "songs/song-24.mp3",
		poster: "images/image-24.webp",
		thumb: "images/thumb-24.webp"
	},
	{
		album: "Coloring Book",
		title: "Finish Line / Drown",
		artist: "Chance the Rapper feat. T-Pain, Kirk Franklin, Eryn Allen Kane & Noname",
		length: "6:46",
		source: "songs/song-25.mp3",
		poster: "images/image-25.webp",
		thumb: "images/thumb-25.webp"
	},
	{
		album: "Coloring Book",
		title: "Blessings",
		artist: "Chance the Rapper feat. Ty Dolla $ign, Raury, BJ The Chicago Kid & Anderson .Paak",
		length: "3:50",
		source: "songs/song-26.mp3",
		poster: "images/image-26.webp",
		thumb: "images/thumb-26.webp"
	}
]

let index = Math.floor(Math.random() * data.length) + 1;
let isPlaying = false;

function loadPlaylist() {
    const ul = document.createElement('ul');
    ul.innerHTML += data.map((item, i) => {
        const { title, artist, thumb } = item;
        return `
        <li data-index="${i}">
            <img src="${thumb}" alt="${title}" width="50px" height="50px" loading="lazy">
            <div class="wrapper">
                <h2>${title}</h2>
                <h3>${artist}</h3>
            </div>
            <button aria-label="More"><i class="material-symbols-rounded">more_vert</i></button>
        </li>
        `
    }).join('');
    document.querySelector('.playlist').appendChild(ul);
}

function nowPlaying(songs) {
    songs = document.querySelectorAll('.playlist li');
    for (let i = 0; i < songs.length; i++) {
        let dataIndex = songs[i].getAttribute('data-index');
        dataIndex == index
        ? songs[i].classList.add('now-playing')
        : songs[i].classList.remove('now-playing')
    }
}

function loadSong(song) {
    song = data[index];
    const bg = 'linear-gradient(to bottom, #454755b5 0%, #1c1c1fd2 100%)';
    audio.src = song.source;
    document.querySelector('.player-header h3').innerText = song.album;
    document.querySelector('.player-figure img').src = song.poster;
    document.querySelector('.player-figure img').alt = song.title;
    document.querySelector('.player-details h1').innerText = song.title;
    document.querySelector('.player-details h2').innerText = song.artist;
    document.querySelector('.player-progress span:nth-of-type(2)').innerText = song.length;
    document.querySelector('.player-progress .seek').style.width = 0;
    document.querySelector('.player').style.background =
    `${bg}, url(${song.poster}) no-repeat center center / cover`;
    nowPlaying();
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    const minutes = min < 10 ? `${min}` : `${min}`;
    const seconds = sec < 10 ? `0${sec}` : `${sec}`;
    return `${minutes}:${seconds}`;
}

function updateProgress(e) {
    const { currentTime, duration } = e.srcElement;
    const percent = (currentTime / duration) * 100;
    document.querySelector('.player-progress .seek').style.width = `${percent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function playSong() {
    audio.play();
    document.querySelector('#play-btn .material-symbols-rounded').innerText = 'pause';
    document.querySelector('.player').classList.add('playing');
    isPlaying = true;
}

function pauseSong() {
    audio.pause()
    document.querySelector('#play-btn .material-symbols-rounded').innerText = 'play_arrow';
    document.querySelector('.player').classList.remove('playing');
    isPlaying = false;
}

function toggleSong() {
    isPlaying ? pauseSong() : playSong();
}

function nextSong() {
    index++;
    if (index > data.length - 1) {
        index = 0;
    }
    loadSong(index);
    playSong();
}

function prevSong() {
    index--;
    if (index < 0) {
        index = data.length - 1;
    }
    loadSong(index);
    playSong();
}

function expandPlayer() {
    document.querySelector('.player').classList.add('expanded');
}

function collapsePlayer() {
    document.querySelector('.player').classList.remove('expanded');
}

function createRipple(e) {
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

setInterval(() => {
    const timer = document.querySelector('.player-progress span:nth-child(1)');
    let time = Math.round(audio.currentTime);
    timer.innerText = formatTime(time);
}, 1000);

const shareData = {
	title: 'Music App',
	text: 'Music App created by Jeffrey Claybrook',
	url: 'https://jeffclaybrook.github.io/Music-App/'
}

document.querySelector('.player-progress .track').addEventListener('click', setProgress);
document.querySelector('.player-details').addEventListener('click', expandPlayer);
document.querySelector('#play-btn').addEventListener('click', toggleSong);
document.querySelector('#prev-btn').addEventListener('click', prevSong);
document.querySelector('#next-btn').addEventListener('click', nextSong);
document.querySelector('#close-btn').addEventListener('click', collapsePlayer);
document.querySelector('.playlist').addEventListener('click', e => {
    index = e.target.closest('li').getAttribute('data-index');
    loadSong(index);
    playSong();
})
document.querySelector('#share-btn').addEventListener('click', async () => {
	try {
		await navigator.share(shareData);
		document.querySelector('.player-subcontrols p').textContent = '';
	} catch (err) {
		document.querySelector('.player-subcontrols p').textContent = `Error: ${err}`
	}
})

audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', updateProgress);

for (const button of document.querySelectorAll('.player-controls button')) {
    button.addEventListener('click', createRipple)
}

window.addEventListener('load', () => {
    loadPlaylist();
    loadSong(index);
})

async function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.register('/serviceWorker.js', {
				scope: '/'
			})
			if (registration.installing) {
				console.log('Service worker installing')
			} else if (registration.waiting) {
				console.log('Service worker installed')
			} else if (registration.active) {
				console.log('Service worker active')
			}
		} catch (error) {
			console.error(`Registration failed with ${error}`)
		}
	}
}

registerServiceWorker()