import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


function Form(){
    const schema = yup.object().shape({
        email: yup.string().email("Digite um e-mail válido").required("Campo obrigatório"),
        password: yup.string().min(8,"Mínimo 8 caracteres").required("Campo obrigatório"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
       } = useForm({resolver: yupResolver(schema)})
    
    const user = (data) =>{
        console.log(data)}

    return(
        <form onSubmit={handleSubmit(user)}>
            <Input
            type="email"
            name="email"
            register={register} 
            error={ errors.email?.message }/>

            <Input 
            type="password"
            name="password"
            register={register}
            error={ errors.password?.message }
            />

        
            <Button type="submit" title="ENTRAR"  />


        </form>
    )
}
export default Form