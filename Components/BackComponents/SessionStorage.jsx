import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (name,value) => 
                {

                    try {
                        await AsyncStorage.setItem(name, value)
                    } 
                    catch (e) {
                        console.log('Session Error')
                    }
                }


const getData = async (name) => 
                {
                    try {
                            const value = await AsyncStorage.getItem(name)
                            if(value !== null) 
                            {
                                return value
                            }
                        } 
                    catch(e) 
                        {
                            console.log('Session Error')
                        }
                }
                  
                  

export {storeData,getData}

