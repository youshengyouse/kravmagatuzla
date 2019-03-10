import { createStore } from 'redux';
import enter from './reducers';
const windowGlobal = typeof window !== 'undefined' && window;

// const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__());

let store;

if (windowGlobal) {

	store = createStore(enter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

}

if (!windowGlobal) {


	store = createStore(enter);
	
}

export default store;
