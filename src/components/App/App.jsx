import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from "../Feeling/Feeling.jsx"
import Understanding from "../Understanding/Understanding.jsx"
import Support from "../Support/Support.jsx"
import Comments from "../Comments/Comments.jsx"
import Review from "../Review/Review.jsx"
import ThankYou from "../ThankYou/ThankYou.jsx"

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
      <Understanding />
      <Support />
      <Comments />
      <Review />
      <ThankYou />
    </div>
  );
}

export default App;
