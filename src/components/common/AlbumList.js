import React,
       { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';


//Import components
import AlbumDetail from './AlbumDetail';

// Create component
class AlbumList extends Component {
//Class initial state, in this case it's an empty array called Albums
  state = { albums: [] };

//Lifecycle function, which fires if the app is about to be rendered
  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data }));
  }
//Map the req-response to a new array of albums, pass props to AlbumDetail
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
      );
  }

//Default function needed for all classbased components
  render() {
    console.log(this.state);
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
}

// Make the component publicly available
export { AlbumList };
