const initialState = {
   
  	slideshow: {number: 0, ready: false, zIndex: 10000},
	information: {place: "kravMagaTuzla"},
	large: {status: false, post: false},
	instagramPostRegistration: {register: [], len: 0},
	slideshow2: { status: false, gallery: false },
	galerija: {posts: [], length: 0, per_page: 8, current_page: 0, ran: false, last_page: Number.POSITIVE_INFINITY, total: 0, search: false},
	editorPosts: {posts: [], length: 0, per_page: 8, current_page: 0, ran: false, last_page: Number.POSITIVE_INFINITY, total: 0, search: false}
  
};

const enter = (state = initialState, action) => {

    switch (action.type) {
	
	// MAIN PAGE GIMMICKS	

      case "TOGGLE_SLIDESHOW2":

        return {...state, slideshow2: { status: action.status, gallery: action.gallery }};
      case "REGISTER_INSTAGRAM_ITEM":
		
		let newRegister = state.instagramPostRegistration.register.slice();

		newRegister.push(action.post);

	return {...state, instagramPostRegistration: {register: newRegister, len: newRegister.length}};
      case "TOGGLE_SLIDESHOW":

	return {...state, large: { status: action.status, post: action.id }};
      case "UPDATE_INFORMATION":

	return {...state, information: {place: action.place}};
	case "UPDATE_NUMBER":

	return {...state, slideshow: {...state.slideshow, number: action.number}};

	case "SLIDESHOW_LOADED":

	return {...state, slideshow: {...state.slideshow, ready: true}};

	case "ZINDEX":

	return {...state, slideshow: {...state.slideshow, zIndex: -10000}};
	
	// EDITOR CASES

	case "GET_POSTS":

	return {...state, editorPosts: {posts: action.posts, length: action.posts.length, current_page: action.current_page, per_page: state.editorPosts.per_page, ran: action.ran, total: action.total, search: action.search, last_page: action.last_page}};	
	case "GET_POSTS_GALLERY":

	return {...state, galerija: {posts: action.posts, length: action.posts.length, current_page: action.current_page, per_page: state.editorPosts.per_page, ran: action.ran, total: action.total, search: action.search, last_page: action.last_page}};	
	case "REMOVE_IMAGE":

		let posts = state.editorPosts.posts.map((post, index) => {

			if (post.id === action.galleryId) {

				return { ...post, items: post.items.filter((image) => {

					return image.id !==  action.id;

				})}

			}

			else {

				return post;

			}

		});


	return {...state, editorPosts: {...state.editorPosts, posts: posts, length: posts.length}};	

	case "REMOVE_GALLERY":

		let newGallery = state.editorPosts.posts.filter((gallery) => {

				return gallery.id !==  action.id;

			});

	return {...state, editorPosts: {...state.editorPosts, posts: newGallery, length: newGallery.length, total: state.editorPosts.total - 1}};

	case "EDIT_TITLE":

			let newGalleryTitle = state.editorPosts.posts.map((gallery) => {
		
				let newGallery = gallery;

				if (gallery.id ===  action.id) {

					newGallery.title = action.title;
			
				}

				return newGallery;
			});

	return {...state, editorPosts: { ...state.editorPosts, posts: newGalleryTitle, length: newGalleryTitle.length }};

	case "EDIT_DESCRIPTION":

			let newGalleryDescription = state.editorPosts.posts.map((gallery) => {
		
				let newGallery = gallery;

				if (gallery.id ===  action.id) {

					newGallery.description = action.description;
			
				}

				return newGallery;
			});

	return {...state, editorPosts: { ...state.editorPosts, posts: newGalleryDescription, length: newGalleryDescription.length }};

	case "ADD_IMAGE":

			let newGalleryItem = state.editorPosts.posts.map((gallery) => {
		
				let newGallery = gallery;

				if (gallery.id ===  action.id) {

					newGallery.items.push(action.item);
			
				}

				return newGallery;
			});

	return {...state, editorPosts: { ...state.editorPosts, posts: newGalleryItem, length: newGalleryItem.length}};
      default:
        return state;
    }
};



export default enter;
