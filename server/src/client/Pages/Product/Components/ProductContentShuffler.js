import React, { Component } from "react";

export const shuffleTypes = {
    previous: "previous",
    next: "next"
};
class ProductContentShuffler extends Component {
    render() {
        const {
            isNotFirstContentDisplayed,
            isNotLastContentDisplayed,
            nextContentTitle,
            handleShuffleContent
        } = this.props;

        return (
            <div>
                {isNotFirstContentDisplayed &&
                <a data-id="shuffleContentPreviousButton" onClick={() => handleShuffleContent(shuffleTypes.previous)} role="button" className="left">
                    <i className="material-icons">
                        navigate_before
                    </i>
                </a>}
                {isNotLastContentDisplayed &&
                <a data-id="shuffleContentNextButton" onClick={() => handleShuffleContent(shuffleTypes.next)} role="button" className="right">
                    {nextContentTitle}
                    <i className="material-icons">
                        navigate_before
                    </i>
                </a>}
            </div>
        );
    }
}

export default ProductContentShuffler;