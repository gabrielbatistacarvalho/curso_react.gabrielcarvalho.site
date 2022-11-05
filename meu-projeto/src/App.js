import logo from './logo.svg';
import './App.css';
import Evento from './componets/Evento';
import Form from './componets/Form';

function App() {

  const name  = 'Gabriel'

  const newName = name.toUpperCase()

  function sun(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/450x300"

  return (
    <div className="App">
      <h1>Testando evento!</h1>
      <Evento numero={1} />
      <Evento numero={2} />
      <Form />
    </div>
  );
}

export default App;
