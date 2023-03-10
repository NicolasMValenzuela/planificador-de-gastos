import React, { useState } from 'react'
import { Error } from './Error'


export const Nuevopresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {


  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto=(e)=>{
      e.preventDefault()

      if (!presupuesto || presupuesto < 0){
          setMensaje('No es un presupuesto válido')
      }else{
        setMensaje('')
        setIsValidPresupuesto(true)
        
      }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input className='nuevo-presupuesto'
                type='number'
                placeholder = 'Añade tu presupuesto'
                value = {presupuesto}
                onChange = {(e)=> setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value = 'añadir presupuesto' />

            {mensaje && <Error  tipo='error'>{mensaje}</Error>}

        </form>
    </div>
  )
}
