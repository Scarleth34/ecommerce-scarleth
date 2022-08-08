import { ItemDetailComponent } from "../../components/ItemDetailComponent/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./style.css"

import { getFirestore } from "../../firebase"

export const ItemDetailContainer = () => {
	let [id, setId] = useState([])
	let [pictureURL, setPictureURL] = useState([])
	let [title, setTitle] = useState([])
	let [price, setPrice] = useState([])
	let [descripcion, setDescripcion] = useState([])
	let [stock, setStock] = useState(0)
	const { idProducto } = useParams()

	useEffect(() => {
		const db = getFirestore() //inicializo el cliente
		const itemsCollection = db.collection("productos") //seteo coleccion
		const aux = itemsCollection.doc(idProducto)
		aux
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.exists) {
					let snapshot = { ...querySnapshot.data(), id: querySnapshot.id }
					setId(snapshot.id)
					setPictureURL(snapshot.img)
					setTitle(snapshot.nombre)
					setPrice(snapshot.cantidad)
					setDescripcion(snapshot.descripcion)
					setStock(snapshot.stock)
				} else {
					console.log("No results")
				}
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}, [idProducto])

	return (
		<div className="unItem">
			<ItemDetailComponent
				id={id}
				pictureURL={pictureURL}
				title={title}
				price={price}
				descripcion={descripcion}
				stock={stock}
			/>
		</div>
	)
}
