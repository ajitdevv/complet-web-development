// // //! add extra ====> add your songs



// // ------------------- Global Variables -------------------
// let songList = [];
// let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// //***** Theme chang *****//


// let btn = document.querySelector(".theme-chang");
// btn.addEventListener("click", function () {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark');
//         document.body.classList.add('light');
//     } else {
//         document.body.classList.remove('light');
//         document.body.classList.add('dark');
//         alert("Look like paid website");
//     }
// });
// let btnmobile = document.querySelector(".firstchild")
// btnmobile.addEventListener("click", function () {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark');
//         document.body.classList.add('light');
//     } else {
//         document.body.classList.remove('light');
//         document.body.classList.add('dark');
//         alert("Look like paid website");
//     }
// });
// // ******Menu open funclity****** //

// const menuSmart = document.querySelector('.menu-smart');
// const menuList = document.getElementById('menu-list');

// menuSmart.addEventListener('click', () => {
//     menuList.classList.toggle('open');
// });

// // 3 songs are render in starting
// const container = document.getElementsByClassName("music")[0];
// fetch("songs.json")
//     .then(res => res.json())
//     .then(data => {
//         allSongs = data;
//         songList = data;
//         const randomThree = getRandomSongs(allSongs, 3);
//         renderSongs(randomThree);
//     });

// function getRandomSongs(arr, n) {
//     const shuffled = arr.slice().sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, n);
// }



// // ****** Manage menu visibility when user interacts with the menu toggle ****** //
// let allSongs = [];
// let currentIndex = 0;
// const perPage = 9;
// let loadMoreBtn;
// function renderSongs(songList) {
//     container.innerHTML = "";
//     currentIndex = 0;
//     if (loadMoreBtn) loadMoreBtn.remove();
//     renderNextChunk(songList);
//     if (songList.length > perPage) createLoadMoreButton(songList);
// }




// function renderNextChunk(songList) {
//     const nextSongs = songList.slice(currentIndex, currentIndex + perPage);

//     nextSongs.forEach(song => {
//         const card = document.createElement("div");
//         card.className = "song-card";
//         card.style.backgroundImage = `url(${song.image})`;
//         card.dataset.id = song.id;
//         //Favorite Button        
//         const favBtn = document.createElement("button");
//         favBtn.className = "favorite-btn";
//         favBtn.textContent = "♡";
//         favBtn.dataset.id = song.id;

//         if (favorites.includes(song.id)) {
//             favBtn.classList.add('active');
//             favBtn.textContent = "💖";
//         }
//         const overlay = document.createElement("div");
//         overlay.className = "overlay";

//         const title = document.createElement("h3");
//         title.textContent = `${song.name} — ${song.singer}`;

//         const audio = document.createElement("audio");
//         audio.controls = true;
//         audio.src = song.src;

//         overlay.appendChild(title);
//         overlay.appendChild(audio);
//         card.appendChild(favBtn);
//         card.appendChild(overlay);
//         container.appendChild(card);
//     });

//     currentIndex += nextSongs.length;
//     attachAudioListeners();
//     attachFavoriteListeners();
// }

// // Update heart icon appearance when user marks/unmarks as favorite...
// function attachFavoriteListeners() {
//     const favButtons = document.querySelectorAll('.favorite-btn');

//     favButtons.forEach(btn => {
//         if (!btn.dataset.listener) {
//             btn.addEventListener('click', () => {
//                 const id = btn.dataset.id;
//                 btn.classList.toggle('active');

//                 if (btn.classList.contains('active')) {
//                     btn.textContent = "💖";
//                     if (!favorites.includes(id)) favorites.push(id);
//                 } else {
//                     btn.textContent = "♡";
//                     favorites = favorites.filter(i => i !== id);
//                 }

//                 localStorage.setItem('favorites', JSON.stringify(favorites));
//             });

//             btn.dataset.listener = "true";
//         }
//     });
// }



// // Pause any currently playing audio when a new track is played
// function attachAudioListeners() {
//     const audios = document.querySelectorAll('audio');

//     audios.forEach(audio => {
//         audio.onplay = null;
//         audio.addEventListener('play', () => {
//             audios.forEach(other => {
//                 if (other !== audio) {
//                     other.pause();
//                     other.currentTime = 0;
//                 }
//             });
//         });
//     });
// }


// // Append more songs to the list when the user clicks 'View More'

// function createLoadMoreButton(songList) {
//     loadMoreBtn = document.createElement("button");
//     loadMoreBtn.innerText = "View More";
//     loadMoreBtn.style.display = "block";
//     loadMoreBtn.style.margin = "20px auto";
//     loadMoreBtn.style.padding = "10px 20px";
//     loadMoreBtn.style.cursor = "pointer";
//     loadMoreBtn.style.border = "none";
//     loadMoreBtn.style.borderRadius = "5px";
//     loadMoreBtn.style.backgroundColor = "#1e90ff";
//     loadMoreBtn.style.color = "#fff";
//     loadMoreBtn.style.fontSize = "16px";

