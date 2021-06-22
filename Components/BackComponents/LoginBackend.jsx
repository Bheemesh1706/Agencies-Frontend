import axi from 'axios'
import {API_HOST} from './Config'


const sendDataLogin = async(data)=> {
            
    try{ 
            console.log("login_axiso")
                 console.log(data)
                   const response = await axi.post(`${API_HOST}/login`, { agency: {
                        password: data.Password,
                        Code: data.Code,
                    }})
                 return response.data.success_message
        }
    catch(error){console.log(error.response.data) } 
}


export {sendDataLogin}