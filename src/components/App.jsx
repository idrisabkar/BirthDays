import '../App.css'
import { ListTile } from './listTile'
import { Button } from './button'
import { Header } from './heade'
import { people_ } from '../people'
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(people_)
  function handleClick() {
    setPeople([])
  }
  return (
    <main className="container">
      <div>
        <Header />
        <div id="lisTiles">
          {people.map((person) => {
            const { name, age, imgSrc, id } = person
            return <ListTile name={name} age={age} image={imgSrc} key={id} />
          })}
        </div>
        <Button onClick={handleClick} />
      </div>
    </main>
  )
}

export default App
