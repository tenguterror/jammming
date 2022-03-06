import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
          name: 'Raining Blood',
          artist: 'Slayer',
          album: 'Reign in Blood',
          id: 1,
        },
        {
          name: 'Walk With Me In Hell',
          artist: 'Lamb of God',
          album: 'Sacrament',
          id: 2,
        },
        {
          name: 'Damage Done ',
          artist: 'Dark Tranquility',
          album: 'Damage Done',
          id: 3,
        },
        {
          name: 'Cold Like War',
          artist: 'We Came As Romans',
          album: 'Cold Like War',
          id: 4,
        },
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {
          name: 'playlistName1',
          artist: 'playlistArtist1',
          album: 'playlistAlbum1',
          id: 5,
        },
        {
          name: 'playlistName2',
          artist: 'playlistArtist2',
          album: 'playlistAlbum2',
          id: 6,
        },
        {
          name: 'playlistName3',
          artist: 'playlistArtist3',
          album: 'playlistAlbum3',
          id: 7,
        },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
