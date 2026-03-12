import HabitCard from "./HabitCard";

function HabitList({ habits }) {
    if (!habits) return null

    if (habits.length === 0) {
        return <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
    }

    return (
        <ul>
            {habits.map( ( habits) => (
                <HabitCard
                    key={habits.id}
                    titulo={habits.titulo}
                    meta={habits.meta}
                    ativo={habits.ativo}
                    diasFeitos={habits.diasFeitos}
                />
            ))}
        </ul>
    )
}

export default HabitList