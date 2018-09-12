import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';

const search_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=";
const api_key = "AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ";

//Functional component - quando non viene gestito lo state
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { videos : [] }
    YTSearch({key : api_key, term : 'surfboards'} ,(videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <SearchBar />
    );
  }
}
