import React, { useState } from 'react'
import "./submit.css"
import Header from '../../components/header/Header'
import Input from '../../ui/input/Input';

function Submit() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [story, setStory] = useState("");

  const questions = [
    {
        title: "Story Tile",
        placeHolder: "Enter the story title",
        setter: setTitle,
        value: title
    },
    {
        title: "Story teller name",
        placeHolder: "Who is the story teller?",
        setter: setName,
        value: name
    },
    {
        title: "Specific Location",
        placeHolder: "Country, City, Village etc..",
        setter: setLocation,
        value: location
    },
    {
        title: "Language",
        placeHolder: "Sotho, Zulu, Xhosa etc...",
        setter: setLanguage,
        value: language
    },
  ];

  return <>
    <Header />

    <main className='submitApp'>
      <h1 className='submitIntro'>Share Your Heritage</h1>
      <p className='submit1stText'>
          Contribute to preserving Africa's rich cultural heritage by sharing stories, traditions, and histories that have been passed down through generations.
      </p>

      <section className='submitForm'>
        <div className="formDetails">
            {
              questions.map(x => {
                const {title, placeHolder, setter, value} = x;

                return <Input 
                  title={title}
                  placeholder={placeHolder}
                  setter={setter}
                  value={value}
                />
              })
            }
        </div>

        <div className="storyContainer">
          <textarea name="Alex" id="submit text Area" rows="4" cols="50" placeholder='Tell your story' style={{width: "90%"}}></textarea>
        </div>


        <div className="userMessage">
          <h2>Important!</h2>
          <p>
            By submitting this story, you confirm that you have the right to share this content, and you agree to our community guidelines. Stories will be reviewed by moderators before being published.
          </p>
        </div>

        <div className="submitBTN">
          <button>
            Submit
          </button>
        </div>
      </section>

    </main>
  </>
}

export default Submit