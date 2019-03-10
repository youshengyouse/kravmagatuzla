const initialState = {
   
  	slideshow: {number: 0},
	information: {place: "kravMagaTuzla"},
	large: {status: false, post: false},
	instagramPostRegistration: {register: [], len: 0}
  
};

const enter = (state = initialState, action) => {

    switch (action.type) {
      case "REGISTER_INSTAGRAM_ITEM":
		
		let newRegister = state.instagramPostRegistration.register.slice();

		newRegister.push(action.post);

	return {...state, instagramPostRegistration: {register: newRegister, len: newRegister.length}};
      case "TOGGLE_SLIDESHOW":

	return {...state, large: { status: action.status, post: action.id }};
      case "UPDATE_INFORMATION":

	return {...state, information: {place: action.place}};
	case "UPDATE_NUMBER":

	return {...state, slideshow: {number: action.number}};

      default:
        return state;
    }
};

export default enter;
