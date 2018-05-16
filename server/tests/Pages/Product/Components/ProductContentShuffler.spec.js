import React from "react";
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';
import sinon from "sinon";
import ProductContentShuffler, { shuffleTypes } from "../../../../src/client/Pages/Product/Components/ProductContentShuffler";

describe("Pages::Product::Components::ProductContentShuffler", () => {
    const setup = (propOverrides = {}) => {
        const handleShuffleContentSpy = sinon.spy();
        const props = {
            isNotFirstContentDisplayed: false,
            isNotLastContentDisplayed: false,
            nextContentTitle: "Dummy Content Title",
            handleShuffleContent: handleShuffleContentSpy,
            ...propOverrides
        };
        const wrapper = () => shallow(<ProductContentShuffler {...props} />);
        return {
            props,
            wrapper,
            handleShuffleContentSpy,
            shuffleContentPreviousButton: () => wrapper().find("[data-id='shuffleContentPreviousButton']"),
            shuffleContentNextButton: () => wrapper().find("[data-id='shuffleContentNextButton']")
        };
    };

    describe("render:", () => {
        it("should render the shuffle to previous content button when it is not the first block of content", () => {
            const { shuffleContentPreviousButton } = setup({ isNotFirstContentDisplayed: true });
            expect(shuffleContentPreviousButton().exists()).to.equal(true);
        });

        it("should not render the shuffle to previous content button when it is the first block of content", () => {
            const { shuffleContentPreviousButton } = setup();
            expect(shuffleContentPreviousButton().exists()).to.equal(false);
        });

        it("should render the shuffle to next content button when it is not the last block of content", () => {
            const { shuffleContentNextButton } = setup({ isNotLastContentDisplayed: true });
            expect(shuffleContentNextButton().exists()).to.equal(true);
        });

        it("should not render the shuffle to previous content button when it is the last block of content", () => {
            const { shuffleContentNextButton } = setup();
            expect(shuffleContentNextButton().exists()).to.equal(false);
        });
    });

    describe("actions:", () => {
        it("should call the shuffle content handler with instructions to shuffle to previous content when the previous button is clicked", () => {
            const { shuffleContentPreviousButton, handleShuffleContentSpy } = setup({ isNotFirstContentDisplayed: true });

            shuffleContentPreviousButton().simulate("click");
            expect(handleShuffleContentSpy.firstCall.args).to.deep.equal([shuffleTypes.previous]);
        });

        it("should call the shuffle content handler with instructions to shuffle to next content when the next button is clicked", () => {
            const { shuffleContentNextButton, handleShuffleContentSpy } = setup({ isNotLastContentDisplayed: true });

            shuffleContentNextButton().simulate("click");
            expect(handleShuffleContentSpy.firstCall.args).to.deep.equal([shuffleTypes.next]);
        });
    });
});