import "./style.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "@material-ui/core"

export const CartComponent = () => {
	const context = useContext(CartContext)

	const eliminarItem = (id) => {
		context.removeItem(id)
	}

	return (
		<div>
			<h1>Revisa tu carrito de compras</h1>
			<div className={context.cart.length === 0 ? "cartVacio" : "oculto"}>
				<h3>El carrito esta vacio</h3>
				<NavLink to={`/`} className="volver">
					<h2>Volver Al inicio</h2>
				</NavLink>
			</div>
			<div className="unItem">
				<p>Cantidad de Productos: {context.cantidad}</p>
				<ul className={context.cart.length !== 0 ? "cart" : "oculto"}>
					{context.cart.map((element) => {
						return (
							<li className="cart__item" key={element.item.id}>
								<img
									src={element.item.pictureURL}
									alt={element.item.title}
									className="cart__item__img"
								/>
								<div className="cart__item__desc">
									<h3 className="cart__item__title">{element.item.title}</h3>
									<p className="cart__item__cant">
										Cantidad: {element.quantity}
									</p>
									<p className="cart__item__price">
										Precio por Unidad: {element.item.price} $
									</p>
									<p className="cart__item__totalPrice">
										Precio total: {element.item.price * element.quantity} $
									</p>
									<button onClick={() => eliminarItem(element.item.id)}>
										🗑️
									</button>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="unItem" style={{ textAlign: "center", padding: "2rem" }}>
				<p>Total a pagar</p>
				<h2>{context.precio}</h2>
				<NavLink to={`/checkout`} className="unLink">
					<Button variant="contained" color="secondary">
						Ir a pagar
					</Button>
				</NavLink>
			</div>
		</div>
	)
}
