
import './App.css'
import { Filters } from  './components/Filter'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Videos } from './components/Videos/Videos'


function App() {

  return (
    <>
      <Header />
      <main>
        <Menu />
        <div className="main">
          <Filters/>
          <Videos/>
        </div>
      </main>
    </>
  )
}

export default App