import { Button, View ,Text } from 'react-native';
import FormInput from './FormComponent';
import {useForm} from 'react-hook-form';
import React from 'react';
import {RegisterSchema} from './SchemaComponent';
import { yupResolver } from '@hookform/resolvers/yup';
import {sendDataRegister} from './BackComponents/RegisterBackend'





export default function Register({navigation}) {

    const {control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(RegisterSchema)
      });
    
    const InputValues = [{name: "AgencyName", placeholder: "Agency Name"},{ name: "Name",placeholder: "Name"},
                        {name: "Password", placeholder: "Password"},{name: "ConfirmPassword", placeholder: "Confirm Password"},
                        {name: "Address", placeholder: "Address"},{name: "City", placeholder: "City"}, {name:"Area", placeholder :"Area"},
                        {name: "Code",placeholder: "Code"}]

    

    const onSubmit = (data) => {
        console.log(data);
        sendDataRegister(data).then((e)=>{
            if(e==="User Created Sucessfully")
             {
                console.log("Registered")
            }
        })
    }

    return(
            <View>
                <Button title="Login" onPress={()=> navigation.navigate('Login')} />
                {InputValues.map(({name,placeholder})=><>
                <FormInput  control ={control}  name = {name}  placeholder = {placeholder}/>
                {Boolean(errors[name]) && <Text>{errors[name]?.message}</Text>}
                </>)}
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
    );
}