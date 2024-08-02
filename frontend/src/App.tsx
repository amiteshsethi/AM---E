import './App.css'
import Header from './components/Header';
import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import { Chat } from './pages/Chat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/chat' element={ <Chat />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/signup' element={ <Signup />} />
        <Route path='*' element={ <Notfound />} />
      </Routes>
    </main>
  )
}

export default App
