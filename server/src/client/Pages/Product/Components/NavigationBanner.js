import React, { Component } from "react";

import styles from "./navigationBanner.css";

export const ICON_EXPAND = "expand";
export const ICON_COLLAPSE = "collapse";

class NavigationBanner extends Component {
    render() {
        const {
            productTitle,
            handleToggleShowProductContent,
            isProductContentVisible
        } = this.props;

        const toggleShowButtonIconDirection = isProductContentVisible ? ICON_COLLAPSE : ICON_EXPAND;
        return (
            <nav className={styles.root}>
                <h6>
                    <a data-id="productTitle" href="/" className="brand-logo left">{productTitle}</a>
                </h6>
                <a data-id="toggleShowProductContentButton" onClick={() => handleToggleShowProductContent()} role="button" className="right">
                    <i className="material-icons">
                        {toggleShowButtonIconDirection}
                    </i>
                </a>
            </nav>
        );
    }
}
export default NavigationBanner;