export const FETCH_PRODUCT = "fetch_product";
export const fetchProduct = (productKey) => async (dispatch, getState, api) => {
    const res = await api.get("/product?productKey=ipad-mini");
    console.log('productKey = ',productKey);
    dispatch({
        type: FETCH_PRODUCT,
        payload: res
    });
}