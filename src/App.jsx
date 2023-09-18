import { useState, useEffect } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import ListadoCitas from "./components/ListadoCitas"
import Formulario from "./components/Formulario"
import Header from "./components/Header"


function App() {

  const [pacientes, setpacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) || []
  )

  

  const guardar = () => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }

  
  


  useEffect(() => {
    guardar()
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setpacientes={setpacientes}/>
        <ListadoPacientes pacientes={pacientes} setpacientes={setpacientes}/>
        <ListadoCitas/>

      </div>

    </div>
  )
}

export default App
