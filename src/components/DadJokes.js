function DadJokes(props)  {
    return (
        <div className="joke-section">
            <p>Dads are coming to save (a little bit of) the day! ☂️</p>
            <button onClick={props.getJoke}>Get a Joke From Dads</button>
            <p>{ props.joke }</p>
      </div>
    )
}

export default DadJokes;