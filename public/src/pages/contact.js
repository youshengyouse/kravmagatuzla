import React from "react";
import Presentation from "../components/presentation";
import { Provider } from "react-redux";
import store from '../components/redux/store';
import Kontakt from "../components/kontakt/kontakt"

export default ({data}) =>  ( <div>
			<Provider store={store}><Presentation title="Kontakt" location="Krav Maga Tuzla | Kontakt">
			<Kontakt />
			</Presentation></Provider>
			</div>
		      );

