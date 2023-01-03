import {useState, useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Controlpresupuesto = ({presupuesto,
    gastos,
    setGastos,
    setPresupuesto,
    setIsValidPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0)

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() =>{
            const totalGastado = gastos.reduce((total, gasto)=>
            gasto.cantidad + total, 0
            )

            const totalDisponible = presupuesto - totalGastado;

            const nuevoPorcentaje = (((presupuesto- totalDisponible)/ presupuesto )*100).toFixed(2)
                
                setDisponible(totalDisponible)
                setGastado(totalGastado)
            
                setTimeout(() => {
                    setPorcentaje(nuevoPorcentaje)
                },500);

            
    }, [gastos])
    

    const formatearCantidad = (cantidad) =>{
       return cantidad.toLocaleString('en-US', {
            style:'currency',
            currency:'USD'
        })
    }
    const handleResetApp = () =>{
        const resultado = confirm('Deseas resetear la App de gastos? ')
        if (resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                value={porcentaje}
                styles = {buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626': '#3B82F6',
                    trailColor:'#F5F5F5',
                    textColor:'#3B82F6'
                })}
                text = {`${porcentaje}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <button className='reset-app'
            type='button'
            onClick={handleResetApp}>
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible <0 ? 'negativo': ''}`}>
                <span>Presupuesto disponible: </span> {formatearCantidad(disponible)}
            </p>

            <p>
                <span>Presupuesto gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default Controlpresupuesto