import './style.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


export const CartWidgetComponent = () => {
    const context = useContext(CartContext);

    return (
			<div className={context.cart.length !== 0 ? "widgetCart" : "oculto"}>
				<div className="widgetCart__icon">
					<ShoppingCartIcon />
				</div>
				<p className={context.cart.length !== 0 ? "contador" : "oculto"}>
					{context.cantidad}
				</p>
			</div>
		)
}