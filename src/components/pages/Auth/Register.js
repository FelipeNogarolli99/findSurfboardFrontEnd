import Input from "../../form/input"
import styles from "../../form/form.module.css"
import { Link } from "react-router-dom"


function Register(){

    function handleChange(e){
    
    }

    return(
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form>
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
                placeholder="Digite o sua senha"
                handleOnChange={handleChange}
                />
                <Input
                text="Confirme sua senha"
                type="password"
                name="password"
                placeholder="Digite o sua senha"
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