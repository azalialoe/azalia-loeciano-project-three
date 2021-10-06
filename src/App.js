import axios from 'axios';
import './App.css';
import {  useState } from 'react';
import IntroText from './IntroText';
import Form from './Form';
import Ball from './Ball';


function App() {

  // API //
  const [joke, setJoke ] = useState('');
  
  // function to call the API to get a random joke
  const getJoke = function() {
    axios({
      url: 'https://icanhazdadjoke.com/',
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    }).then((response) => {
      setJoke(response.data.joke);
    })
  };

  // FORM //
    
  const [ userInput, setUserInput ] = useState('')
    

  const handleSubmit = (e, userText) => {
      e.preventDefault();
      setUserInput(userText);
  }

  const [ displayBall, setDisplayBall ] = useState(false);

  const handleDisplayBall = (showBall) => {
    setDisplayBall(showBall)
  }

  return (
    <div className="stress-ball">
      <h1>Virtual Stress Ball</h1>
      
      <IntroText />

      <Form handleSubmit={handleSubmit}
            handleDisplayBall={handleDisplayBall}
            displayBall = {displayBall}
            />

      { displayBall ? 
      <Ball userText={userInput}  />
      : <> </>
      }
      
      <div className="joke-section">
        <p>Dads are coming to save (a little bit of) the day! ☂️</p>
        <button onClick={getJoke}>Get a Joke From Dads</button>
        <p>{ joke }</p>
      </div>
      

      <footer>
        <p>Created by Azalia Loeciano @ Juno College 2021</p>
        <p>Jokes taken from icanhazdadjoke API</p>
      </footer>

    </div> 

    
  );
}

export default App;

// Create a form to get users input 
// Add an event listener so when they hit submit, the input will be displayed on a separate section of the website


// A local method to make the third-party API call with user input
// Once we get a response from the API, we need to put the data we get back somewhere and use that data to update our page. We will use state.
// - when successful, update the website to display the joke


// Render the application
// - a ball
// - render/display users input on the ball
// - random dad joke on the bottom of page
