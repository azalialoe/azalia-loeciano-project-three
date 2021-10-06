import {useState} from 'react'


function Form(props) {

    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleStartBall = (e) => {
        props.handleSubmit(e, userInput)
        props.handleDisplayBall(true)
    }

    const handleResetForm = () => {
        setUserInput('')
        props.handleDisplayBall(false)
    }

    return(
        <>

            <form onSubmit={(e) => handleStartBall(e)}>
                <label htmlFor="userInput"></label>
                <textarea 
                    placeholder="something that's stressing you out right now"
                    id="userInput"
                    value={userInput}
                    onChange={handleChange}
                    maxLength= {180}
                    />
                    {
                        props.displayBall ?
                        <></>
                        :  <button type="submit">Get Me My Ball!</button>
                    }
                    <p>Characters count: {userInput.length} / 180</p>

                    {
                        props.displayBall ?
                        <button className="resetButton" onClick = {() => handleResetForm()}>Reset Form</button>
                        : <></>

                    }
            </form>
            

            

        </>
        
    )
    

}

export default Form


