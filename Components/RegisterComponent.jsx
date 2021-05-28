import { Text, View } from 'react-native';
import FormInput from './FormComponent';
import {useForm} from 'react-hook-form';
import React from 'react';



export default function Register() {

    const {control, handleSubmit, formState: {errors} } = useForm();

    return(
            <View>
                <FormInput  control ={control}  name = "FirstName"  placeholder = "Name"/>
            </View>
    );
}