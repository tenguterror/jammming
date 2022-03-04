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
        {name: 'Raining Blood', artist: 'Slayer', album: 'Reign in Blood', id: 1},
        {name: 'Walk With Me In Hell', artist: 'Lamb of God', album: 'Sacrament', id: 2},
        {name: 'Damage Done ', artist: 'Dark Tranquility', album: 'Damage Done', id: 3},
        {name: 'Cold Like War', artist: 'We Came As Romans', album: 'Cold Like War', id: 4}
      ]
    }
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
            <SearchResults  searchResults={this.state.SearchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
