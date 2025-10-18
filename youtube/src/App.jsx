import './App.css'
import { RouterApp } from './routes'
import { AppProvider } from './content/AppContent'

function App() {

  return (
    <>
      <AppProvider>
        <RouterApp/>
      </AppProvider>
    </>
  )
}

export default App