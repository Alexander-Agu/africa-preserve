import React, { useEffect, useState } from 'react'
import "./profile.css"
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom';
import { getUserById } from '../../apis/fetchData';

function Profile() {
    const { profileId } = useParams();
    console.log(profileId)
    const [data, setData] = useState([]);
    const [displayName, setDisplayName] = useState("")
    
  const links = [
    {
      link: "/",
      name: "Logout"
    }
  ]

useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await getUserById(profileId);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUser();
}, [profileId]);

  return <>
    <Header links={links} />
    <main className='profileApp'>
        <section className="profileHeader">
            <h1>Hey, {data.username}</h1>
            <h2>Welcome to your Africa preserve Profile</h2>

            <div className="profileMessage">
                <p className='rP'>
                    Here you can...
                </p>

                <p className='lP'>
                    You are currently on a free Plan
                </p>
            </div>
        </section>


        <section className='profileContainer'>
            <p>
                Get your API Endpoint to access our library today!
            </p>

            <div className="pContainerHeader">
                <h2>
                    Endpoint
                </h2>
                <h2>
                    Status
                </h2>
                <h2>
                    Date
                </h2>

                <p>
                    https/asdsdfertgbtrytgfeqdf.....
                </p>

                <p>
                    Active
                </p>

                <p>
                    04/25
                </p>
            </div>

        </section>
    </main>
  </>
}

export default Profile