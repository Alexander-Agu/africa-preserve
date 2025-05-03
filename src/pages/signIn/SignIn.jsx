import React, { useState } from 'react'
import "./signIn.css"
import Input from '../../ui/input/Input';

function SignIn() {
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




  return (
    <main className='signInApp'>
        <div className="signInContainer">
            <h1>
                Sign Up
            </h1>

            <div className="signInForm">
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

            <p className='toSignUp'>Already a memeber? <a href="#">SignIn</a> instead.</p>
        </div>
    </main>
  )
}

export default SignIn