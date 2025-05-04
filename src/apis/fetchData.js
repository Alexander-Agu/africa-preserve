import axios from "axios"



export const getUser = async (data)=> {
    try{
        let res = await axios.post('http://127.0.0.1:5000/login', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
    console.log(res.data.user)
    return res.data.user.id
    } catch (error){
        console.log(error)
    }
}


export const getUserById = async (id) => {
    try{
        let res = await axios.get(`http://127.0.0.1:5000/api/users/${id}`);
        console.log(res.data)
        return res.data
    } catch (error){
        console.log(error);
    }
}

export const getPosts = async ()=> {
    try{
        let res = await axios.get('http://127.0.0.1:5000/api/posts')
    return res.data
    } catch (error){
        console.log(error)
    }
}