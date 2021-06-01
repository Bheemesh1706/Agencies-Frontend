import axi from 'axios'
import API_HOST from './Config'

const sendDataRegister = async(data)=> {
            
    try{ 
            console.log("register_axiso")
                 console.log(data)
                   const response = await axi.post(`${API_HOST}/users`, {
                        username: data.Username,
                        email: data.Email,
                        password: data.Password,
                    })
                 return response.data.success_message
        }
    catch(error){console.log(error.response) } 
}

