import 'bootstrap/dist/css/bootstrap.min.css'
import Particulas from '../components/particulas'
import Moon from '../images/moon.png'
import '../styles/moon.css'
import '../styles/queryNotFound.css'
import Astronauta from '../images/astro.png'

const NotFound = () => (
  <>
  <Particulas />
    <h1 className="perd">¿Perdido?</h1>
    <div> <img src={Astronauta} className="astro"/> </div>
    <img src={Moon} className="moon" />
  </>
)

export default NotFound
