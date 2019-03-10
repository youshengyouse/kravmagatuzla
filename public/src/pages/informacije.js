import React from "react";
import Presentation from "../components/presentation";
import { Provider } from "react-redux";
import store from '../components/redux/store';
import Info from "../components/informacije/informacije"

export default ({data}) =>  ( <div>
			<Provider store={store}><Presentation title="Informacije" location="Krav Maga Tuzla | Informacije">
			<Info />
			</Presentation></Provider>
			</div>
		      );

