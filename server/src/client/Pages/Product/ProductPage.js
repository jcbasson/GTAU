import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProduct as fetchProductAction, setSelectedContentByIndex as setSelectedContentByIndexAction } from "./Actions/index";

import NavigationBanner from "./Components/NavigationBanner";
import ProductContent from "./Components/ProductContent";
import ProductContentShuffler, { shuffleTypes } from "./Components/ProductContentShuffler";

export class ProductPage extends Component {
        static needs = [fetchProductAction]
        
        handleShuffleContent = (type) => {
            const {
            actions: { setSelectedContentByIndex },
            selectedContentIndex
            } = this.props;
           
            const newSelectedContentIndex = type === shuffleTypes.next? selectedContentIndex + 1: selectedContentIndex - 1;
            
            setSelectedContentByIndex(newSelectedContentIndex);
        }

        componentDidMount() {
            const {actions: {fetchProduct}, match: { params } } = this.props;
            
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
            setSelectedContentByIndex: setSelectedContentByIndexAction,
            fetchProduct: fetchProductAction
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);