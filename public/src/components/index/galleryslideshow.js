import React, { Component } from "react";
import "../components.css";
import moment from "moment";
import Linkify from "react-linkify";
import _ from "underscore";

import { connect } from "react-redux";

const mapStateToProps = state => {

    return { editorPosts: state.editorPosts, slideshow: state.slideshow2 };

};

class GallerySlideshow2 extends Component {

	constructor(props) {

		super(props);

		this.state = {picture: 0, small: false, visible: false};

		this.closeImage = this.closeImage.bind(this);
		this.toggleImage = this.toggleImage.bind(this);
		this.trackWindowSize = this.trackWindowSize.bind(this);
		this.resize = _.throttle(this.trackWindowSize, 400);

		this.showImage = this.showImage.bind(this);
		this.toggleKeyUp = this.toggleKeyUp.bind(this);


	}

	trackWindowSize() {

		if ((window.innerWidth || document.documentElement.clientWidth) <= 500) {

			this.setState({ small: true });

		}

		else {

			this.setState({ small: false });

		}


	}

	toggleKeyUp(e) {
		
		let code = e.keyCode;

		if (code === 39) {

			
			if (this.state.picture === this.props.gallery.items.length - 1 ) {

				this.setState({picture: 0});

			}

			else {

				this.setState({picture:  this.state.picture + 1});

			}




		}

		if (code === 37) {

			
			if (this.state.picture === 0) {

				this.setState({picture: this.props.gallery.items.length - 1});

			}

			else {

				this.setState({picture: this.state.picture - 1});

			}

		}


		if (code === 27) {



		}



	}

	toggleImage(e) {

		let target = e.target;

		if (target.className === "instagram-slideshow-next" || target.className === "fas fa-chevron-right") {

			if (this.state.picture === this.props.gallery.items.length - 1 ) {

				this.setState({picture: 0});

			}

			else {

				this.setState({picture:  this.state.picture + 1});

			}




		}

		if (target.className === "instagram-slideshow-previous" || target.className === "fas fa-chevron-left") {


			if (this.state.picture === 0) {

				this.setState({picture: this.props.gallery.items.length - 1});

			}

			else {

				this.setState({picture: this.state.picture - 1});

			}



		}
		

	}

	
		closeImage(e) {

			let target = e.target.className;

			if (target === "instagram-post-large instagram-post-large-visible" || target === "fas fa-window-close close-instagram-post") {


					document.body.style.overflow = "auto";
					this.props.dispatch({ type: "TOGGLE_SLIDESHOW2", status: false, gallery: false });
					e.stopPropagation();

		
			}
		
			
		}


	componentDidMount() {

		window.addEventListener('resize', this.resize);
		window.addEventListener('keydown', this.toggleKeyUp);
		this.trackWindowSize();

	}

	componentWillUnmount() {

		window.removeEventListener('resize', this.resize);
		window.removeEventListener('keydown', this.toggleKeyUp);
			

	}

	showImage() {

		
		this.setState({ visible: true });
		
	}

	render() {

		let caption = this.props.gallery.description;
		let title = this.props.gallery.title;
		let date = moment(new Date(this.props.gallery.date)).format('MM/DD/YYYY');
		let current = this.state.picture + 1;
		let total = this.props.gallery.items.length;

		return (
<div onClick={this.closeImage} className="instagram-post-large instagram-post-large-visible">

		<div  className="instagram-post-large-content">
	
		<div className="large-image-cointaner">
			<div className="image-count">{current}/{total}</div>
			<div onClick={this.toggleImage} className="instagram-slideshow-previous"> <i className="fas fa-chevron-left"></i></div>
		{this.props.gallery.items.map((item, index) => {

			let loadFunction = this.showImage;
			let path = item.directory;
			let file = item.fileName;
			let pathToFile = `${path}${file}`;
			let instagramPostClass = "instagram-post-large-image";

			if (this.state.picture === index) {

				if (this.state.visible) {

					instagramPostClass = "instagram-post-large-image instagram-post-large-image-visible";

				}

				
			}

			if (this.state.small) {

				pathToFile = `${path}/thumbnail/${file}`;

			}

			
			return <React.Fragment key={index}><div className={instagramPostClass} style={{backgroundImage: `url("${pathToFile}")`}}></div>
			<img alt="You shouldn't be able to see me." src={pathToFile} onLoad={loadFunction} className="hidden-instagram-slideshow-image-loader"/>
			</React.Fragment>

			})}
			
			<div onClick={this.toggleImage} className="instagram-slideshow-next"> <i className="fas fa-chevron-right"></i> </div>
			</div>

			<div >
			<i onClick={this.closeImage} className="fas fa-window-close close-instagram-post"></i>
			<div className="gallery-content">
			<div style={{ marginBottom: "0.5rem", marginTop: "1.5rem", fontWeight: "bold", lineHeight: "1.3rem"}}>
			{title}</div>
			<div className="gallery-caption"><Linkify properties={{target: '_blank', rel:"noopener noreferrer"}}>{caption}</Linkify></div>

			</div>

			<div className="instagram-post-content-footer">
			<div className="galleryDate" style={{ fontSize: "0.8rem" }}>{date}</div>


			</div>
			</div>

		</div>

			</div>

			




			

			);


	}

}

const GallerySlideshow = connect(mapStateToProps)(GallerySlideshow2);

export default GallerySlideshow;
