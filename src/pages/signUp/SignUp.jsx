import React, { useState } from 'react'
import "./signUp.css"
import Input from '../../ui/input/Input';
import Header from '../../components/header/Header';
import { getUser } from '../../apis/fetchData';
import { links } from '../../links';

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

    const signIn = async ()=> {
        if (email && password) {
            try{
                let user = await getUser({
                    username: email,
                    password: password
                })

                window.location.href = `profile/${user.user.id}`;
            } catch(error){
                console.log(error);
            }

        } else {
            alert("Please fill in all fields.");
        }
    }



  return <>
    <Header links={links}/>
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