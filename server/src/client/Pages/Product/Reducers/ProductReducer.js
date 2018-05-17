import { FETCH_PRODUCT, SET_SELECTED_PRODUCT_CONTENT } from "../Actions";

export default (state=[], action) => {
        switch(action.type) {
            case FETCH_PRODUCT:
                const product = action.payload.data;
                return {
                product,
                selectedContentIndex:0
                };
            case SET_SELECTED_PRODUCT_CONTENT:
                const {selectedContentIndex} = action;
                console.log("new state: ====", action)
                return {
                ...state,
                selectedContentIndex
                };
            default:
            return state;
        }
}