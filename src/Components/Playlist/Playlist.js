import React from 'react';
import { TrackList } from 'src/Components/TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div class='Playlist'>
        <input defaultValue={'New Playlist'} />
        {/* <TrackList /> */}
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
