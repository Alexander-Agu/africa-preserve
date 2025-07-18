import axios from "axios";


export const saveUser = async (data)=>{
    try{
        let res = await axios.post('http://127.0.0.1:5000/api/signup', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.user)
        return res.data.user.id;
    } catch(error){
        console.log(error)
    }
}

export const savePost = async (data)=> {
    try{
        let res = await axios.post('http://127.0.0.1:5000/api/posts', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}