import Button from "./evento/Button"

function Evento({ numero }) {

    function primeiroEvento() {
        console.log(`Ativando o primeiro evento!`)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={primeiroEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )
}

export default Evento