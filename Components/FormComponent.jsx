import {Controller } from 'react-hook-form';
import {TextInput} from 'react-native'
import React from 'react';


export default function FormInput (formprop) 
{
    return(<Controller
        control= {formprop.control}
        render={({ field: { onChange, value } }) => (

            <TextInput
                onChangeText={value => onChange(value)}
                value={value}
                placeholder = {formprop.placeholder}
                multiline= {formprop.name === 'Address'? true:false}
                secureTextEntry = {formprop.placeholder === 'Password'? true:false}
            />

          )}
        name = {formprop.name}
        defaultValue =""
    />
    
    );
} 