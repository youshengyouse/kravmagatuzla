import React, { Component } from "react";
import axios from 'axios';
import "../components.css";

class Kontakt extends Component {

	constructor(props) {

		super(props);
		
		this.state = {

			textarea: 0,	
			nameError: false,
			emailError: false,
			subjectError: false,
			messageError: false

		};

		this.countTextArea = this.countTextArea.bind(this);
		this.formValidation = this.formValidation.bind(this);
		this.sendForm = this.sendForm.bind(this);


	}

	sendForm(e) {

		e.preventDefault();
		let mailTarget = e.target.email
		let nameTarget = e.target.imeiprezime;
		let subjectTarget = e.target.subject;
		let messageTarget = e.target.poruka;

		if (this.formValidation(mailTarget, true) && this.formValidation(messageTarget, true) && this.formValidation(nameTarget, true) && this.formValidation(subjectTarget, true)) {

			let email = mailTarget.value.trim();
			let name = nameTarget.value.trim();
			let subject = subjectTarget.value.trim();
			let message = messageTarget.value.trim();
			this.setState({messageError: false});

			axios.post("/mail", { 

					      email: email,
					      name: name,
					      subject: subject,
					      message: message
	
					     }, {
  					     headers: {
    					       'Content-Type': 'application/x-www-form-urlencoded'
  					     }
				}).then((res) => {

					if (res.data.nameError) {

						this.setState({ nameError: true });

					}

					if (res.data.emailError) {

						this.setState({ emailError: true });

					}

					if (res.data.nameError) {

						this.setState({ subjectError: true });

					}

					if (res.data.messageError) {

						this.setState({ messageError: true });

					}

					if (res.data.sent) {

						mailTarget.value = "";
						nameTarget.value = "";
						subjectTarget.value = "";
						messageTarget.value = "";

					}
					
					}).catch((e) => {

						
						this.setState({nameError: true,
							       emailError: true,
							       subjectError: true,
							       messageError: true});

					});


		}

	}



	countTextArea(e) {

		let target = e.target;

		this.setState({textarea: target.value.length})

	}

	formValidation(e, form) {
	
		let target;

		if (form) {

			target = e;	

		}

		if (!form) {

			target = e.target;

		}

		if (target.name === "imeiprezime" || target.name === "subject") {

				let trimmedTarget = target.value.trim();
				
				if (target.name === "imeiprezime") {
				
					if (trimmedTarget.length > 100 || trimmedTarget.length === 0 || trimmedTarget === "") {

						this.setState({nameError: true});

					}

					else {

						this.setState({nameError: false});
						return true;

					}

				}

				if (target.name === "subject") {
				
					if (trimmedTarget.length > 500 || trimmedTarget.length === 0 || trimmedTarget === "") {

						this.setState({subjectError: true});

					}

					else {

						this.setState({subjectError: false});
						return true;

					}

				}
 
			
		}

		if (target.name === "email") {

		let emailRegEx = /^([^\s-])+([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
 
			if (target.value.length > 100 || emailRegEx.test(target.value) === false || target.value.length === 0) {

				this.setState({emailError: true});

			}

			else {

				this.setState({emailError: false});
				return true;

			}

		}

		if (target.name === "poruka") {

			let trimmedTarget = target.value.trim();

			if (trimmedTarget.length >= 5000 ||  trimmedTarget.length === 0 || trimmedTarget.trim() === "") {

				this.setState({messageError: true});

			}

			else {

				this.setState({messageError: false});
				return true;

			}


		}

	}



	render() {

		let fivekerror;
		let nameError;
		let emailError;
		let subjectError;

		if (this.state.textarea > 5000 || this.state.messageError) {

			fivekerror = {color: "red"};

		}

		if (this.state.nameError) {

			nameError = {color: "red"}

		}

		if (this.state.emailError) {

			emailError = {color: "red"}

		}

		if (this.state.subjectError) {

			subjectError = {color: "red"}

		}



		return(<div className="kontakt-container">
			<div className="kontakt-objasnjenje">
			<span>Kontaktirati nas mozete:</span>
			<ul>	
			<li>Pozivom na broj telefona: <span style={{fontWeight: "bold"}}>+387 61 998 742 (Mirza)</span></li>
			<li>Na E-mail adresi: <span style={{fontWeight: "bold"}}>kravmagatuzla@outlook.com</span></li>
			<li>Preko kontakt forme</li>
			<li><span style={{fontWeight: "bold"}}>Facebook</span> ili <span style={{fontWeight: "bold"}}>Instagram</span></li>
			</ul>	
			<iframe title="facebook krav maga tuzla" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FSports-Team%2FKRAV-MAGA-IKMI-Tuzla-408588132922283%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=372257280226790" width="300" height="500" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			</div>
			<div className="kontakt-form">
			<form onSubmit={this.sendForm} >
				<label className="five-k-error" style={nameError}>Ime i Prezime*</label>
				<input onBlur={this.formValidation} required={true} type="text" name="imeiprezime" />
				<label  className="five-k-error" style={emailError} >E-Mail*</label>
				<input onBlur={this.formValidation} required={true} type="text" name="email" />
				<label className="five-k-error" style={subjectError}>Naslov*</label>
				<input onBlur={this.formValidation} required={true} type="text" name="subject" />
				<label className="five-k-error" style={fivekerror}>Poruka*</label>
				<textarea onBlur={this.formValidation} required={true} onKeyUp={this.countTextArea} name="poruka" style={{margin: "0px", width: "100%"}}></textarea>
				<label className="five-k-error" style={fivekerror}><span>{this.state.textarea}</span>/5000</label>
				<input className="submit-button" type="submit" value="Posalji" />

		
			</form>
			</div>
			</div>);

	}

}


export default Kontakt;
