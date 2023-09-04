import Citas from "./Citas";


const ListadoCitas = ()=> {
    return(

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h3 className="font-black text-3xl text-center">Listado Citas</h3>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus <span 
            className="text-indigo-600 font-bold"> Citas</span></p>
            
            <Citas/>
            
        </div>

    )
}

export default ListadoCitas;