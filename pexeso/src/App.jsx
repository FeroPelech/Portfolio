import React, { useState } from 'react'
import players from './ListOfPlayers'

export default function App() {
  players.map((e) => {
    console.log(e)
  })
  return (
    <div>
      <img src={players[0].link} alt={players[0].name} />
    </div>
  )
}
