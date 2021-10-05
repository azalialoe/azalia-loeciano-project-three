import axios from 'axios';
import './App.css';
import {  useState } from 'react';

import Ball from './Ball';
import { render } from '@testing-library/react';
import { useEffect } from 'react/cjs/react.development';

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
  const [userInput, setUserInput] = useState("")
    
  const handleSubmit = (e) => {
      e.preventDefault();
      setUserInput("");
  }

  useEffect(() => {
    render(<Ball userInput={userInput}/>);
  }, [])
  
  
  return (
    <div className="stress-ball">
      <h1>Virtual Stress Ball</h1>
      <p>Hi friends, this website is made to hopefully give you a teeny tiny bit break and reprieve from all the hustle and bustle that is your lives. Stress is a part of life, especially during this tough time. It's normal...until it's not. </p>
      <p><a href="https://www.camh.ca/en/health-info/mental-health-and-covid-19/coping-with-stress-and-anxiety">CAMH</a> has some excellent tips of coping with stress and anxiety. There's also <a href="takecare19.com">takecare19</a> that lists accessible and inclusive mental health resources.</p>  
      
      <p>Please take a great care of yourself and take as many breaks as you need!</p>
      
      <p>With love,</p>
      
      <p>Azalia</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput"></label>
        <textarea 
            placeholder="write something that's stressing you out right now (one at a time, please)"
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            />
        <button type="submit">Get Me My Ball!</button>
      </form>

      

      <p>Dads are coming to save (a little bit of) the day!</p>

      <button 
        onClick={getJoke}>Get a Joke From Dads</button>
      <p>{ joke }</p>

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
