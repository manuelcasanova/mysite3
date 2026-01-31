import './App.css'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Background from './components/Background'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <SelectedWork />
      <Background />
      <Footer />
    </div>
  )
}

export default App
