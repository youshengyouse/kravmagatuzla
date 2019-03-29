import React from "react";
import Presentation from "../components/presentation";
import Information from "../components/index/information";
import Partneri from "../components/index/partneri";
import Details from "../components/index/details";
import { graphql } from "gatsby";
import { Provider } from "react-redux";
import store from '../components/redux/store';

export default ({data}) => {

			let instagram = data.allInstaNode.edges.sort((x, y) => {

    				return new Date(parseInt(y.node.timestamp) * 1000) - new Date(parseInt(x.node.timestamp) * 1000);

			}).slice(0, 10);


			return ( <React.Fragment>
			<Provider store={store}><Presentation location="Krav Maga Tuzla" title={data.site.siteMetadata.title}>
			<Information aboutus={data.site.siteMetadata.aboutus}/>
			<div className="second-section">
			
			<div className="about-us">
				<div className="about-us-title about-us-instagram"><a title="krav_maga_tuzla" href="https://www.instagram.com/krav_maga_tuzla/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
			<div className="instagram-posts">
			{instagram.map((node, index) => {

				let key = node.node.id;
		
				return <Details slideshow={instagram} key={key} instagram={node} />;


			})}
			</div>
			</div>
			</div>
			<Partneri />
			</Presentation>
			</Provider>
			</React.Fragment>
		      )};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
	aboutus
      }
    }
    allInstaNode {
    edges {
      node {
        id
        likes
        comments
        original
        timestamp
        caption
        # Only available with the public api scraper
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
  }`
