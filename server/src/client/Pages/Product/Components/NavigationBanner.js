import React, { Component } from "react";
import classNames from "classnames";

import styles from "./navigationBanner.css";

export const ICON_EXPAND = "expand_more";
export const ICON_COLLAPSE = "expand_less";

class NavigationBanner extends Component {
    render() {
        const {
            productTitle,
            handleToggleShowProductContent,
            isProductContentVisible
        } = this.props;

        const rootClassNames = classNames(
            "nav-wrapper",
            [styles.root]: true
        );

        const toggleShowButtonIconDirection = isProductContentVisible ? ICON_COLLAPSE : ICON_EXPAND;
        return (
            <div classNames={rootClassNames}>
                <a data-id="productTitle" href="/" className="brand-logo left">{productTitle}</a>
                <a data-id="toggleShowProductContentButton" onClick={() => handleToggleShowProductContent()} role="button" className="right">
                    <i className="material-icons">
                        {toggleShowButtonIconDirection}
                    </i>
                </a>
            </div>
        );
    }
}
export default NavigationBanner;