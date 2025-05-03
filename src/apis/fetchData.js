import axios from "axios"



export const getUser = async (data)=> {
    try{
        let res = await axios.post('http://127.0.0.1:5000/login', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
    return res.data
    } catch (error){
        console.log(error)
    }
}