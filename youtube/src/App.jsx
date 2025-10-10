
import './App.css'
import { Filters } from  './components/Filter'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Videos } from './components/Videos/Videos'
import { Router } from './routes'

function App() {

  return (
    <>
      <Header />
      <RouterApp>
        <main>
          <Menu />
          <div className="main">
            <Filters/>
            <Videos/>
          </div>
        </main>
      </RouterApp>
    </>
  )
}

export default App