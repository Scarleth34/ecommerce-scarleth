import { createContext, useState,useEffect } from 'react';
const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);

    //agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity) => {
        if(cart.length === 0){
            setCart([{item: item,quantity: quantity}])            
        } else {            
            isInCart(item.id)?
            updateCart(item.id,quantity)            
            :
            setCart([...cart,{item: item,quantity: quantity}])
        }
        actualizoCantidad()
        actualizoPrecio()
    }
    
    //Modifico la cantidad
    const updateCart = (id,quantity) =>{
        let posUpdate = posInCart(id)
        let cartAux = cart         
       cartAux[posUpdate].quantity+=quantity
       setCart(cartAux)
       actualizoCantidad()
       actualizoPrecio()
   }

        //Remover un item del cart por usando su id
        const removeItem = (itemId) => {
            let posRemove = posInCart(itemId)
            let cartAux = cart
            cartAux.splice(posRemove,1)
            setCart(cartAux)
            actualizoCantidad()
            actualizoPrecio()
        }
        
   //Vacio el carrito
   const clear = () =>{
    setCart([])
    setCantidad(0)
    setPrecio(0)
}
    
    
    //Verifica si Existe en el carrito, devuelve false/true
    const isInCart =(id) =>{
        return cart.some(element => element.item.id === id)
    }

    //Devuelve la posición en el cart
    const posInCart =(id) =>{
        return cart.findIndex(element=>element.item.id===id)
    }

    const cantTotal = ()=>{
         return cantidad
    }
    
    const actualizoCantidad = () => {
        let total = cart.reduce((acc, cur) => {
            return cur.quantity + acc
        }, 0); 
        setCantidad(total)
    }

    const actualizoPrecio = () => {
        let total = cart.reduce((acc, cur) => {
            return (cur.item.price * cur.quantity) + acc
        }, 0);
        setPrecio(total);
    }

    useEffect(() => {
        actualizoCantidad();
        actualizoPrecio();
    });


    return (
        <CartContext.Provider value={{ cart, cantidad, precio, addItem,updateCart,removeItem,clear,isInCart,posInCart,cantTotal,actualizoCantidad,actualizoPrecio,setCart,setPrecio,setCantidad }}>
            {children}
        </CartContext.Provider>
    );
}

function CartConsumer({ defaultValue = [], children }) {
    return (
        <CartContext.Consumer>
            {children}
        </CartContext.Consumer>
    );
}

export { CartProvider, CartConsumer, CartContext };