
import './App.css'
import Jogojuca from './components/Jogojuca'
import Pousada from './components/Pousada'
import Votar from './components/Votar'
import Feira from './components/Feira'  
import Media from './components/Media'
import Peso from './components/Peso'
import Ganso from './components/Ganso'
import Marujos from './components/Marujos'
import Fumaça from './components/Fumaça'

function App() {

  return (
    <div className="App">
      <h1> 03 estados e componentes </h1>

      <h2>#0030</h2>

      <Ganso />
      <Marujos />
      <Fumaça />

      <hr />

      <h2>#0027.sq05</h2>

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
