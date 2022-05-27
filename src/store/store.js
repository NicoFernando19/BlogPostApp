import { configureStore } from '@reduxjs/toolkit'
import { 
    postReducer, 
    userReducer,
    albumReducer,
    photoReducer,
    postDetailReducer } from './reducers/allReducers'

export default configureStore({
  reducer: {
      posts: postReducer,
      allUsers: userReducer,
      allAlbums: albumReducer,
      allPhotos: photoReducer,
      postDetail: postDetailReducer
  }
})