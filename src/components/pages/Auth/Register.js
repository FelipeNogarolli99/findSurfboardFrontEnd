import Input from "../../form/input"
import styles from "../../form/form.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"

import { Context } from "../../../context/UserContext"


function Register(){

    //objeto para guardar o status 
    const [user, setUser] = useState({}) //passando um objeto vazio

    function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value }) 
    }

    function handleSubmit(e){
        e.preventDefault()
        //enviar o usuario para o banco
        console.log(user)
    }

    return(
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                handleOnChange={handleChange}
                />
                <Input
                text="Telefone"
                type="text"
                name="phone"
                placeholder="Digite o seu telefone"
                handleOnChange={handleChange}
                />
                <Input
                text="Email"
                type="email"
                name="email"
                placeholder="Digite o seu email"
                handleOnChange={handleChange}
                />
                <Input
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite a sua senha"
                handleOnChange={handleChange}
                />
                <Input
                text="Confirme sua senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme oasua senha"
                handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar"/>
               
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui</Link>
            </p>
        </section>
    )
}

export default Register