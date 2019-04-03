import React, { Component } from "react";
import "../components.css";

class Partneri extends Component {

	constructor(props) {
	
		super(props);
		this.state = {

			partneri: ["kravmagaba.png", "kravmagaaustria.png", "ikmi-italia.png", "elite-safety.png"],	

		};


	}

	render() {

		return (  <React.Fragment>
			<div className="prijatelji">Prijatelji Kluba</div>
			 <div className="partneri">
				
				{this.state.partneri.map((partner, index) => {
		
					let title;
					let link;

					if (index === 0) {

						link = `http://kravmaga.ba/`;
						title = `Krav Maga BiH`;

					}

					if (index === 1) {

						link = `https://www.kravmaga-austria.com/`;
						title = `Krav Maga Austria`;

					}

					if (index === 2) {

						link = `http://www.ikmi-italia.com`;
						title = `IKMI Italia`;

					}

					if (index === 3) {

						link = `http://www.elitesafety.at/`;
						title = `Elite Safety`;

					}
		
					return (<div key={index} className="partner">
						<a title={title} target="_blank" rel="noopener noreferrer" href={link} className="partner-image" style={{backgroundImage: `url("/partneri/${partner}")`}}>

			</a>
						<span ><a className="partneri-link" title={title} href={link} target="_blank" rel="noopener noreferrer">{title}</a></span>
						</div>);	

				})}

  			</div>
			</React.Fragment>
		)

	}

}


export default Partneri;