//     loadMoreBtn.addEventListener("mouseenter", () => {
//         loadMoreBtn.style.backgroundColor = "#0c66c1";
//     });
//     loadMoreBtn.addEventListener("mouseleave", () => {
//         loadMoreBtn.style.backgroundColor = "#1e90ff";
//     });

//     container.appendChild(loadMoreBtn);

//     loadMoreBtn.addEventListener("click", () => {
//         renderNextChunk(songList);


//         if (currentIndex >= songList.length) {
//             loadMoreBtn.remove();
//         }

//         container.appendChild(loadMoreBtn);
//     });
// }


// // Filter songs in real-time based on user search input

// const searchInput = document.getElementsByClassName("search_input")[0];
// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase();
//     const filtered = allSongs.filter(song =>
//         song.name.toLowerCase().includes(query) ||
//         song.singer.toLowerCase().includes(query) ||
//         song.other.toLowerCase().includes(query)
//     );
// renderSongs(filtered);
  


// });
//         const category = item.textContent.toLowerCase();
//         const filtered = allSongs.filter(song =>
//             song.other.toLowerCase().includes(category)
//         );
//         renderSongs(filtered);
//         searchInput.value = '';
//     });
// });
    
// // Display user's favorite songs based on saved favorites
// const favDesktopBtn = document.getElementById('show-favorites');
// const favMobileBtn = document.getElementById('show-favorites-small-screen');

// function handleFavClick() {
//     let favs = JSON.parse(localStorage.getItem('favorites')) || [];
//     const filtered = allSongs.filter(song => favs.includes(String(song.id)));
//     renderSongs(filtered);
// }

// if (favDesktopBtn) favDesktopBtn.addEventListener('click', handleFavClick);
// if (favMobileBtn) favMobileBtn.addEventListener('click', handleFavClick);





























const container = document.querySelector(".music");
const searchInput = document.querySelector(".search_input");
let allSongs = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentIndex = 0;
const perPage = 9;
let loadMoreBtn;

// ===== Theme Toggle =====
document.querySelector(".theme-chang").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// ===== Fetch songs JSON =====
fetch("songs.json")
  .then(res => res.json())
  .then(data => {
    allSongs = data;
    renderSongs(allSongs);
  });

// ===== Render Songs =====
function renderSongs(list) {
  container.innerHTML = "";
  currentIndex = 0;
  if (loadMoreBtn) loadMoreBtn.remove();

  renderNextChunk(list);

  if (list.length > perPage) createLoadMoreButton(list);

  renderFooter(); // Always call after rendering
}

function renderNextChunk(list) {
  const nextSongs = list.slice(currentIndex, currentIndex + perPage);

  nextSongs.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";

    const img = document.createElement("img");
    img.src = song.image;

    const title = document.createElement("h3");
    title.textContent = song.name;

    const singer = document.createElement("p");
    singer.textContent = song.singer;

    const other = document.createElement("small");
    other.textContent = song.other;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = song.src;

    const favBtn = document.createElement("button");
    favBtn.className = "favorite-btn";
    favBtn.textContent = favorites.includes(song.id) ? "💖" : "♡";
    if (favorites.includes(song.id)) favBtn.classList.add("active");

    favBtn.addEventListener("click", () => toggleFavorite(song.id, favBtn));

    card.append(img, title, singer, other, audio, favBtn);
    container.appendChild(card);
  });

  currentIndex += nextSongs.length;
}

function createLoadMoreButton(list) {
  loadMoreBtn = document.createElement("button");
  loadMoreBtn.textContent = "View More";
  loadMoreBtn.className = "load-more";
  container.appendChild(loadMoreBtn);

  loadMoreBtn.addEventListener("click", () => {
    renderNextChunk(list);
    if (currentIndex >= list.length) loadMoreBtn.remove();
  });
}

// ===== Favorites =====
function toggleFavorite(id, btn) {
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    btn.textContent = "💖";
    if (!favorites.includes(id)) favorites.push(id);
  } else {
    btn.textContent = "♡";
    favorites = favorites.filter(i => i !== id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// ===== Footer =====
function renderFooter() {
  let footer = document.getElementById("footer");
  if (!footer) {
    footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer); // Always after main content
  }

  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} My Music App |
    <a href="#">About</a> |
    <a href="#">Contact</a></p>
  `;
}

// ===== Search =====
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allSongs.filter(song =>
    song.name.toLowerCase().includes(query) ||
    song.singer.toLowerCase().includes(query) ||
    song.other.toLowerCase().includes(query)
  );
  renderSongs(filtered);
});

// ===== Category Filter =====
document.querySelectorAll(".filter--").forEach(item => {
  item.addEventListener("click", () => {
    const cat = item.textContent.toLowerCase();
    const filtered = allSongs.filter(song => song.other.toLowerCase().includes(cat));
    renderSongs(filtered);
    searchInput.value = '';
  });
});

// ===== Show Favorites =====
document.getElementById("show-favorites")?.addEventListener("click", () => {
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  renderSongs(allSongs.filter(song => favs.includes(song.id)));
});
