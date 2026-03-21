import players from './ListOfPlayers'

export default function App() {
  return (
    <div>
      {players.map((e) => (
        <div key={e.id}>
          <img src={e.link} alt={e.name} />
        </div>
      ))}
    </div>
  )
}
