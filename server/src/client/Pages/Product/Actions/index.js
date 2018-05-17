export const FETCH_PRODUCT = "fetch_product";
export const fetchProduct = ({productKey}) => async (dispatch, getState, api) => {
    
    const res = await api.get(`/product?productKey=${productKey}`);

    dispatch({
        type: FETCH_PRODUCT,
        payload: res
    });
}

export const SET_SELECTED_PRODUCT_CONTENT = "set_selected_product_content";
export const setSelectedContentByIndex = selectedContentIndex => dispatch => {
   
    dispatch({
        type: SET_SELECTED_PRODUCT_CONTENT,
        selectedContentIndex
    });
};