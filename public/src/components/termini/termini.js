import React from "react";
import "../components.css";

export default () => {

		return (<div className="termini-container">

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
			<div className="instructor">
			<div className="instructor-header">
			<span>Instruktor</span>
			</div>
			<div className="instructor-c">
				<div className="instruktor-image-container">
				<div className="instruktor-image" > </div>
				<img alt="Mirza-Instruktor" className="small-instruktor" src="/instruktor-small.jpg" />
				</div>
				<span className="instructor-name" >Mirza Malkočević</span>
				<span className="instructor-number"><span className="null">Tel:</span> +387 61 998 742</span>
				<div  className="instrucotr-mail"><span>E-mail:  </span><a href="mailto:kravmagatuzla@outlook.com" target="_top">kravmagatuzla@outlook.com</a></div>
			</div>

			</div>

			</div>)

}

