import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProduct as fetchProductAction, setSelectedContentByIndex as setSelectedContentByIndexAction } from "./Actions/index";

import NavigationBanner from "./Components/NavigationBanner";
import ProductContent from "./Components/ProductContent";
import ProductContentShuffler, { shuffleTypes } from "./Components/ProductContentShuffler";

export class ProductPage extends Component {
        static needs = [fetchProductAction]

        constructor(props) {
            super(props);

            this.state = {
                isProductContentVisible: true
            };
        }
        
        handleShuffleContent = (type) => {
            const {
            actions: { setSelectedContentByIndex },
            product: {
                content
            },
            selectedContentIndex
            } = this.props;
           
            let newSelectedContentIndex = 0;
            if(type === shuffleTypes.next)
            {
                newSelectedContentIndex = selectedContentIndex >= (content.length - 1)? selectedContentIndex: selectedContentIndex + 1

            }
            else{
                newSelectedContentIndex = selectedContentIndex <= 0? selectedContentIndex: selectedContentIndex - 1
            }
            
            setSelectedContentByIndex(newSelectedContentIndex);
        }

        handleToggleShowProductContent = () => {
            const { isProductContentVisible } = this.state;

            this.setState({
                isProductContentVisible: !isProductContentVisible
              });
        }

        componentDidMount() {
            const {actions: {fetchProduct}, match: { params } } = this.props;
            
            fetchProduct(params.productKey);
        }

        render() {
            const {
            product: {
                title: productTitle ,
                content
            },
            selectedContentIndex
            } = this.props;

            const {isProductContentVisible} = this.state;
            const {thumbnail, description} = content[selectedContentIndex];
            const isNotFirstContentDisplayed = selectedContentIndex !== 0;
            const isNotLastContentDisplayed = selectedContentIndex === content.length - 1;
            const nextContentTitle= isNotLastContentDisplayed?   content[selectedContentIndex + 1]: "";
          
            return (
            <div>
                <NavigationBanner productTitle={productTitle} isProductContentVisible={isProductContentVisible} handleToggleShowProductContent={this.handleToggleShowProductContent}  />
                <ProductContent thumbnail={thumbnail} description={description} />
                <ProductContentShuffler nextContentTitle={nextContentTitle} handleShuffleContent={this.handleShuffleContent}/>
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