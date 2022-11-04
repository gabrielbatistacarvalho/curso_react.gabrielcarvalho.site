import logo from './logo.svg';
import './App.css';
import HelloWorld from './componets/HelloWorld';
import Frase from './componets/Frase';

function App() {

  const name  = 'Gabriel'

  const newName = name.toUpperCase()

  function sun(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/450x300"

  return (
    <div className="App">
      <h1>Olá {newName}!</h1>
      <Frase />
      <p>Meu primeiro APP!</p>
      <p>Soma: {sun(3, 3)}</p>
      <Frase />
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
