import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import BemVindo from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import HabitList from './components/HabitList'
import { HabitsContext, HabitsProvider } from './contexts/HabitsContext'


function App() {
  return (
    <HabitsProvider>
      <div>
        <Header titulo="My Dayli Habits" descricao="Construindo uma rotina melhor."/>
        <BemVindo nomeUsuario="Turma Iteam" />
        <SecaoHabitos titulo="Meus Hábitos">
          <HabitList/>
        </SecaoHabitos>
        <Footer/>
      </div>
    </HabitsProvider>
  )
}

export default App