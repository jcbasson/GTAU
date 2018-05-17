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
            <div className="row">
                {isNotFirstContentDisplayed &&
                    <button data-id="shuffleContentPreviousButton" onClick={() => handleShuffleContent(shuffleTypes.previous)} className="left">
                        {shuffleTypes.previous}
                    </button>}
                {isNotLastContentDisplayed &&
                    <button data-id="shuffleContentNextButton" onClick={() => handleShuffleContent(shuffleTypes.next)} className="right">
                        {nextContentTitle}
                    </button>}
            </div>
        );
    }
}

export default ProductContentShuffler;