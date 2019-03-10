import React from "react";
import Presentation from "../components/presentation";
import { Provider } from "react-redux";
import store from '../components/redux/store';
import Termini from "../components/termini/termini"

export default ({data}) =>  ( <div>
			<Provider store={store}><Presentation title="Termini" location="Krav Maga Tuzla | Termini">
			<Termini />
			</Presentation></Provider>
			</div>
		      );

