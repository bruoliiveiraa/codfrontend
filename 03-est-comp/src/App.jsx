
import './App.css'
import Jogojuca from './components/Jogojuca'
import Pousada from './components/Pousada'
import Votar from './components/Votar'
import Feira from './components/Feira'  
import Media from './components/Media'
import Peso from './components/Peso'

function App() {

  return (
    <div className="App">
      <h1> 03 estados e componentes </h1>
      <Pousada />
      <Jogojuca />
      <Votar />
      <Feira />
      <Media />
      <Peso />

    </div>
  )
}

export default App
