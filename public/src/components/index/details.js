import React, { Component } from "react";
import "../components.css";
import moment from "moment";
import Linkify from "react-linkify";
import _ from "underscore";

import { connect } from "react-redux";

const mapStateToProps = state => {

    return {large: state.large};

};

class Slideshow2 extends Component {

	constructor(props) {

		super(props);

		this.state = {picture: false, small: false, visible: false};

		this.closeImage = this.closeImage.bind(this);
		this.toggleImage = this.toggleImage.bind(this);
		this.trackWindowSize = this.trackWindowSize.bind(this);
		this.resize = _.throttle(this.trackWindowSize, 400);

		this.showImage = this.showImage.bind(this);


	}

	trackWindowSize() {

		if ((window.innerWidth || document.documentElement.clientWidth) <= 500) {

			this.setState({ small: true });

		}

		else {

			this.setState({ small: false });

		}


	}

	toggleImage(e) {

		let target = e.target;

		if (target.className === "instagram-slideshow-next" || target.className === "fas fa-chevron-right") {

			if (this.state.picture === this.props.slideshow.length - 1 ) {

				this.setState({picture: 0});

			}

			else {

				this.setState({picture:  this.state.picture + 1});

			}




		}

		if (target.className === "instagram-slideshow-previous" || target.className === "fas fa-chevron-left") {


			if (this.state.picture === 0) {

				this.setState({picture: this.props.slideshow.length - 1});

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
					this.props.dispatch({ type: "TOGGLE_SLIDESHOW", status: false, id: false });
					e.stopPropagation();

		
			}
		
			
		}


	componentDidMount() {

		this.props.slideshow.forEach((slide, index) => {


				if (slide.node.id === this.props.post.node.id) {

					this.setState({ picture: index });

				}


		});

		window.addEventListener('resize', this.resize);
		this.trackWindowSize();


	}

	componentWillUnmount() {

		window.removeEventListener('resize', this.resize);

	}

	showImage() {

		
		this.setState({ visible: true });
		
	}

	render() {

		let slide;
		let link;
		let commentIcon;
		let caption;
		let comments;
		let likes;
		let timestamp;

		if (this.state.picture || this.state.picture === 0) {

			slide = this.props.slideshow[this.state.picture].node;
			link = `https://www.instagram.com/p/${slide.id}/`;
			timestamp = slide.timestamp;
	
			caption = slide.caption;
			
			if (slide.likes) {

			    likes = slide.likes;

			}
			
			
			if (slide.comments) {

				commentIcon = <i className="fas fa-comment footer-icon-ins"></i>;
				comments = slide.comments;

			}


		}

		return (
<div onClick={this.closeImage} className="instagram-post-large instagram-post-large-visible">

		<div  className="instagram-post-large-content">
	
		<div className="large-image-cointaner">
			<div onClick={this.toggleImage} className="instagram-slideshow-previous"> <i className="fas fa-chevron-left"></i></div>
		{this.props.slideshow.map((photo, index) => {

			let instagramPostClass = "instagram-post-large-image";
			let smallImg = photo.node.original;
			let loadFunction;
		
			if (this.state.picture || this.state.picture === 0) {

				if (this.state.small) {

					smallImg = slide.thumbnails[4].src;
					
				}

			}

			if (this.state.picture === index) {

				loadFunction = this.showImage;

				if (this.state.visible) {

					instagramPostClass = "instagram-post-large-image instagram-post-large-image-visible";

				}
				

			}

			return <React.Fragment key={photo.node.id}><a aria-label="krav-maga-tuzla-instagram-post" rel="noopener noreferrer" href={link} target="_blank"><div className={instagramPostClass} style={{backgroundImage: `url("${smallImg}")`}}></div></a>
			<img alt="You shouldn't be able to see me." src={smallImg} onLoad={loadFunction} className="hidden-instagram-slideshow-image-loader"/>
			</React.Fragment>

			})}
			
			<div onClick={this.toggleImage} className="instagram-slideshow-next"> <i className="fas fa-chevron-right"></i> </div>
			</div>

			<div className="instagram-post-content">
			<i onClick={this.closeImage} className="fas fa-window-close close-instagram-post"></i>
			<div className="instagram-post-content-caption">
			<div style={{ marginBottom: "0.5rem", marginTop: "1rem" }}>
			<a title="krav_maga_tuzla" aria-label="krav-maga-tuzla-instagram-post" rel="noopener noreferrer" href="https://www.instagram.com/krav_maga_tuzla/" target="_blank">krav_maga_tuzla
</a></div>
			<div className="ins-caption"><Linkify properties={{target: '_blank', rel:"noopener noreferrer"}}>{caption}</Linkify></div>

			</div>

			<div className="instagram-post-content-footer">
			<div>{likes}<i className="far fa-heart footer-icon-ins"></i>{comments}{commentIcon}{moment(new Date(timestamp * 1000)).format("MMM Do YYYY")}</div>


			</div>
			</div>

		</div>

			</div>

			




			

			);


	}

}

const Slideshow = connect(mapStateToProps)(Slideshow2);

class Details2 extends Component {

