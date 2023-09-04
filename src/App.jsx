import ListadoPacientes from "./components/ListadoPacientes"
import ListadoCitas from "./components/ListadoCitas"
import Formulario from "./components/Formulario"
import Header from "./components/Header"

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
        <ListadoCitas/>

      </div>

    </div>
  )
}

export default App
