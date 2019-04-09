import React, { Component } from "react";
import "../components.css";
import moment from "moment";
import { Link } from "gatsby";
import axios from 'axios';
import GallerySlideshow from './galleryslideshow';

import { connect } from "react-redux";

const mapStateToProps = state => {

    return { editorPosts: state.editorPosts, slideshow: state.slideshow2 };

};

class GalleryItem2 extends Component {

	constructor(props) {

		super(props);
	
		this.state = {

			visible: false,
	
		};
	
		this.toggleSlideshow = this.toggleSlideshow.bind(this);

		this.showImage = this.showImage.bind(this);

	}

	showImage() {

		this.setState({ visible: true });

	}

	toggleSlideshow() {

		document.body.style.overflow = "hidden";
		this.props.dispatch({ type: "TOGGLE_SLIDESHOW2", status: true, gallery: this.props.gallery.id });

	}

	componentDidUpdate() {



	}	

	render() {

		let title = <div>{this.props.gallery.title}</div>;
		let date = <div className="gallery-date">{moment(new Date(this.props.gallery.date)).format('MM/DD/YYYY')}</div>;
		let backgroundImage;
		let large;
		let slideshow = "";
		let opacity = 0;
		
		if (this.props.gallery.title.length > 50) {

			title = `${this.props.gallery.title.slice(0, 50)}...`;

		}

		if (this.props.large) {

			large = "gallery-info";
			backgroundImage = this.props.gallery.items[0].directory + this.props.gallery.items[0].fileName;

		}

		if (!this.props.large) {

			large = "gallery-info-small";
			backgroundImage = this.props.gallery.items[0].directory + "thumbnail/" + this.props.gallery.items[0].fileName;

		}

		if (this.props.slideshow.status === true && this.props.slideshow.gallery === this.props.gallery.id) {

			slideshow = <GallerySlideshow gallery={this.props.gallery}/>;

		}

		if (this.state.visible) {

			opacity = 1;

		}


		return (<React.Fragment><div onClick={this.toggleSlideshow} style={{ backgroundImage: `url('${backgroundImage}')`, opacity: opacity }} className="image-gallery">
				<img onLoad={this.showImage} alt="can't see me" src={backgroundImage} style={{ display: "none" }}/>		

<div className={large}><span>{title}</span>{date}</div></div>{slideshow}</React.Fragment>);


	}

}

const GalleryItem = connect(mapStateToProps)(GalleryItem2);

class Gallery2 extends Component {

	constructor(props) {

		super(props);
		this.state = {

			waiting: false
		
		};

		this.ajaxCall = this.ajaxCall.bind(this);
	
		
	}

	componentDidMount() {

		let body = {};
		body.per_page = this.props.editorPosts.per_page;
		body.current_page = this.props.editorPosts.current_page + 1;

		if (this.props.editorPosts.posts.length === 0) {

			this.ajaxCall(body);

		}

	}

	ajaxCall(body) {

		let title = body.title;
			
		if (!body.title) {

			title = false;

		}

		this.setState({ waiting: true });
		
		axios.post("/gallery/get", body)
			.then((res) => {

				if (res.data.titleError) {

					this.setState({ titleError: true });

				}

				else {

				this.setState({ waiting: false, titleError: false});
				let currentPage = res.data.pagination.current_page;
				let lastPage = res.data.pagination.last_page;

				if (currentPage === lastPage) {

					let newState = this.props.editorPosts.posts.slice();
					    res.data.data.map((post) => {

							newState.push(post);
							return post;

					    });
					
					this.props.dispatch({ type: "GET_POSTS", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });
					this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });


				}

				else {

					let newState;

					if (res.data.pagination.current_page === 1) {

					    newState = [];
					    res.data.data.map((post) => {

							newState.push(post);
							return post;

					    });

					}

					if (res.data.pagination.current_page > 1) {

					    newState = this.props.editorPosts.posts.slice();
					    res.data.data.map((post) => {

							newState.push(post);
							return post;

					    });


					}

					this.props.dispatch({ type: "GET_POSTS", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage});
					this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });
				

				}

			}


			}).catch((e) => {console.log(e)});

	}


	render() {
		
		let galleries = this.props.editorPosts.posts.slice(0, 5);
		let content = <div className="gallery-waiting" ><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>;

		if (!this.state.waiting) {

			content = <React.Fragment><div className="about-us-title"><Link to="/galerija">Galerija</Link></div><div className="gallery-container">
			
			{galleries.map((gallery, index) => {

				if (index === 0) {

					return (<GalleryItem key={index} large={true} gallery={gallery} />);

				}

				else {

					return "";

				}

			})}

			<div className="sidebar-gallery">

			{galleries.map((gallery, index) => {

				if (index !== 0) {

					return (<GalleryItem key={index} large={false} gallery={gallery} />);

				}

				else {

					return "";

				}

			})}


			</div>


			</div></React.Fragment>


		}

		return (<React.Fragment>{content}</React.Fragment>);

	}


}

const Gallery = connect(mapStateToProps)(Gallery2);

export default Gallery;
