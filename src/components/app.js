import React, { Component } from 'react';
import SearchBar from './search_bar';

const search_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=";
const api_key = "&type=video&key=AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ";
export default class App extends Component {
  render() {
    return (
      <SearchBar />
    );
  }
}
