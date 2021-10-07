import axios from 'axios';
import './styles/App.css';
import {  useState } from 'react';
import IntroText from './components/IntroText';
import Form from './components/Form';
import Ball from './components/Ball';
import DadJokes from './components/DadJokes';
import Footer from './components/Footer';


function App() {

  // states //
  const [joke, setJoke ] = useState('');
  const [ userInput, setUserInput ] = useState('')
  const [ displayBall, setDisplayBall ] = useState(false);
  
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

  // FORM - when users submit form //

  const handleSubmit = (e, userText) => {
      e.preventDefault();
      setUserInput(userText);
  }

  // BALL - when to display ball //

  const handleDisplayBall = (showBall) => {
    setDisplayBall(showBall)
  }

  return (
    <div className="stress-ball">
      
      <IntroText />

      <Form handleSubmit={handleSubmit}
            handleDisplayBall={handleDisplayBall}
            displayBall = {displayBall}
            />

      { displayBall ? 
        <Ball userText={userInput}  />
        : <> </>
      }
      
      <DadJokes joke={joke}
                getJoke={getJoke} />
      
      <Footer />

    </div> 
  );
}

export default App;
