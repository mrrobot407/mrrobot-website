import React,{useState} from 'react';
import { mrRobotEpisodes } from  '../components/episode-list.js'; 
import '../components/episode.css'

function episode() {
    const [selectedSeason, setSelectedSeason] = useState('season1'); 
    return (
        <div className='epi-body pattern-dots-md bg-danger'>
            <div className="tabs pattern-dots-md bg-danger">
                {Object.keys(mrRobotEpisodes).map((seasonKey) => (
                    <button
                        key={seasonKey}
                        className={`tab ${selectedSeason === seasonKey ? 'active' : ''}`}
                        onClick={() => setSelectedSeason(seasonKey)}
                    >
                        {seasonKey}
                    </button>
                ))}
            </div>
            <div className="episode-content pattern-dots-md bg-danger">
                {mrRobotEpisodes[selectedSeason].map((episode) => (
                    <div key={episode.episode} className="episode  ">
                        <h3>Episode {episode.episode}: {episode.title}</h3>
                        <p>{episode.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default episode;