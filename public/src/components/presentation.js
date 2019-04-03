import React, {Component} from "react";
import "./components.css";
import { Link } from "gatsby";
import Footer from "./footer";
import { connect } from "react-redux";
import SiteMetaData from "./site-metadata";

const mapStateToProps = state => {

    return {number: state.slideshow.number, ready: state.slideshow.ready, zIndex: state.slideshow.zIndex};

};

class Presentation2 extends Component {

	constructor(props) {

		super(props);
		this.state = {
	
			images: ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
			number: false,
			text: false,
			ready: false,
			innerWidth: false

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

		if (this.dotContainer.current) {
		
		for (let item of this.dotContainer.current.children) {

			if (Number(item.id) === Number(target.id)) {

				item.className = "active-dot";
	
			}

			else {

				item.className = "dot";

			}

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

		if (this.dotContainer.current) {		

		for (let item of this.dotContainer.current.children) {

			let num2 = num;

			if (Number(item.id) === num2) {

				item.className = "active-dot";
	
			}

			else {

				item.className = "dot";

			}

		}

		}
		
    		this.setState({number: num});
	
    	 }, 5000);



	}

	static getDerivedStateFromProps(nextProps, prevState) {

        if (prevState.number !== nextProps.number || prevState.ready !== nextProps.ready || prevState.zIndex !== nextProps.zIndex) {

            return {

                		number: nextProps.number,
				ready: nextProps.ready,
				zIndex: nextProps.zIndex

            }

        }
	
        else {

            return null;

        }

    }
	componentDidMount() {

		document.title = this.props.location;

		this.startInterval();

		if (this.dotContainer.current) {
		
		for (let item of this.dotContainer.current.children) {

			let num2 = this.state.number;

			if (Number(item.id) === num2) {

				item.className = "active-dot";
	
			}

			else {

				item.className = "dot";

			}

		} 

		}
	
		this.setState({text: true, innerWidth: window.innerWidth});
  
	}

	componentWillUnmount() {

		clearInterval(this.intervalId);
		

	}

	componentDidUpdate() {

		if (this.state.ready && this.state.zIndex === 10000) {

			window.setTimeout(() => {this.props.dispatch({ type: "ZINDEX" })}, 1000);

		}


	}

	render() {

		let text;
		let selectedBlog;
		let selectedKontakt;
		let selectedInformacije;
		let opacity;
		let zIndex = "flex";
		let visible = 1;
		let content;
		let img;

		if (this.state.innerWidth) {

			if (this.state.innerWidth < 501) {

				img = <img alt="/slideshow/0-small.jpg" src="/slideshow/0-small.jpg" onLoad={() => {this.props.dispatch({type: "SLIDESHOW_LOADED"})}} style={{ width: "0px", height: "0px", display: "none"}} />;

			}

			else {

				img = <img alt="/slideshow/0-small.jpg" src="/slideshow/0.jpg" onLoad={() => {this.props.dispatch({type: "SLIDESHOW_LOADED"})}} style={{ width: "0px", height: "0px", display: "none"}} />;

			}

		}

		if (this.state.ready) {

			opacity = {opacity: 1};
			visible = 0;

			if (this.state.zIndex === -10000) {

				zIndex = "none";

			}
			
		}
	
		if (this.state.text) {

			text = {transform: "translateY(0px)", opacity: 1};

		}

		if (this.props.title === "Termini") {

			selectedBlog = {backgroundColor: "white", color: "black"}

		}

		if (this.props.title === "Kontakt") {

			selectedKontakt = {backgroundColor: "white", color: "black"}

		}

		if (this.props.title === "Informacije") {

			selectedInformacije = {backgroundColor: "white", color: "black"}

		}

			content = <React.Fragment>
 {img}
<SiteMetaData />
<div className="logo-container"><div className="logo-cont"><Link className="logo" to="/" >KRAV MAGA TUZLA</Link></div><nav><Link style={selectedInformacije} to="/informacije">Info</Link><Link style={selectedKontakt} to="/contact">Kontakt</Link></nav></div>

<div className="info">

<div className="introduction"><div className="welcome-text"><span style={text} className="slogan"><span  style={text}  className="small-logo" >Krav Maga IKMI Tuzla</span>{this.props.title}</span><div className="social-media"><a title="Facebook" aria-label="facebook" className="facebook" href="https://www.facebook.com/408588132922283/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a> <a aria-label="instagram" className="instagram" title="krav_maga_tuzla" href="https://www.instagram.com/krav_maga_tuzla/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></div> </div></div>

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
	<div className="social-media-small"><a title="facebook" aria-label="facebook" className="facebook" href="https://www.facebook.com/408588132922283/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a> <a title="krav_maga_tuzla" aria-label="instagram" className="instagram" href="https://www.instagram.com/krav_maga_tuzla/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></div>
	</div>

</div>

{this.props.children}
	<Footer />
<div style={{ background: `linear-gradient(65deg, rgba(14,14,17,1) 0%, rgba(17,15,15,1) 49%, rgba(10,9,9,1) 100%)`, opacity: visible, transitionDuration: "1s", transitionProperty: "opacity", textAling: "center", justifyContent: "center", position: "fixed", top: "0px", bottom: "0px", right: "0px", left: "0px", backgroundColor: "black", zIndex: this.state.zIndex, display: zIndex }} >

<div style={{ position: "relative", top: "40%" }} className="lds-facebook"><div></div><div></div><div></div></div>

</div>
</React.Fragment>;


		return (<React.Fragment>{content}</React.Fragment>)


	}


}

const Presentation = connect(mapStateToProps)(Presentation2);

export default Presentation;

/*
 */
