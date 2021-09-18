import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import PostList from "./components/postlist/postlist";
import Skeleton from "./components/skeleton/skeleton";
import Header from "./components/header/header";

export default class App extends Component {
  state = {
    loading: true,
    photos: [],
  };

  componentDidMount = async () => {
    const url =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=sykCGsjbpKWslIgUEDFow7P1OBI21QVE21pW8wtQ";
    const response = await axios.get(url);
    const { photos } = response.data;
    this.setState({ photos, loading: false });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <Skeleton />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <PostList photos={this.state.photos} />;
        </div>
      );
    }
  }
}
