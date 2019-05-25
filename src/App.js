import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>
            <span className="hashtag">#</span>
            BurnoutSquad
          </h1>
          <p className="description">
            An irregularly updated <span className="hashtag">comic</span> about a couple with a <span className="hashtag">burnout</span> 🔥😴😴
          </p>
        </header>
        <div className="the-comic">
          <img
            src="/burnoutsquad_1.jpg"
            alt="BurnoutSquad | Cleaning"
          />
        </div>
        <footer className="app-footer">
          <p>
            Brought to you with ❤️  by Leo and Dimi.
          </p>
          <div className="footer-links">
            <ul>
              <li>
                <a href="https://leoniejonk.nl/">leoniejonk.nl</a>
              </li>
              <li>
                <a href="https://www.instagram.com/leoniejonk.draws/?hl=nl">#leoniejonk.draws</a>
              </li>
              <li>
                <a href="https://www.instagram.com/burnoutsquad_comic/?hl=nl">Instagram</a>
              </li>
            </ul>
          </div>
          <span className="copynicht">© Leonie Jonk</span>
        </footer>
      </div>
    );
  }
}

export default App;