		constructor(props) {

			super(props);

			this.state = { large: false }


			this.onVisibilityChange = this.onVisibilityChange.bind(this);
			this.isElementInViewPort = this.isElementInViewPort.bind(this);
			this.animateElement = this.animateElement.bind(this);
			this.fireUpAnimation = _.throttle(this.animateElement, 400);
			this.instagramLink = React.createRef();
			this.instagramLinkHelper = React.createRef();
			this.openImage = this.openImage.bind(this);


		}

		openImage(e) {

			e.preventDefault();
			document.body.style.overflow = "hidden"
			this.props.dispatch({ type: "TOGGLE_SLIDESHOW", status: true, id: this.props.instagram.node.id });

		}


		componentDidMount() {

			window.addEventListener("scroll", this.fireUpAnimation);


		}

		componentWillUnmount() {

			window.removeEventListener("scroll", this.fireUpAnimation);
			document.body.style.overflow = "auto";
			this.props.dispatch({ type: "TOGGLE_SLIDESHOW", status: false, id: false });

		}


		animateElement() {

			let instagramPost = this.instagramLink.current;
			let instagramHelper = this.instagramLinkHelper.current;


			this.onVisibilityChange(instagramHelper, () => {

				instagramPost.className = "instagram-post instagram-post-visible";
				window.removeEventListener("scroll", this.fireUpAnimation);


			}, () => { instagramPost.className = "instagram-post";  });

		}

	




	onVisibilityChange(el, callback, callback2) {

        	let visible = this.isElementInViewPort(el);
  
            	if (visible) {
                
                	if (typeof callback == "function") {

                    		callback();

                	}
            	}

            	else {

			if (typeof callback2 == "function") {

                    		callback2();

                	}

            	}

    	};

    isElementInViewPort(el) {
     
        let rect = el.getBoundingClientRect();
        let innHT;
        let innHB;

        if ((window.innerWidth || document.documentElement.clientWidth) <= 900) {

            innHT = -130;
            innHB = (window.innerHeight || document.documentElement.clientHeight) + 160;

        }

        if ((window.innerWidth || document.documentElement.clientWidth) > 900) {

         
            innHT = -210;
            innHB = (window.innerHeight || document.documentElement.clientHeight) + 180;
   
        }
      
        return (

            rect.top >= innHT &&
            rect.left >= 0 &&
            rect.bottom <= innHB && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) 

        );
    };


		render() {

		let post = this.props.instagram;
		let title = post.node.caption;
		let link = `https://www.instagram.com/p/${post.node.id}/`;
		let commentIcon;
		let slideshow;
		
		if (!post.node.caption) {

			title = "";

		}

		if (this.props.large.status && this.props.large.post === post.node.id) {

			slideshow = <Slideshow slideshow={this.props.slideshow} post={post} />

		}

		return (  
			<div className="instagram-fix-last-child"><div ref={this.instagramLinkHelper} className="instagram-transition-helper"></div>

		{slideshow}
			<a onClick={this.openImage} aria-label="krav-maga-tuzla-instagram-post" rel="noopener noreferrer" href={link} target="_blank" className="instagram-post" ref={this.instagramLink} key={post.node.id}><img title={title} style={{width: "100%", height: "auto"}} alt="" src={post.node.thumbnails[4].src} /></a>
			
			</div>

		)

	}

}

const Details = connect(mapStateToProps)(Details2);

export default Details;
