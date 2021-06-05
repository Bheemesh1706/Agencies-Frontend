import { Button, View ,Text } from 'react-native';
import FormInput from './FormComponent';
import {useForm} from 'react-hook-form';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema} from './SchemaComponent';
import {sendDataLogin} from './BackComponents/LoginBackend'

export default function Login() {

    const {control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(LoginSchema)
      });
    
    const InputValues = [{ name: "Code",placeholder: "Code"},{name: "Password", placeholder: "Password"}]

    

    const onSubmit = (data) => {
        console.log(data);
        sendDataLogin(data).then((e)=>{
            if(e==="Login Sucessfully")
             {
                console.log("Logged in")
            }
        })
    }

    return(
            <View>
                {InputValues.map(({name,placeholder})=><>
                <FormInput  control ={control}  name = {name}  placeholder = {placeholder}/>
                {Boolean(errors[name]) && <Text>{errors[name]?.message}</Text>}
                </>)}
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
    );
}