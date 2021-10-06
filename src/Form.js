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
                    placeholder="write something that's stressing you out right now (one at a time, please)"
                    id="userInput"
                    value={userInput}
                    onChange={handleChange}
                    />
                    {
                        props.displayBall ?
                        <></>
                        :  <button type="submit">Get Me My Ball!</button>
                    }
               
            </form>

            {
                props.displayBall ?
                <button onClick = {() => handleResetForm()}>Reset Form</button>
                : <></>

            }

        </>
        
    )
    

}

export default Form
