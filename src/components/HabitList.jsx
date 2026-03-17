import { useState, useEffect } from 'react';
import HabitCard from './HabitCard';

function HabitList() {
    const [habits, setHabits] = useState

    useEffect(() => {
  document.title = 'My Daily Habits — '${habits.length}' hábito'(s)
  console.log('useEffect rodou')
})

    const removerHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id))
}
       
    return (
        <ul>
            {habits.length === 0 && <p>Nenhum cadastrado ainda. Que tal começar?</p>}

            {habits.map((habit) => (
                <HabitCard
                key={habit.id}
                nome={habit.nome}
                descrição={habit.descrição}
                meta={habit.meta}
                ativo={habit.ativo}
                diasFeitos={habit.diasFeitos}
                onRemover={ () => removerHabit (habit.id) }
            />
            ))}
        </ul>
    )
}

const [novoNome, setNovoNome] = useState('')
const [novaDescricao, setNovaDescricao] = useState('')
const [novaCategoria, setNovaCategoria] = useState('')

const adicionarHabit = (event) => {
    event.preventDefault()

    if (!novoNome.trim()) {
        alert ('Informe um nome para o hábito.')
        return
    }

    const novoHabit = {
        id: Date.now(),
        nome: novoNome,
        descrição: novaDescricao,
        meta: 7,
        ativo: true,
        diasFeitos: 0,
        categoria: novaCategoria || 'Geral',
    }

    setHabits([...habits, novoHabit])
    

    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')

return (
    <section>
    <form onSubmit={adicionarHabit} className="habit-form">
            <div>
                <label>
                    Nome do hábito *
                    <input 
                    type="text"
                    value={novoNome}
                    onchange={ (e) => setNovoNome(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Descrição
                    <input
                    type="text"
                    value={novaDescricao}
                    onChange={ (e) => setNovaDescricao(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Categoria
                    
                </label>
            </div>
        </form>
    </section>
)
}
export default HabitList
