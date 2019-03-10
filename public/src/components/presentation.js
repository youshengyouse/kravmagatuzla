import React, {Component} from "react";
import "./components.css";
import { Link } from "gatsby";
import Footer from "./footer";
import { connect } from "react-redux";
import SiteMetaData from "./site-metadata";

const mapStateToProps = state => {

    return {number: state.slideshow.number, dropdown: state.slideshow.dropdown, loaded: state.slideshow.loaded};

};

class Presentation2 extends Component {

	constructor(props) {

		super(props);
		this.state = {
	
			images: ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
			number: false,
			text: false,
			ready: false

		}

		this.changePicture = this.changePicture.bind(this);
		this.dotContainer = React.createRef();
		this.startInterval = this.startInterval.bind(this);

		this.showComponent = this.showComponent.bind(this);

	}

	showComponent() {

		if (!this.state.ready) {

			this.setState({ready: true});

		}
	

	}

	changePicture(e) {

		let target = e.target;
		
		clearInterval(this.intervalId);
		
		for (let item of this.dotContainer.current.children) {

			if (Number(item.id) === Number(target.id)) {

				item.className = "active-dot";
	
			}

			else {

				item.className = "dot";

			}

		}

		this.props.dispatch({type: "UPDATE_NUMBER", number: Number(target.id)});

		this.startInterval();
		



	}

	startInterval() {

		
	 this.intervalId = setInterval(() => {
		
		let num = this.state.number + 1;

		if (this.state.number === this.state.images.length -1) {

			num = 0;

		}
	

		this.props.dispatch({type: "UPDATE_NUMBER", number: num});
		for (let item of this.dotContainer.current.children) {

			let num2 = num;

			if (Number(item.id) === num2) {

				item.className = "active-dot";
	
			}

			else {

				item.className = "dot";

			}

		}
		
    		this.setState({number: num});
	
    	 }, 5000);



	}

	static getDerivedStateFromProps(nextProps, prevState) {

        if (prevState.number !== nextProps.number || prevState.dropdown !== nextProps.dropdown || prevState.loaded !== nextProps.loaded) {

            return {

                		number: nextProps.number,
				dropdown: nextProps.dropdown,
				loaded: nextProps.loaded

            }

        }
	
        else {

            return null;

        }

    }
	componentDidMount() {

		let img = new Image();
        	img.src = `/slideshow/0.1.jpg`;
		img.onload = () => {this.setState({ ready: true })}
		document.title = this.props.location;

		this.startInterval();
		
		for (let item of this.dotContainer.current.children) {

			let num2 = this.state.number;

			if (Number(item.id) === num2) {

				item.className = "active-dot";
	
			}

			else {

				item.className = "dot";

			}

		} 

	
        			
		this.setState({text: true});
  
	}

	componentWillUnmount() {

		clearInterval(this.intervalId);
		

	}

	render() {

		let text;
		let selectedTermini;
		let selectedKontakt;
		let selectedInformacije;
		let opacity;

		if (this.state.ready) {

			opacity = {opacity: 1}

		}

		if (this.state.text) {

			text = {transform: "translateY(0px)", opacity: 1};

		}

		if (this.props.title === "Termini") {

			selectedTermini = {backgroundColor: "white", color: "black"}

		}

		if (this.props.title === "Kontakt") {

			selectedKontakt = {backgroundColor: "white", color: "black"}

		}

		if (this.props.title === "Informacije") {

			selectedInformacije = {backgroundColor: "white", color: "black"}

		}

		return (<React.Fragment>
<SiteMetaData />
<div className="logo-container"><div className="logo-cont"><Link className="logo" to="/" >KRAV MAGA TUZLA</Link></div><nav><Link style={selectedInformacije} to="/informacije">Info</Link><Link style={selectedTermini} to="/termini">Termini</Link><Link style={selectedKontakt} to="/contact">Kontakt</Link></nav></div>

<div className="info">
 
<div className="introduction"><div className="welcome-text"><span style={text} className="slogan"><span  style={text}  className="small-logo" >Krav Maga IKMI Tuzla</span>{this.props.title}</span><div className="social-media"><a aria-label="facebook" className="facebook" href="https://www.facebook.com/408588132922283/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a> <a aria-label="instagram" className="instagram" href="https://www.instagram.com/krav_maga_tuzla/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></div> </div></div>

<div className="slideshow"><div style={opacity} className="slideshow-container">{this.state.images.map((image, index) => {

			let key = image;
			let opacity;
		
			if (this.state.number === index) {

				opacity = 1;

			}

			if (this.state.number !== index) {


				opacity = 0;

			}

return <div className={`slideshow-image slideshow-image${index}`} key={key} style={{opacity: opacity}}/>

	}) }
	
	</div><div ref={this.dotContainer} className="dots">
	<span onClick={this.changePicture} id="0" className="active-dot"></span>
	<span onClick={this.changePicture} id="1" className="dot"></span>
	<span onClick={this.changePicture} id="2" className="dot"></span>
	<span onClick={this.changePicture} id="3" className="dot"></span>
	<span onClick={this.changePicture} id="4" className="dot"></span>
	<span onClick={this.changePicture} id="5" className="dot"></span>
	</div>
	<div className="social-media-small"><a aria-label="facebook" className="facebook" href="https://www.facebook.com/408588132922283/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a> <a  aria-label="instagram" className="instagram" href="https://www.instagram.com/krav_maga_tuzla/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></div>
	</div>

</div>

{this.props.children}
	<Footer />

</React.Fragment>)


	}


}

const Presentation = connect(mapStateToProps)(Presentation2);

export default Presentation;

/*
 */
