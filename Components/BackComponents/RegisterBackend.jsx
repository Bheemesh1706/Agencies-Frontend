import axi from 'axios'
import API_HOST from './Config'

const sendDataRegister = async(data)=> {
            
    try{ 
            console.log("register_axiso")
                 console.log(data)
                   const response = await axi.post(`${API_HOST}/users`, {
                        Name: data.Name,
                        Agency: data.AgencyName,
                        password: data.Password,
                        Area: data.Area,
                        City: data.City,
                        Address: data.Address,
                    })
                 return response.data.success_message
        }
    catch(error){console.log(error.response) } 
}

 