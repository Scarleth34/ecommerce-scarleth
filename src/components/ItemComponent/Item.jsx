import "./style.css"

// id, title, price, pictureUrl
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
	root: {
		width: 200,
	},
	media: {
		height: 200,
	},
})

export const ItemComponent = ({
	idProducto,
	title,
	price,
	pictureURL,
	category,
	descrip,
}) => {
	const classes = useStyles()

	return (
		<div className="Item">
			<Card className={classes.root}>
				<CardActionArea>
					<NavLink to={`/item/${idProducto}`}>
						<CardMedia
							style={{ margin: "1rem", backgroundSize:"cover" }}
							className={classes.media}
							image={pictureURL}
							title={title}
						/>
					</NavLink>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<p>{category}</p>
						<Typography variant="body2" color="textSecondary" component="p">
							<b>Valor: {price} $</b>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	)
}
