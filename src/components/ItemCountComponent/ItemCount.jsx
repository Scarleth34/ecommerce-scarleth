import './style.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export const ItemCountComponent = ({stock, initial, onAdd}) => {
    const[cant, setCant] = useState(initial)
    
    const quitarCantidad =()=>{
        setCant(cant<=0?cant-0:cant-1)
    } 
    const agregarCantidad =()=>{
        setCant(cant<stock?cant+1:cant+0)
    } 
 

    return (            
        <div className="Item">
            <div className="contador">
                <button onClick={quitarCantidad} className="contador__resta">-</button>
                <p className="contador__resultado"> {cant}</p>
                <button onClick={agregarCantidad} className="contador__suma">+</button>
            </div>
            <div className="item_add">
                <Button onClick={()=>onAdd(cant)} variant="outlined" color="primary">
                Agregar al Carrito
                </Button>
            </div>
        </div>
    );
}