import React from "react";
import Admin from "../components/admin/admin";
import { Provider } from "react-redux";
import store from '../components/redux/store';

export default ({data}) =>  ( <div>
			<Provider store={store}>
			<Admin />
			</Provider>
			</div>
		      );

