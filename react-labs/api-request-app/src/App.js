import React from 'react';
import logo from './logo.svg';
import './App.css';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    // set initial data here
    this.state ={ posts: []}
  }

  async componentDidMount() {
    // fetch data here
  }

  render() {
    return (
      <p>Render posts here!</p>
    )
  }
}


function App() {
  return (
    <div className="App">
      <PostsList/>
    </div>
  );
}

export default App;
