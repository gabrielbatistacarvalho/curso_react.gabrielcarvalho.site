function Form() {

    function cadastarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o Usuário!" )
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form