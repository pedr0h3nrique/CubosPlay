import { useRef, useState } from 'react';
import Card from '../../components/Card';
import Controls from '../../components/Controls';
import Header from '../../components/Header';
import { musics } from '../../musics';
import './style.css';

function Home() {
  const audioRef = useRef(null);
  
  const [iconBtn, setIconBtn] = useState('pause');
  
  const [musicsData, setMusicData] = useState([...musics]);
  
  const [currentMusic, setCurrentMusic] = useState({
    id: 0, title: '', artist: ''
  });

  function setMusic(music){
    setIconBtn('play');
    audioRef.current.src = music.url;

    setCurrentMusic(music);
  }

  function handleChangeMusic(option) {
    if (!currentMusic.id) {
      return;
    }
    
    const newMusicId = option === 'next' 
      ? currentMusic.id + 1 
      : currentMusic.id - 1;
    
    const otherMusic = musicsData.find((music) => music.id === newMusicId);
  
    if (!otherMusic) {
      return;
    }
  
    setMusic(otherMusic);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <h2>The best play list</h2>
        <div className='container-cards'>
          {musicsData.map((music) => (
            <div 
              onClick={() => setMusic(music)}
              key={music.id}
            >
              <Card 
                title={music.title}
                cover={music.cover}
                description={musics.description}
              />
            </div>
          ))}
        </div>
      </main>  
      <Controls 
        audioRef={audioRef}
        currentMusic={currentMusic} 
        iconBtn={iconBtn} 
        setIconBtn={setIconBtn}
        handleChangeMusic={handleChangeMusic}
        
      />

      <audio ref={audioRef} />
    </div>
  );
}

export default Home;
