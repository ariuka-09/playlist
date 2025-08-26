const songs = [
  {
    name: "Blinding Lights",
    creator: "The Weeknd",
    length: "3:20",
    genre: "Synthwave/Pop",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
    url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
  },
  {
    name: "Shape of You",
    creator: "Ed Sheeran",
    length: "3:53",
    genre: "Pop",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  },
  {
    name: "Levitating",
    creator: "Dua Lipa",
    length: "3:24",
    genre: "Pop/Disco",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
  },
  {
    name: "Stay",
    creator: "The Kid LAROI & Justin Bieber",
    length: "2:21",
    genre: "Pop",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
    url: "https://www.youtube.com/watch?v=kTJczUoc26U",
  },
  {
    name: "Uptown Funk",
    creator: "Mark Ronson ft. Bruno Mars",
    length: "4:30",
    genre: "Funk/Pop",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  },
  {
    name: "Bad Guy",
    creator: "Billie Eilish",
    length: "3:14",
    genre: "Pop/Alternative",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    url: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
  },
  {
    name: "Believer",
    creator: "Imagine Dragons",
    length: "3:24",
    genre: "Rock/Pop",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    url: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
  },
  {
    name: "Rolling in the Deep",
    creator: "Adele",
    length: "3:48",
    genre: "Soul/Pop",
    image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee",
    url: "https://www.youtube.com/watch?v=rYEDA3JcQqw",
  },
  {
    name: "Senorita",
    creator: "Shawn Mendes & Camila Cabello",
    length: "3:11",
    genre: "Pop/Latin",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
    url: "https://www.youtube.com/watch?v=Pkh8UtuejGw",
  },
  {
    name: "Closer",
    creator: "The Chainsmokers ft. Halsey",
    length: "4:05",
    genre: "EDM/Pop",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    url: "https://www.youtube.com/watch?v=PT2_F-1esPk",
  },
];

function musicRendering(song) {
  const musicCardsDiv = document.createElement("div");
  musicCardsDiv.setAttribute("class", "musicCards");
  song.forEach((duu) => {
    const musicCardDiv = document.createElement("div");
    musicCardDiv.setAttribute("class", "musicCard");
    const musicImg = document.createElement("img");
    musicImg.setAttribute("src", duu.image);
    musicImg.setAttribute("class", "musicImg");
    const TextSection = document.createElement("div");
    const musicName = document.createElement("p");
    musicName.setAttribute("class", "name");
    musicName.innerHTML = duu.name;
    const musicCreator = document.createElement("p");
    musicCreator.setAttribute("class", "creator");
    musicCreator.innerHTML = duu.creator;
    const musicLength = document.createElement("p");
    musicLength.setAttribute("class", "length");
    musicLength.innerHTML = duu.length;
    const playbuttonContainer = document.createElement("div");
    playbuttonContainer.setAttribute("class", "playbuttonContainer");
    const playbutton = document.createElement("a");
    playbutton.innerHTML = `<!-- Copy this -->
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="Play">
  <title>Play</title>
  <!-- hollow circle -->
  <circle cx="32" cy="32" r="30" fill="none" stroke="black" stroke-width="4"/>
  
  <!-- play triangle -->
  <polygon points="26,20 26,44 46,32" fill="black"/>
</svg>

`;
    playbutton.setAttribute("class", "playbutton");
    playbutton.setAttribute("href", duu.url);
    playbutton.setAttribute("target", "_blank");
    TextSection.appendChild(musicName);
    TextSection.appendChild(musicCreator);
    TextSection.appendChild(musicLength);
    playbuttonContainer.appendChild(playbutton);
    TextSection.appendChild(playbuttonContainer);
    musicCardDiv.appendChild(musicImg);
    musicCardDiv.appendChild(TextSection);
    musicCardsDiv.appendChild(musicCardDiv);
  });
  document.getElementById("app").appendChild(musicCardsDiv);
}
musicRendering(songs);
