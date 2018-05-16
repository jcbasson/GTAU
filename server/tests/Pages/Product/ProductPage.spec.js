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

        const baseState = {
            product: {
                "title": "Buying an iPad Mini?",
                "content": [
                    {
                    "title": "What Types of iPad Minis Are Available?",
                    "thumbnail": "ipad-mini.jpg",
                    "description": "The iPad Mini is one of the latest offerings in Apple's stable of tablet computers, and � as the name suggests � differs from its older siblings in that it is much smaller in size.<br /><br />Just because the iPad Mini is physically smaller in size doesn't mean it's smaller in computing power. The tablet, which has features such as a 5MP camera, comes in a 16 GB, 32 GB, and 64 GB form. A Wi-Fi and a Wi-Fi + Cellular model are both available. As an added bonus, the iPad Mini comes in both white and black."
                    },
                    {
                    "title": "How Much Storage Do I Need?",
                    "thumbnail": "",
                    "description": "If you're trying to decide which of the options � 16GB, 32GB, and 64GB � is right for you, you need to think about how you plan to use your iPad Mini. If you already have a host of other gadgets, such as the standard size iPad or an iPhone, then the 16GB may be all you need for a sturdy, reliable, on-the-go tablet. The more you plan to do with your tablet, and the more apps you plan to download, the more storage you'll need."
                    },
                    {
                    "title": "Should I Choose Wi-Fi or Wi-Fi + Cellular?",
                    "description": "Whether or not you need cellular for your iPad Mini depends on, again, how you're going to use it. If you're going to be taking it with you on the go, or even using it as an alternative to your cell phone, then Wi-Fi + Cellular is a must. However, if you only plan to use it at home, with the occasional outing to work or the local bookstore, plain Wi-Fi may be a better and more affordable alternative."
                    },
                    {
                    "title": "What Comes with the iPad Mini?",
                    "description": " The iPad Mini only ships brand new with the Lightning charger offered by Apple. Other accessories may be packaged along with the iPad Mini when it's being offered by a private seller on Gumtree. If you want to save a little money � or even just want a little convenience � consider scoping out package deals that include items such as the Smart Cover, Bluetooth keyboards, and a stylus.<br /><br />Check out the options on Gumtree, and you can have a great gadget at your disposal for a very fair price."
                    }
                ]
                },
                selectedContentIndex: 0
            };

        const propsExpectedFromState = {
            product: {
                "title": "Buying an iPad Mini?",
                "content": [
                {
                "title": "What Types of iPad Minis Are Available?",
                "thumbnail": "ipad-mini.jpg",
                "description": "The iPad Mini is one of the latest offerings in Apple's stable of tablet computers, and � as the name suggests � differs from its older siblings in that it is much smaller in size.<br /><br />Just because the iPad Mini is physically smaller in size doesn't mean it's smaller in computing power. The tablet, which has features such as a 5MP camera, comes in a 16 GB, 32 GB, and 64 GB form. A Wi-Fi and a Wi-Fi + Cellular model are both available. As an added bonus, the iPad Mini comes in both white and black."
                },
                {
                "title": "How Much Storage Do I Need?",
                "thumbnail": "",
                "description": "If you're trying to decide which of the options � 16GB, 32GB, and 64GB � is right for you, you need to think about how you plan to use your iPad Mini. If you already have a host of other gadgets, such as the standard size iPad or an iPhone, then the 16GB may be all you need for a sturdy, reliable, on-the-go tablet. The more you plan to do with your tablet, and the more apps you plan to download, the more storage you'll need."
                },
                {
                "title": "Should I Choose Wi-Fi or Wi-Fi + Cellular?",
                "description": "Whether or not you need cellular for your iPad Mini depends on, again, how you're going to use it. If you're going to be taking it with you on the go, or even using it as an alternative to your cell phone, then Wi-Fi + Cellular is a must. However, if you only plan to use it at home, with the occasional outing to work or the local bookstore, plain Wi-Fi may be a better and more affordable alternative."
                },
                {
                "title": "What Comes with the iPad Mini?",
                "description": " The iPad Mini only ships brand new with the Lightning charger offered by Apple. Other accessories may be packaged along with the iPad Mini when it's being offered by a private seller on Gumtree. If you want to save a little money � or even just want a little convenience � consider scoping out package deals that include items such as the Smart Cover, Bluetooth keyboards, and a stylus.<br /><br />Check out the options on Gumtree, and you can have a great gadget at your disposal for a very fair price."
                }
                ]
                },
            selectedContentIndex: 0
        };

        const props = {
            actions: {
            setSelectedContentByIndex: setSelectedContentByIndexSpy
            },
            ...propsExpectedFromState,
            ...propOverrides
        };

        const wrapper = shallow(<UnConnectedProductPage {...props} />);

        return {
            baseState,
            propsExpectedFromState,
            setSelectedContentByIndexSpy,
            wrapperInstance: () => wrapper.instance(),
            navigationBanner: () => wrapper.find("NavigationBanner"),
            productContent: () => wrapper.find("ProductContent"),
            productContentShuffler: () => wrapper.find("ProductContentShuffler")
        };
    };

    describe("renders:", () => {
       
    });

    describe("actions:", () => {
        describe("handleShuffleContent:", () => {
            it("should call the set selected content by index method with the next index when the type of shuffle is 'next'", () => {
                const { wrapperInstance, setSelectedContentByIndexSpy } = setup();
                wrapperInstance().handleShuffleContent(shuffleTypes.next);
                expect(setSelectedContentByIndexSpy.firstCall.args).to.deep.equal(1);
            });

            it("should call the set selected content by index method with the previous index when the type of shuffle is 'previous'", () => {
                const { wrapperInstance, setSelectedContentByIndexSpy } = setup({selectedContentIndex: 3});
                wrapperInstance().handleShuffleContent(shuffleTypes.previous);
                expect(setSelectedContentByIndexSpy.firstCall.args).to.deep.equal(2);
            });
        });
    });

    describe("redux:", () => {
        const { baseState, propsExpectedFromState } = setup();
        shouldMapStateToProps(propsExpectedFromState)(mapStateToProps, baseState);
        shouldMapDispatchToProps(["fetchProduct"])(mapDispatchToProps);
    });
});
