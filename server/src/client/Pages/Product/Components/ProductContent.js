import React, { Component } from "react";


class ProductContent extends Component {
    render() {
        const {
            thumbnail,
            description
        } = this.props;

        const descriptionMarkup={__html : description};

        return (
            <div className="row">
                <div className="col s12 m4 l4">
                    <img data-id="productThumbnail" alt="Product Thumbnail" className="responsive-img" src={`/images/${thumbnail}`} />
                </div>
                <div className="col s12 m8 l8">
                    <p data-id="productDescription" className="flow-text" dangerouslySetInnerHTML={descriptionMarkup} ></p>
                </div>
            </div>
        );
    }
}

export default ProductContent;