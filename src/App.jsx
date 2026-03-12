import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BemVindo from './components/BemVindo'

function App() {
  return (
    <div>
      <Header 
      titulo="My Daily Habits" 
      descrição="Gerencie seus hábitos diários de forma simples e visual" />

      <BemVindo
        nomeUsuario= "Luiza"
        totalHabitos= {564}
        />

      <Footer />
    </div>
  )
}

export default App