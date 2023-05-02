import { useState, useId } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import './calc.css' */
import './firebase'
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import CuerpoTabla from './CuerpoTabla';
import TablaClientes from './TablaClientes';



function App() {
  const [nombre, setNombre] = useState("")
  const [tipoImpresion, setTipoImpresion] = useState("DTF")
  const [estadoImpresion, setEstadoImpresion] = useState("En Espera")
  const [precio, setPrecio] = useState(0)
  const [datos, setDatos] = useState([])

  const handlerNombre = (e) => {
    e.preventDefault()
    setNombre(e.target.value)
  }
  const handlerPrecio = (e) => {
    e.preventDefault()
    setPrecio(e.target.value)

  }
  const handlerTipoImpresion = (e) => {
    e.preventDefault()
    setTipoImpresion(e.target.value)

  }
  const handlerEstadoImpresion = (e) => {
    e.preventDefault()
    setEstadoImpresion(e.target.value)

  }
  const handlerBorrar = (e) => {

    let agregarDatos = datos.filter(element => element.id !== e.target.id)
    setDatos(agregarDatos)

  }
  const handlerEditar = (e) => {
    let agregarDatos = datos.filter(element =>
      element.id == e.target.id
    )
    let editar = agregarDatos.filter(element => {

      console.log(element)
      setNombre(element.nombre)
      setPrecio(element.precio)
      setTipoImpresion(element.tipoImpresion)
      setEstadoImpresion(element.estadoImpresion)
    }

    )


  }
  const onSubmitNombre = (e) => {
    e.preventDefault()

    const nuevosDatos = {
      id: uuidv4(),
      nombre: nombre,
      precio: precio,
      tipoImpresion: tipoImpresion,
      estadoImpresion: estadoImpresion,
    }
    setDatos([nuevosDatos, ...datos,])
    setNombre(e.target.value = "")
    setPrecio(e.target.value = 0)
    setTipoImpresion(e.target.value = "DTF")
    setEstadoImpresion(e.target.value = "En Espera")




  }
  const db = getFirestore();
  const agregarDocumento = async (nuevoDocumento) => {
    try {
      const docRef = await addDoc(collection(db, "mi-coleccion"), nuevoDocumento);
      console.log("Documento agregado con ID:", docRef.id);
    } catch (error) {
      console.error("Error al agregar el documento:", error);
    }
  };
  
  console.log(datos)
  return (
    <div className="calc container">
      <h3>Calculadora</h3>
      <form action="" onSubmit={onSubmitNombre}>
        <div>
          {nombre.toUpperCase()}
        </div>
        <div>

          {precio}
        </div>
        <div>

          {tipoImpresion}
        </div>
        <div>

          <input type="text" value={nombre} placeholder='Cliente' onChange={handlerNombre} />
        </div>
        <div>

          <input type="number" value={precio} placeholder='Precio' onChange={handlerPrecio} />
        </div>
        <select name="" id="" value={tipoImpresion} onChange={handlerTipoImpresion}>
          <option value="DTF" >DTF</option>
          <option value="UV">UV</option>
          <option value="Sublimacion">Sublimacion</option>
        </select>
        <select name="" id="" value={estadoImpresion} onChange={handlerEstadoImpresion}>
          <option value="En espera" >En espera</option>
          <option value="Aprobado">Aprobado</option>
          <option value="Impreso">Impreso</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Listo">Listo</option>
          <option value="Entregado">Entregado</option>
        </select>
        <input type="submit" value="Calcular" />
      </form>

      <div>
        <h2>Listado</h2>


      </div>
      <TablaClientes datos={datos}/>

    
    </div>
  )
}

export default App
