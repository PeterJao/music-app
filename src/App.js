import "./App.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Neneng B",
    artist: "Nik Makino",
    genre: "Rap",
    userRating: 5,
  },
  {
    id: 2,
    title: "Babaero",
    artist: "Hev Abi",
    genre: "Hiphop",
    userRating: 3,
  },
  {
    id: 3,
    title: "Pop",
    artist: "Nayeon",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 4,
    title: "5 stars",
    artist: "CL",
    genre: "Rap",
    userRating: 5,
  },
  {
    id: 5,
    title: "The Scientist",
    artist: "Coldplay",
    genre: "Emo",
    userRating: 4,
  },
  {
    id: 6,
    title: "Magnetic",
    artist: "Illit",
    genre: "Pop",
    userRating: 5,
  },
  {
    id: 7,
    title: "Saturn",
    artist: "SZA",
    genre: "RNB",
    userRating: 5,
  },
  {
    id: 8,
    title: "Dynamite",
    artist: "BTS",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 9,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    userRating: 5,
  },
  {
    id: 10,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 11,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    userRating: 5,
  },
  {
    id: 12,
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    genre: "Rap",
    userRating: 4,
  },
  {
    id: 13,
    title: "Billie Jean",
    artist: "Michael Jackson",
    genre: "Pop",
    userRating: 5,
  },
  {
    id: 14,
    title: "Hotel California",
    artist: "Eagles",
    genre: "Rock",
    userRating: 5,
  },
  {
    id: 15,
    title: "Wonderwall",
    artist: "Oasis",
    genre: "Rock",
    userRating: 4,
  },
  {
    id: 16,
    title: "Dance Monkey",
    artist: "Tones and I",
    genre: "Pop",
    userRating: 3,
  },
  {
    id: 17,
    title: "Savage Love",
    artist: "Jawsh 685 & Jason Derulo",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 18,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 19,
    title: "Shape of My Heart",
    artist: "Sting",
    genre: "Pop",
    userRating: 5,
  },
  {
    id: 20,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Rock",
    userRating: 5,
  },
  // Additional data
  {
    id: 21,
    title: "Pantropiko",
    artist: "Bini",
    genre: "Pop",
  },
  {
    id: 22,
    title: "Alam mo ba girl",
    artist: "Hev Abi",
    genre: "Hiphop",
  },
  {
    id: 23,
    title: "Selos",
    artist: "Shaira",
    genre: "Pop",
  },
  {
    id: 24,
    title: "In My Feelings",
    artist: "Drake",
    genre: "RNB",
  },
  {
    id: 25,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    genre: "Pop",
  },
  {
    id: 26,
    title: "Thunder",
    artist: "Imagine Dragons",
    genre: "Rock",
  },
  {
    id: 27,
    title: "Shape of My Heart",
    artist: "Backstreet Boys",
    genre: "Pop",
  },
  {
    id: 28,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    genre: "Pop",
  },
  {
    id: 29,
    title: "Smooth",
    artist: "Santana ft. Rob Thomas",
    genre: "Rock",
  },
  {
    id: 30,
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    genre: "Pop",
  },
  {
    id: 31,
    title: "Hotel California",
    artist: "Eagles",
    genre: "Rock",
  },
  {
    id: 32,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genre: "Pop",
  },
  {
    id: 33,
    title: "Billie Jean",
    artist: "Michael Jackson",
    genre: "Pop",
  },
  {
    id: 34,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
  },
  {
    id: 35,
    title: "Wonderwall",
    artist: "Oasis",
    genre: "Rock",
  },
  {
    id: 36,
    title: "Highway to Hell",
    artist: "AC/DC",
    genre: "Rock",
  },
];




const tempPlaylist = [
  {
    id: 1,
    title: "Neneng B",
    artist: "Nik Makino",
    genre: "Rap",
    userRating: 5,
  },
  {
    id: 2,
    title: "Babaero",
    artist: "Hev Abi",
    genre: "Hiphop",
    userRating: 3,
  },
  {
    id: 3,
    title: "Pop",
    artist: "Nayeon",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 4,
    title: "5 stars",
    artist: "CL",
    genre: "Rap",
    userRating: 5,
  },
  {
    id: 5,
    title: "The Scientist",
    artist: "Coldplay",
    genre: "Emo",
    userRating: 4,
  },

];

const initialSortConfig = {
  key: "userRating",
  direction: 1,
};

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState([]);
  const [sortConfig, setSortConfig] = useState(initialSortConfig);
  

  const addToPlaylist = (musicItem) => {
    setPlaylist([...playlist, musicItem]);
  };

  const sortMusic = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 1 ? -1 : 1;
    setSortConfig({ key, direction });
  };

  const sortedMusic = music.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return -sortConfig.direction;
    }
    return 0;
  });

  return (
    <div>
      <Navbar>
        <NumResult music={music} />
      </Navbar>
      <Main>
        <Box title="Music List">
          <Music
            music={sortedMusic}
            sortMusic={sortMusic}
            addToPlaylist={addToPlaylist}
          ></Music>
        </Box>
        <Box title="Playlist">
          <Playlist playlist={playlist} addToPlaylist={addToPlaylist} />
        </Box>
      </Main>
    </div>
  );
}
export default App;


function Navbar({children}) {
  return (
    <nav className="container">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

function Logo() {
  return <h1 style={{ textAlign: "center" }}>Music App</h1>;
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search a song..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function Box({ title, children }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      {children}</div>
  )
}

// function MusicListBox({ music }) {
//   return (
//     <div className="container">
//       <h2>Music List</h2>
//       <Music music={music} />
//     </div>
//   );
// }
// function PlaylistBox() {
//   return (
//     <div className="container">
//       <h2>Playlist</h2>
//       <Playlist />
//     </div>
//   );
// }


function Music({ music, sortMusic, addToPlaylist }) {
  return (
    <ul>
      {music.map((musicItem) => (
        <li key={musicItem.id} className="music-item">
          {musicItem.title} by {musicItem.artist} ({musicItem.genre})
          <button className="heart-button" onClick={() => addToPlaylist(musicItem)}>♥️</button>
        </li>
      ))}
      <button onClick={() => sortMusic("title")}>Sort by Title</button>
      <button onClick={() => sortMusic("artist")}>Sort by Artist</button>
      <button onClick={() => sortMusic("userRating")}>Sort by Rating</button>
    </ul>
  );
}

function Playlist({ playlist, addToPlaylist }) {
  return (
    <ul>
      {playlist.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist}
          <br></br>
          <p>
            <span>⭐{music.userRating}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

//In the App component, pass the `addToPlaylist` function to the `Music` component

function Main({ children }) {
  return (
    <div className="container">{children}</div>
  );
}

