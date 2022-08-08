import { ItemListComponent } from "../ItemListComponent/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./style.css"

import { getFirestore } from "../../firebase"

export const ItemListContainer = () => {
	let [items, setItems] = useState([])
	let [title, setTitle] = useState([])
	const { idCategory } = useParams()

	useEffect(() => {
		const db = getFirestore() //inicializo el cliente
		const itemsCollection = db.collection("productos") //seteo coleccion
		itemsCollection
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.log("No results")
				}
				let snapshot = querySnapshot.docs.map((doc) => {
					let dataObj = { ...doc.data(), id: doc.id }
					return dataObj
				})

				let auxCategory
				if (idCategory !== undefined) {
					auxCategory = snapshot.filter(
						(element) => element.categoria === idCategory
					)
					setTitle(idCategory)
				} else {
					auxCategory = snapshot
					setTitle("Todos")
				}
				setItems(auxCategory)
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}, [idCategory])

	return (
		<div>
			<div className="unItem">
				<h1 className="title_Item">
					{title}
				</h1>
				<ItemListComponent productos={items} />
			</div>
			<div className="itemAmpliado"></div>
		</div>
	)
}
