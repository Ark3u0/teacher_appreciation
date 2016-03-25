
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './../navigation/navigation_bar.js';
import BlogEntry from './blog_entry.js';

const { Component } = React;

class Index extends Component {
  render() {
    return (
      <div className="index">
        <NavigationBar/>
        <BlogEntry/>
      </div>
    );
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);