import axi from 'axios'
import {API_HOSTS} from './Config'

const sendDataLogin = async(data)=> {
            
    try{ 
            console.log("register_axiso")
            console.log(data.Password)
                 console.log(data)
                   const response = await axi.post(`${API_HOSTS}/login`, { agency: {
                        password: data.Password,
                        Code: data.Code,
                    }})
                 return response.data.success_message
        }
    catch(error){console.log(error.response.data) } 
}

export {sendDataLogin}