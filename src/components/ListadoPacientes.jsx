import Paciente from "./Paciente";


const ListadoPacientes = ({pacientes, setpacientes})=> {
    return(

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus <span 
            className="text-indigo-600 font-bold">Pacientes </span></p>
            
            {
                pacientes.length === 0 ? 
                    <div className=" bg-red-500 border p-3 text-center mt-2 m1-10 rounded-x1">
                        <p className="text-white text-x1 uppercase">Aun no hay pacientes 
                        registrados</p>
                    </div> :
                    pacientes.map((paciente, index) => (
                        <Paciente
                            key={index} 
                            paciente={{...paciente, id: index}} 
                            pacientes={pacientes}
                            setpacientes={setpacientes}                        
                        />                    
                     ))

            }
         
            
        </div>

    )
}

export default ListadoPacientes;