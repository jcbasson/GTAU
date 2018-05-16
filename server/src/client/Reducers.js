import { combineReducers } from 'redux';
import productReducer from './Pages/Product/Reducers/productReducer';


export default combineReducers({
  productStore: productReducer,
});