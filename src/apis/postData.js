import axios from "axios";


export const saveUser = async (data)=>{
    try{
        let res = await axios.post('http://127.0.0.1:5000/api/signup', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
        console.log(res.data)
        return res.data;
    } catch(error){
        console.log(error)
    }
}

export const savePost = async ()=> {
    try{

    } catch (error) {
        console.log(error);
    }
}