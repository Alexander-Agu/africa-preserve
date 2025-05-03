import React, { useState } from 'react'
import "./signUp.css"
import Input from '../../ui/input/Input';
import Header from '../../components/header/Header';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const inputs = [
        {
            title: "Story teller name",
            placeHolder: "Username",
            setter: setName,
            value: name
        },
        {
            title: "Story Tile",
            placeHolder: "Email",
            setter: setEmail,
            value: email
        },
        {
            title: "Specific Location",
            placeHolder: "Country, City, Village etc..",
            setter: setLocation,
            value: location
        },
        {
            title: "Password",
            placeHolder: "Create password",
            setter: setPassword,
            value: password
        },
        {
            title: "Password",
            placeHolder: "Cornfirm password",
            setter: setConfirm,
            value: confirm
        },
    ];




  return <>
    <Header />
    <main className='signUpApp'>
        <div className="signUpContainer">
            <h1>
                Sign In
            </h1>

            <div className="signUpForm">
                {
                    inputs.map(x => {
                        const {placeHolder, setter, value, title } = x

                        return <Input
                            title={""}
                            placeholder={placeHolder}
                            setter={setter}
                            value={value}
                        />
                    })
                }

                <button>
                    Sign Up
                </button>

            </div>

            <p className='toSignUp'>Don't have an account? <a href="/signin">SignUp</a> instead.</p>
        </div>
    </main>
  </>
}

export default SignUp