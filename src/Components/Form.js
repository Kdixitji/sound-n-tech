import React from 'react'
import "./FormStyles.css";

const Form = () => {
  return (
    <div className='body'>
        <div className="form">
        <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Enter your Mail"></input>
            <input type="text" placeholder="Subject"></input>
            <textarea rows="6" placeholder="Type Your Message here"></textarea>
        <   button className="btn" type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form