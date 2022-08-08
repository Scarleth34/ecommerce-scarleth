import './style.css';
import { ItemCountComponent } from '../ItemCountComponent/ItemCount';
import {  useState } from "react";
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


export const ItemDetailComponent = ({id, pictureURL, title, price, descripcion, stock}) => { 
    let [count, setCount] = useState(0);

    const context = useContext(CartContext);

    const onAdd=(quantity)=>{

        setCount(count+1)
        context.addItem({id,pictureURL, title, price, descripcion}, quantity)
    }


    return (            
        <div className="idc_cuerpo">   
            <img className="idc_cuerpo_img" src={`/${pictureURL}`} alt={title}/>
            <div className="idc_cuerpo_descripcion">
                    <h2 className="idc_title" >{title}</h2>
                    <h2 className="idc_precio">${price}</h2>
                    <h4 className="idc_descripcion">{descripcion}</h4>                     
                    <h4>{ count>0 ? <NavLink to={`/cart`}><Button variant="outlined" color="primary">Terminar mi compra</Button></NavLink>:<ItemCountComponent  stock={stock} initial={1} onAdd={onAdd}/>}</h4>
            </div> 
                        
           
        </div>
    );
}