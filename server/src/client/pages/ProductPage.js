import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions";

class ProductPage extends Component {
    static needs = [fetchProduct]
    
    componentDidMount() {
        const {fetchProduct,  match: { params } } = this.props;
        
        fetchProduct(params.productKey);
    }

    render() {
        const {product} = this.props;
       
        return (
            <div>
                Here's a product:  {product.title}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { product: state.product };
}

export default connect(mapStateToProps, { fetchProduct })(ProductPage);