
import './App.css'
import Jogojuca from './components/Jogojuca'
import Pousada from './components/Pousada'
import Votar from './components/Votar'

function App() {

  return (
    <div className="App">
      <h1> 03 estados e componentes </h1>
      <Pousada />
      <Jogojuca />
      <Votar />

    </div>
  )
}

export default App
