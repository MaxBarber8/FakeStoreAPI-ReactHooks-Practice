import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home.jsx'
import Products from './pages/products.jsx'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/products/:id' element={<Products />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
