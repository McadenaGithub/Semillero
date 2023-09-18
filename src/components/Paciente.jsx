const Paciente = ({paciente, pacientes, setpacientes}) => {
    console.log(paciente)
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter((pacienteState, index) => index !==
         id);

        setpacientes(pacientesActualizados)
    }
    return(
        
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="text-2x1 font-bold mb-3 text-gray-700 uppercase">Nombre:<span className="front-normal normal-case"> {nombre}</span></p>
            <p className="text-3x1 font-bold mb-3 text-gray-700 uppercase">Propietario:<span className="front-normal normal-case"> {propietario}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:<span className="front-normal normal-case"> {email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:<span className="front-normal normal-case"> {fecha}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="front-normal normal-case"> {sintomas}</span></p>

            <button type="button" className="bg-red-500 p-3 text-white rounded-md
            uppercase hover:bg-red-600" onClick={() => { eliminarPaciente(id)}}>Eliminar</button>

        </div>
    )

}
export default Paciente;