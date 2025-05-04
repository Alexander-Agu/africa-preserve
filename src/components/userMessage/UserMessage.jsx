import React, { useState } from 'react'
import "./userMessage.css"
import { useParams } from 'react-router-dom';

function UserMessage() {
    const { userId } = useParams();
    let message = ""

    if (userId === "1"){
        message = "Digital Library Updated. Your story helps keep Africa’s heritage alive. Thank you!"
    } else if (userId === "2"){
        message = "Post Not Published. Unfortunately, your submission didn’t meet our cultural fact-check guidelines.";
    }
  return (
    <section className='userMessageApp'>

        <h1>
            {message}
        </h1>

        <div className="userRes">
            <a href="/" className='userHome'>Return home</a>
            <a href="/submit" className='userSubmit'>Share Again</a>
        </div>

    </section>
  )
}

export default UserMessage