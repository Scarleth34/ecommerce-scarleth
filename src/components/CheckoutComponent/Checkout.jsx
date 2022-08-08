import './style.css';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {getFirestore} from '../../firebase'
import firebase from "firebase/app";
import { Button } from '@material-ui/core';

export const CheckoutComponent = () => {    
    const context = useContext(CartContext); 
    const [userInfo, ] = useState({ name: 'Rodrigo', phone: '11222334', email: 'rod@gmail.com' });
    const [, setIdCompra] = useState("");
    
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      
      const buy = () => {
        const db = getFirestore();
        const comprasCollection = db.collection('compras');//seteo coleccion

        let items = context.cart.map(
            (obj) => {
                return {
                    id: obj.item.id,
                    title: obj.item.title,
                    quantity: obj.quantity,
                    price: obj.item.price,
                };
            }
        )

        const nuevaCompra = {
            buyer: userInfo,
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: context.precio
        }
          //grabamos en firebase
          console.log(nuevaCompra)
          comprasCollection.add(nuevaCompra).then(({id})=>{
              console.log("Su ID de compra es:")
              console.log(id)
              setIdCompra(id)
          }).catch(err=>{console.log(err)})
            .finally(()=>{console.log("finally")})

      }

  const classes = useStyles();
    
  return (
        <div> 
            <h1>Completa los datos:</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="name" label="Nombre" />
                <TextField id="email" label="Email" />
                <TextField id="phone" label="Telefono" />
                <Button variant="contained" color="primary" onClick={()=>buy()}>
                Finalizar Compra
                </Button>
            </form>            
        </div>
    );
}