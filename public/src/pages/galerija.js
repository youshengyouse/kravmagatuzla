import React from "react";
import Presentation from "../components/presentation";
import { Provider } from "react-redux";
import store from '../components/redux/store';
import Galerija from "../components/galerija/galerija"

export default ({data}) =>  ( <div>
			<Provider store={store}><Presentation title="Galerija" location="Krav Maga Tuzla | Galerija">
			<Galerija />
			</Presentation></Provider>
			</div>
		      );

