import './style.css';

import { AppBar,Toolbar,Typography,Button } from '@material-ui/core';
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidget'
import {NavLink} from 'react-router-dom'

export const NavBarComponent = () => {
    return (
			<>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h4">
							<NavLink to={`/`} className="unLink">
								<p className="title__bar">Scarleth's shop</p>
							</NavLink>
						</Typography>
						<div className="boton__inicio">
							<NavLink to={`/category/Hogar`} className="unLink">
								<Button color="inherit">Hogar</Button>
							</NavLink>
						</div>
						<div className="boton__inicio">
							<NavLink to={`/category/Calzado`} className="unLink">
								<Button color="inherit">Calzado</Button>
							</NavLink>
						</div>
						<div className="boton__inicio">
							<NavLink to={`/category/Ropa`} className="unLink">
								<Button color="inherit">Ropa</Button>
							</NavLink>
						</div>
            <Typography variant="h6">
              <NavLink to={`/cart`} className="unLink">
                <CartWidgetComponent />
              </NavLink>
            </Typography>
					</Toolbar>
				</AppBar>
			</>
		)
}