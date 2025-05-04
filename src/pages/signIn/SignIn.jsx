import React, { useState } from 'react'
import "./signIn.css"
import Input from '../../ui/input/Input';
import Header from '../../components/header/Header';
import { saveUser } from '../../apis/postData';
import { links } from '../../links';

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

    const signUp = async ()=> {
        if (name && email && location && password && confirm) {

            try{
                let id = await saveUser({
                    username: name,
                    email: email,
                    password: password
                })

                window.location.href = `profile/${id.user.id}`; 
            } catch (error){
                console.log(error)
            }
            // Redirect to another page
        } else {
            alert("Please fill in all fields.");
        }
    }


  return <>
    <Header links={links}/>
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

                <button onClick={()=> signUp()}>
                    Sign Up
                </button>

            </div>

            <p className='toSignUp'>Already a memeber? <a href="/signup">SignIn</a> instead.</p>
        </div>
    </main>
  </>
}

export default SignIn