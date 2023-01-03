import cerrarBTN from '../img/cerrar.svg'
import { useState, useEffect } from 'react'
import { Error } from './Error'

export const Modal = ({setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre]= useState('')
    const [cantidad, setCantidad]= useState(0)
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')


    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])
    

    const ocultarModal = ()=>{
        
        setGastoEditar({})
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)
        },500)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('todos los campos son obilgatorios')
            return
        }

        guardarGasto({nombre, cantidad , categoria, id, fecha})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={cerrarBTN}
            alt = 'cerrar modal'
            onClick = {ocultarModal} />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar': 'cerrar'}`}>
            <legend> {gastoEditar.nombre ? 'Editar Gasto':'Nuevo Gasto'}</legend>
            {mensaje && <Error  tipo = 'error'>{mensaje}</Error>}

            <div className='campo'>
                <label htmlFor='nombre'> Nombre Gasto </label>

                <input 
                id='nombre'
                type='text'
                placeholder = 'añade el nombre del gasto' 
                value = {nombre}
                onChange = {e => setNombre(e.target.value)}/>
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'> Cantidad </label>

                <input 
                id='cantidad' 
                type='number' 
                placeholder = 'añade la cantidad del gasto'
                value = {cantidad}
                onChange = {e => setCantidad(Number(e.target.value))}/>
            </div>

            <div className='campo'>
                <label htmlFor='categoria'> Categoria </label>

                <select id='categoria'
                value = {categoria}
                onChange = {e => setCategoria(e.target.value)}
                    >
                    <option value = ''>-- Seleccione --</option>
                    <option value = 'ahorro'>ahorro</option>
                    <option value = 'comida'>comida</option>
                    <option value = 'casa'>casa</option>
                    <option value = 'gastos'>gastos varios</option>
                    <option value = 'ocio'>ocio</option>
                    <option value = 'salud'>salud</option>
                    <option value = 'suscripciones'>suscripciones</option>
                </select>
                <input 
                    type ='submit'
                    value = {gastoEditar.nombre? 'Guardar cambios':'Añadir gasto'}/>
                
            </div>
        </form>

    </div>
  )
}
