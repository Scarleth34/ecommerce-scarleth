import "./style.css"
import { ItemComponent } from "../ItemComponent/Item"

export const ItemListComponent = ({ productos }) => {
	return (
		<div className="itemList">
			{productos
				.sort((a, b) => {
					if (a.categoria > b.categoria) {
						return 1
					}
					if (a.categoria < b.categoria) {
						return -1
					}
					// a must be equal to b
					return 0
				})
				.map((product) => (
					<ItemComponent
						key={product.id}
						idProducto={product.id}
						title={product.nombre}
						price={product.cantidad}
						pictureURL={product.img}
						category={product.categoria}
						descrip={product.descripcion}
					/>
				))}
		</div>
	)
}
