import React, { useState } from 'react'
import "./signUp.css"
import Input from '../../ui/input/Input';
import Header from '../../components/header/Header';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputs = [
        {
            title: "Story Tile",
            placeHolder: "Email",
            setter: setEmail,
            value: email
        },
        {
            title: "Password",
            placeHolder: "Create password",
            setter: setPassword,
            value: password
        },
    ];

    const signIn = ()=> {
        if (email && password) {
            window.location.href = "profile/2";
        } else {
            alert("Please fill in all fields.");
        }
    }




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

                <button onClick={()=> signIn()}>
                    Sign Up
                </button>

            </div>

            <p className='toSignUp'>Don't have an account? <a href="/signin">SignUp</a> instead.</p>
        </div>
    </main>
  </>
}

export default SignUp