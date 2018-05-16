import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProduct } from "./Actions/index";

import NavigationBanner from "./Components/NavigationBanner";
import ProductContent from "./Components/ProductContent";
import ProductContentShuffler from "./Components/ProductContentShuffler";

export class ProductPage extends Component {
        static needs = [fetchProduct]
        
        handleShuffleContent = (type) => {
            const {
            actions: { setSelectedContentByIndex },
            } = this.props;

            setSelectedContentByIndex(0);
        }

        componentDidMount() {
            const {fetchProduct, match: { params } } = this.props;
            
            fetchProduct(params.productKey);
        }

        render() {
            const {product} = this.props;
            
            return (
            <div>
                <NavigationBanner />
                <ProductContent />
                <ProductContentShuffler />
            </div>
            )
        }
}

export const mapStateToProps = (state) => {
    const { product, selectedContentIndex } = state;

    return { 
        product,
        selectedContentIndex
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            setSelectedContentByIndex: setSelectedContentByIndexAction
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);