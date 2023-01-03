import React from 'react'
import Controlpresupuesto from './Controlpresupuesto'
import { Nuevopresupuesto } from './Nuevopresupuesto'

export const Header = ({ presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
  setGastos   }) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
          <Controlpresupuesto 
              setIsValidPresupuesto = {setIsValidPresupuesto}
              setGastos = {setGastos}
              presupuesto = {presupuesto}
              gastos = {gastos}
              setPresupuesto = {setPresupuesto}/>

        ): (<Nuevopresupuesto 
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
          />)}
        
    </header>
  )
}
