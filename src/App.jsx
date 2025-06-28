
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/Menu/NavBar'
import { NoFound } from './components/NotFound/NoFound'
import { Inicio } from './components/Inicio/Inicio'
import { Segundo } from './components/Segundo/Segundo'
import { Tercero } from './components/Tercero/Tercero'
import { Cuarto } from './components/Cuarto/Cuarto'
import { EnviaCuarto } from './components/Cuarto/EnviaCuarto'
import { EnviaFound } from './components/NotFound/EnviaFound'
import { EnviaFoundOtro } from './components/NotFound/EnviaFoundOtro'




function App() {
 
  return (
    
    <> 
   
    <NavBar/>
    
   
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      
      <Route path='/Primero' element={<EnviaFound/>}/>
      <Route path='/Segundo' element={<Segundo/>}/>
      <Route path='/Tercero' element={<Tercero/>}/>
      <Route path='/Cuarto' element={<EnviaCuarto/>}/>
      <Route path='/error' element={<EnviaFoundOtro/>}/>

    </Routes>

  
    </>
  )
}

export default App
