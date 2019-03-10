import React, { Component } from "react";
import { connect } from "react-redux";
import "../components.css";
import KravMagaTuzla from "./kravmagatuzla";
import KravMaga from "./kravmaga";

const mapStateToProps = state => {

    return {information: state.information};

};

class Info2 extends Component {

	constructor(props) {

		super(props);
		
		this.state = {

			kravMagaTuzla: true,
			kravMaga: false
			
		};

		this.goKravMaga = this.goKravMaga.bind(this);
		this.goKravMagaTuzla = this.goKravMagaTuzla.bind(this);


	}

	goKravMaga() {

		this.props.dispatch({type: "UPDATE_INFORMATION", place: "kravMaga"});

	}

	goKravMagaTuzla() {

		this.props.dispatch({type: "UPDATE_INFORMATION", place: "kravMagaTuzla"});

	}

	componentDidMount() {


	}

	render() {

		let content;
		let kravMagaTuzlaActive;
		let kravMagaActive;

		if (this.props.information.place === "kravMagaTuzla") {

			content = <KravMagaTuzla />;
			kravMagaTuzlaActive = {backgroundColor: "#000004", color: "white"}

		}

		if (this.props.information.place === "kravMaga") {

			content = <KravMaga />;
			kravMagaActive = {backgroundColor: "#000004", color: "white"}

		}



		return(<div className="information-container">
			<div className="info-navbar">
			<div onClick={this.goKravMagaTuzla} style={kravMagaTuzlaActive}>O nama</div>
			<div onClick={this.goKravMaga} style={kravMagaActive}>Krav Maga</div>
			</div>
			{content}			
			</div>);

	}

}

const Info = connect(mapStateToProps)(Info2);

export default Info;
