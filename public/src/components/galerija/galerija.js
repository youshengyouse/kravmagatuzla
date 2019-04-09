import React, { Component } from "react";
import "../components.css";
import moment from "moment";
import axios from "axios";
import GallerySlideshow from "../index/galleryslideshow";
import Rosinante from "../Rosinante";

import { connect } from "react-redux";

const mapStateToProps = state => {

    return { galerija: state.galerija, slideshow: state.slideshow2, editorPosts: state.editorPosts };

};

class GalleryItem2 extends Component {

	constructor(props) {

		super(props);
		this.state = {
	
			visible: false

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

	render() {

		let title = <div>{this.props.gallery.title}</div>;
		let date = <div className="gallery-date">{moment(new Date(this.props.gallery.date)).format('MM/DD/YYYY')}</div>;
		let backgroundImage = this.props.gallery.items[0].directory + "thumbnail/" + this.props.gallery.items[0].fileName;
		let large;
		let slideshow = "";
		let opacity = 0;
		
		if (this.props.gallery.title.length > 50) {

			title = `${this.props.gallery.title.slice(0, 50)}...`;

		}

		if (this.props.large) {

			large = "gallery-info";

		}

		if (!this.props.large) {

			large = "gallery-info-small";

		}

		if (this.props.slideshow.status === true && this.props.slideshow.gallery === this.props.gallery.id) {

			slideshow = <GallerySlideshow gallery={this.props.gallery}/>;

		}

		if (this.state.visible) {

			opacity = 1;

		}

		return (<React.Fragment><div onClick={this.toggleSlideshow} style={{ backgroundImage: `url('${backgroundImage}')`, opacity: opacity }} className="image-gallery2">
		<img onLoad={this.showImage} alt="can't see me" src={backgroundImage} style={{ display: "none" }}/>
<div className={large}><span>{title}</span>{date}</div></div>{slideshow}</React.Fragment>);

	}

}

const GalleryItem = connect(mapStateToProps)(GalleryItem2);

class Galerija2 extends Component {

	constructor(props) {
	
		super(props);

		this.state = {

			waiting: false,
			titleError: false,
			rosinante: false,
			called: false, 
			piece: 8

		};

		this.ajaxCall = this.ajaxCall.bind(this);
		this.getData = this.getData.bind(this);
		this.scrollItem = React.createRef();

		this.notVisible = this.notVisible.bind(this);
		this.searchInput = this.searchInput.bind(this);


	}

	searchInput(e) {

		this.setState({ searchInput: e.target.title.input });

	}

	notVisible() {

		

	}

	componentWillUnmount() {

		if (this.state.rosinante !== false) {

			this.state.rosinante.removeRosinante();

		}

	}
	
	componentDidUpdate(prevProps, prevState) {

		if (this.props.galerija.ran === true && this.props.galerija.current_page < this.props.galerija.last_page && this.state.called === false && this.state.rosinante !== false) {

				this.state.rosinante.callRosinante();
				this.setState({ called: true });

		}

		if (prevProps.galerija.ran !== this.props.galerija.ran && this.state.rosinante === false && prevProps.galerija.current_page <= this.props.galerija.current_page && this.props.galerija.posts.length > 0) {

			this.setState({ rosinante: new Rosinante(

				window,
				this.scrollItem.current,
				this.scrollItem.current,
				true,
				this.getData,
				this.notVisible,
				400,
				800,
				50,
				50
		
			)});

		}

	}

	getData(e) {

		let body = {};
		let title = this.props.galerija.search;
		body.per_page = this.props.galerija.per_page;
		body.current_page = this.props.galerija.current_page + 1;

		if (e) {

			e.preventDefault();

			if (e.target.title) {

				title = e.target.title.value.trim();

				if (title.length > 100) {

					this.setState({ titleError: true });

				}
			
				else if (title === this.props.galerija.search) {


				}

				else {

					body.title = title;
					body.current_page = 1;
					this.setState({ titleError: false });
					this.ajaxCall(body);

				}

			}

			else {
	
				body.current_page = 1;
				this.ajaxCall(body);

			}

		}

		else {

			if (title === false) {
		
				if (this.props.galerija.current_page === this.props.galerija.last_page) {



				} else {
					
					this.ajaxCall(body);

				}

			}

			else {

				if (this.props.galerija.posts.length === this.props.galerija.total) {



				} else {

					body.title = title;
					
					this.ajaxCall(body);

				}


			}

		}

	}

	componentDidMount() {

		let body = {};
		body.per_page = this.props.galerija.per_page;
		body.current_page = this.props.galerija.current_page + 1;

		if (this.props.galerija.posts.length === 0) {

			this.ajaxCall(body);

		}

		if (this.props.galerija.posts.length > 0 && this.props.galerija.current_page <= this.props.galerija.last_page) {

			this.setState({ called: false, rosinante: new Rosinante(

				window,
				this.scrollItem.current,
				this.scrollItem.current,
				true,
				this.getData,
				this.notVisible,
				400,
				800,
				50,
				50) });

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

				this.setState({ waiting: false, titleError: false, called: false});
				let currentPage = res.data.pagination.current_page;
				let lastPage = res.data.pagination.last_page;

				if (currentPage === lastPage) {

					let newState = this.props.galerija.posts.slice();
					    res.data.data.map((post) => {

							newState.push(post);
							return post;

					    });

					if (this.props.editorPosts.posts.length === 0 && this.props.galerija.search === false) {
						
						this.props.dispatch({ type: "GET_POSTS", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });
						this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState, current_page: lastPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });

					}

					else {

						let newState2;

						if (title !== this.props.galerija.search || body.current_page === 1) {

							newState2 = [];
					    		res.data.data.map((post) => {

								newState2.push(post);
								return post;

					    		});

							this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState2, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });


						}

						else {

							this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });


						}

					}

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

					    newState = this.props.galerija.posts.slice();
					    res.data.data.map((post) => {

							newState.push(post);
							return post;

					    });


					}

					if (this.props.editorPosts.posts.length === 0 && this.props.galerija.search === false) {
						
						this.props.dispatch({ type: "GET_POSTS", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });
						this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });

					}

					else {

						this.props.dispatch({ type: "GET_POSTS_GALLERY", posts: newState, current_page: currentPage, ran: true, total: res.data.pagination.total, search: title, last_page: lastPage });

					      }

				}

			}


			}).catch((e) => {console.log(e)});

	}



	render() {

		let waiting = <div  className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
		let galleries = this.props.galerija.posts;
		let error = "black";
		let defaultValue;
		
		
		if (!this.state.waiting) {

			waiting = "";

		}

		if (this.state.titleError) {

			error = "red";

		}

		if (this.props.galerija.search !== false) {

			defaultValue = this.props.galerija.search;

		}

		return (<React.Fragment>
			<form className="gallery-search-form" onSubmit={this.getData}>
				<input type="text" placeholder="Naziv" name="title" defaultValue={defaultValue} style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", color: error}}/>
				<input type="submit" value="Traži"  style={{ borderTopRightRadius: "5px", borderBottomRightRadius: "5px", color: "white", borderWidth: "1px", backgroundColor: "black" }}/>
				<div>{this.props.galerija.total}</div>

			</form>
			<div className="galerija-section">
			{galleries.map((gallery, index) => {

				return (<GalleryItem key={index} large={false} gallery={gallery} />);

			})}
			<div className="waiter2" ref={this.scrollItem} >{waiting}</div>
  			</div>
			</React.Fragment>
		)

	}

}

const Galerija = connect(mapStateToProps)(Galerija2);

export default Galerija;
