import React from "react";
import { Link } from "gatsby";
import "./404.css";

export default ({data}) =>  ( 
			     <div className="page-404">
				<div>
				<div className="navigation-404">
					<Link to="/" >KRAV MAGA TUZLA</Link>
					<Link to="/informacije">Info</Link>
					<Link to="/termini">Termini</Link>
					<Link to="/contact">Kontakt</Link>
				</div>		
				<div className="number-404"><span>404</span></div>
				</div>
			     </div>
		      		);

