import '../App.css'
import { ListTile } from './listTile'
import { Button } from './button'
import { Header } from './heade'
import { people } from '../people'

function App() {
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
        <Button />
      </div>
    </main>
  )
}

export default App
