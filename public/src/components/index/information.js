import React, { Component } from "react";
import "../components.css";

class Information extends Component {

render() {

		return (  
			 <div className="first-section">
			<div className="about-us black-background">
				<p className="about-us-text-intro">{this.props.aboutus}</p>
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
