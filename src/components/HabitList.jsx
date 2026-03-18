import React, { useState, useEffect, useRef } from 'react';
import HabitCard from './HabitCard';

function HabitList() {
    const [habits, setHabits] = useState(() => {
        const stored = localStorage.getItem('my-daily-habits');
        if (!stored) return [
            { id: 1, nome: 'Exercício', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
            { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
            { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
            { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água', meta: 7, ativo: true, diasFeitos: 6 },
        ];
        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    });

    const [form, setForm] = useState({
        novoNome: '',
        novaDescricao: '',
        novaCategoria: '',
    });

    const [erroNome, setErroNome] = useState('');
    const nomeInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        if (name === 'novoNome') {
            if (value.length > 0 && value.length < 3) {
                setErroNome('O nome deve ter pelo menos 3 caracteres.');
            } else {
                setErroNome('');
            }
        }
    };

    useEffect(() => {
        localStorage.setItem('my-daily-habits', JSON.stringify(habits));
    }, [habits]);

    useEffect(() => {
        document.title = `My Daily Habits — ${habits.length} hábito(s)`;
        console.log('useEffect rodou');
    }, [habits]);

    const removerHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id));
    };

    const adicionarHabit = (event) => {
        event.preventDefault();

        if (!form.novoNome.trim()) {
            alert('Informe um nome para o hábito.');
            return;
        }

        if (erroNome) {
            nomeInputRef.current?.focus();
            return;
        }

        const novoHabit = {
            id: Date.now(), 
            nome: form.novoNome,
            descricao: form.novaDescricao, 
            ativo: true,
            diasFeitos: 0,
            categoria: form.novaCategoria || 'Geral',
        };

        setHabits(prev => [...prev, novoHabit]);
        setForm({ 
            novoNome: '',
            novaDescricao: '',
            novaCategoria: '',
        });
        nomeInputRef.current?.focus();
    };

    return (
        <section>
            <form onSubmit={adicionarHabit} className="habit-form">
                <div>
                    <label>
                        Nome do hábito *
                        <input
                            type="text"
                            name="novoNome"
                            value={form.novoNome}
                            onChange={handleChange}
                            ref={nomeInputRef}
                        />
                    </label>
                    {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
                </div>
                <div>
                    <label>
                        Descrição
                        <input
                            type="text"
                            name="novaDescricao"
                            value={form.novaDescricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Categoria
                        <input
                            type="text"
                            name="novaCategoria"
                            value={form.novaCategoria}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Adicionar hábito</button>
            </form>
            <ul>
                {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}
                {habits.map((habit) => (
                    <HabitCard
                        key={habit.id}
                        nome={habit.nome}
                        descricao={habit.descricao}
                        meta={habit.meta}
                        ativo={habit.ativo}
                        diasFeitos={habit.diasFeitos}
                        onRemover={() => removerHabit(habit.id)}
                    />
                ))}
            </ul>
        </section>
    );
}


export default HabitList
