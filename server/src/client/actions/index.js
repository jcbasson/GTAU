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