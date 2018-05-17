import React from "react";
import sinon from "sinon";
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from "chai";

import shouldMapDispatchToProps from "../../helpers/shouldMapDispatchToProps";
import shouldMapStateToProps from "../../helpers/shouldMapStateToProps";

import { ProductPage as UnConnectedProductPage, mapStateToProps, mapDispatchToProps } from "../../../src/client/Pages/Product/ProductPage"
import { shuffleTypes } from "../../../src/client/Pages/Product/Components/ProductContentShuffler";

describe("Pages::Product::ProductPage", () => {
    const setup = (propOverrides = {}) => {

        const setSelectedContentByIndexSpy = sinon.spy();
        const fetchProductSpy = sinon.spy();

        const baseState = {
                productStore: {
                        product: {
                        "title": "Buying an iPad Mini?",
                        "content": [
                            {
                                "title": "First content title",
                                "thumbnail": "ipad-mini.jpg",
                                "description": "First content"
                            },
                            {
                                "title": "Second content title",
                                "thumbnail": "",
                                "description": "Second content"
                            },
                            {
                                "title": "Third content title",
                                "description": "Third content"      
                            },
                            {
                                "title": "Fourth",
                                "description": "Foruth content" 
                            }
                        ]
                    },
                    selectedContentIndex: 0
                }
            };

        const propsExpectedFromState = {
            product: {
                "title": "Buying an iPad Mini?",
                "content": [
                    {
                        "title": "First content title",
                        "thumbnail": "ipad-mini.jpg",
                        "description": "First content"
                    },
                    {
                        "title": "Second content title",
                        "thumbnail": "",
                        "description": "Second content"
                     },
                    {
                        "title": "Third content title",
                        "description": "Third content"      
                    },
                    {
                        "title": "Fourth",
                        "description": "Foruth content" 
                    }
                ]
            },
            selectedContentIndex: 0
        };

        const props = {
            match: { 
                params : {
                    productKey: "ipad-mini"
                }
            },
            actions: {
                setSelectedContentByIndex: setSelectedContentByIndexSpy,
                fetchProduct: fetchProductSpy
            },
            ...propsExpectedFromState,
            ...propOverrides
        };

        const wrapper = shallow(<UnConnectedProductPage {...props} />);

        return {
            baseState,
            propsExpectedFromState,
            setSelectedContentByIndexSpy,
            fetchProductSpy,
            wrapper,
            wrapperInstance: () => wrapper.instance(),
            navigationBanner: () => wrapper.find("NavigationBanner"),
            productContent: () => wrapper.find("ProductContent"),
            productContentShuffler: () => wrapper.find("ProductContentShuffler")
        };
    };

    describe("renders:", () => {
       
        it("should render the navigation banner", () => {
            const { navigationBanner } = setup();
            expect(navigationBanner().exists()).to.equal(true);
        });

        it("should render the product content", () => {
            const { productContent } = setup();
            expect(productContent().exists()).to.equal(true);
        });

        it("should render the product content shuffler", () => {
            const { productContentShuffler } = setup();
            expect(productContentShuffler().exists()).to.equal(true);
        });
    });

    describe("lifecyle:", () => {
        describe("componentDidMount:", () => {
            it("should call the action to fetch the product with the provided product key", () => {
                const { wrapperInstance, fetchProductSpy } = setup();
                wrapperInstance().componentDidMount();
                expect(fetchProductSpy.firstCall.args).to.deep.equal([{productKey:"ipad-mini"}]);
            });
        });
    });

    describe("actions:", () => {
        describe("handleShuffleContent:", () => {
            it("should call the set selected content by index method with the next index when the type of shuffle is 'next'", () => {
                const { wrapperInstance, setSelectedContentByIndexSpy } = setup();
                wrapperInstance().handleShuffleContent(shuffleTypes.next);
                expect(setSelectedContentByIndexSpy.firstCall.args).to.deep.equal([1]);
            });

            it("should call the set selected content by index method with the previous index when the type of shuffle is 'previous'", () => {
                const { wrapperInstance, setSelectedContentByIndexSpy } = setup({selectedContentIndex: 3});
                wrapperInstance().handleShuffleContent(shuffleTypes.previous);
                expect(setSelectedContentByIndexSpy.firstCall.args).to.deep.equal([2]);
            });

            //TODO: Mount this component to test connect actions
            // it.only("should show the next content when the type of shuffe is 'next'", ()=> {
            //     const { productContent, wrapperInstance, wrapper } = setup();
            //     wrapperInstance().handleShuffleContent(shuffleTypes.next);
            //     wrapper.update();
            //     const expectdResult = {
            //         "thumbnail": "",
            //         "description": "Second content"
            //     };
            //     expect(productContent().props()).to.equal(expectdResult);
            // })
        });

        describe("handleToggleShowProductContent:", ()=> {
            it("should toggle the product content visibility status", () => {
                const { wrapperInstance, wrapper } = setup();
                const productPageInstance = wrapperInstance()
                productPageInstance.handleToggleShowProductContent();
                wrapper.update();
            
                expect(productPageInstance.state.isProductContentVisible).to.equal(false);
            });

        });
    });

    describe("redux:", () => {
        const { baseState, propsExpectedFromState } = setup();
        shouldMapStateToProps(propsExpectedFromState)(mapStateToProps, baseState);
        shouldMapDispatchToProps(["setSelectedContentByIndex", "fetchProduct"])(mapDispatchToProps);
    });
});
