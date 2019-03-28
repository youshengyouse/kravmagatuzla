import React, { Component } from "react";
import "../components.css";
import _ from "underscore";

class Information extends Component {

	constructor(props) {

		super(props);

		this.onVisibilityChange = this.onVisibilityChange.bind(this);
		this.isElementInViewPort = this.isElementInViewPort.bind(this);
		this.animateElement = this.animateElement.bind(this);
		this.aboutUsAnimation = _.throttle(this.animateElement, 250);
		this.aboutUsText = React.createRef();


	}

	componentDidMount() {

		window.addEventListener("scroll", this.aboutUsAnimation);
		window.addEventListener("resize", this.aboutUsAnimation);


	}


	componentWillUnmount() {

		window.removeEventListener("scroll", this.aboutUsAnimation);
		window.removeEventListener("resize", this.aboutUsAnimation);

	}

	animateElement() {

		let target = this.aboutUsText.current;


		this.onVisibilityChange(target, () => {


			target.style = `opacity: 1;`;
			window.removeEventListener("scroll", this.aboutUsAnimation);
			window.removeEventListener("resize", this.aboutUsAnimation);
			

		});




	}




	onVisibilityChange(el, callback) {

        let visible = this.isElementInViewPort(el);
  
            if (visible) {
                
                if (typeof callback == "function") {

                    callback();

                }
            }

            else {

	

            }
    };

    isElementInViewPort(el) {
     
        let rect = el.getBoundingClientRect();
        let innHT;
        let innHB;

        if ((window.innerWidth || document.documentElement.clientWidth) <= 900) {

            innHT = -130;
            innHB = (window.innerHeight || document.documentElement.clientHeight) + 1700;

        }

        if ((window.innerWidth || document.documentElement.clientWidth) > 900) {

         
            innHT = -210;
            innHB = (window.innerHeight || document.documentElement.clientHeight) + 270;
   
        }
      
        return (

            rect.top >= innHT &&
            rect.left >= 0 &&
            rect.bottom <= innHB && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) 

        );
    };



render() {

		return (  
			 <div className="first-section">
			<div className="about-us black-background">
				<p ref={this.aboutUsText} className="about-us-text-intro">{this.props.aboutus}</p>
			</div>

			
			<div className="termini">
			<table className="termini-table">
			<tbody>
			<tr>
    				<th colSpan="2">Krav Maga - DiF Tuzla</th>
  			</tr>
			<tr>
    				<th>Dan</th> 
    				<th>Vrijeme</th>
  			</tr>
  			<tr>
    				<td>Ponedjeljak</td>
    				<td>od 18h do 19h</td> 

  			</tr>
  			<tr>
    				<td>Srijeda</td>
    				<td>od 18h do 19h</td> 
  			</tr>
			<tr>
    				<td>Subota</td>
    				<td>od 9h do 10h</td> 
  			</tr>
			</tbody>
			</table>

			<table className="termini-table">
			<tbody>
			<tr>
    				<th colSpan="2">Krav Maga Kids - Lipnica</th>
  			</tr>
			<tr>
    				<th>Dan</th> 
    				<th>Vrijeme</th>
  			</tr>
  			<tr>
    				<td>Utorak</td>
    				<td>od 19h do 20h</td> 

  			</tr>
  			<tr>
    				<td>Cetvrtak</td>
    				<td>od 19h do 20h</td> 
  			</tr>
			</tbody>
			</table>
			</div>	

  			</div>
		)

	}

}


export default Information;
