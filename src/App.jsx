import './App.css'
import { MyNav } from './components/My-Nav/My-Nav'
import { Container } from 'react-bootstrap'
import { Shop } from './pages/shop/Shop';
import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <MyNav/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
