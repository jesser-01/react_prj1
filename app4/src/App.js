import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate React developer.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      shows: false,
      elapsedSeconds: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedSeconds: prevState.elapsedSeconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, elapsedSeconds } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <p>Time since component mounted: {elapsedSeconds} second{elapsedSeconds !== 1 ? 's' : ''}</p>
      </div>
    );
  }
}

export default App;
