export const FETCH_PRODUCT = "fetch_product";
export const fetchProduct = (productKey) => async (dispatch, getState, api) => {

 if(productKey)
 {
 const res = await api.get(`/product?productKey=${productKey}`);
 dispatch({
 type: FETCH_PRODUCT,
 payload: res
 });
 } 
}

export const SET_SELECTED_PRODUCT_CONTENT = "set_selected_product_content";
export const setSelectedContentByIndex = index => dispatch => {
    dispatch({
        type: SET_SELECTED_PRODUCT_CONTENT,
        index
    });
};