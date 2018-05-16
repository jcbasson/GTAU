import React, { Component } from "react";
import classNames from "classnames";

import styles from "./productContent.css";

class ProductContent extends Component {
    render() {
        const {
            thumbnail,
            description
        } = this.props;
        return (
            <div>
                <img data-id="productThumbnail" alt="Product Thumbnail" className="responsive-img" src={thumbnail} />
                <p data-id="productDescription" className="flow-text">{description}</p>
            </div>
        );
    }
}

export default ProductContent;