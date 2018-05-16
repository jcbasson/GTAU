import React from "react";
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';
import sinon from "sinon";
import NavigationBanner, { ICON_EXPAND, ICON_COLLAPSE } from "../../../../src/client/Pages/Product/Components/NavigationBanner";

describe("Pages::Product::Components::NavigationBanner", () => {
    const setup = (propOverrides = {}) => {
        const handleToggleShowProductContentSpy = sinon.spy();
        const props = {
            productTitle: "My product title",
            handleToggleShowProductContent: handleToggleShowProductContentSpy,
            isProductContentVisible: false,
            ...propOverrides
        };
        const wrapper = () => shallow(<NavigationBanner {...props} />);
        return {
            props,
            wrapper,
            handleToggleShowProductContentSpy,
            productTitleComponent: () => wrapper().find("[data-id='productTitle']"),
            toggleShowProductContentButton: () => wrapper().find("[data-id='toggleShowProductContentButton']"),
            toggleShowProductContentButtonIcon: () => wrapper().find("[className='material-icons']")
        };
    };

    describe("render:", () => {
        it("should render the product title", () => {
            const { productTitleComponent, props: { productTitle } } = setup();
            expect(productTitleComponent().text()).to.equal(productTitle);
        });
        it("should render the toggle product content button", () => {
            const { toggleShowProductContentButton } = setup();
            expect(toggleShowProductContentButton().exists()).to.equal(true);
        });
        it("should render the toggle product content button with an icon pointing upwards when product content is not visible ", () => {
            const { toggleShowProductContentButtonIcon } = setup();
            expect(toggleShowProductContentButtonIcon().text()).to.equal(ICON_EXPAND);
        });
        it("should render the toggle product content button with an icon pointing downwards when product content is visible ", () => {
            const { toggleShowProductContentButtonIcon } = setup({ isProductContentVisible: true });
            expect(toggleShowProductContentButtonIcon().text()).to.equal(ICON_COLLAPSE);
        });
    });

    describe("actions:", () => {
        it("should call the toggle show product content handler when the toggle show button content button is clicked", () => {
            const { toggleShowProductContentButton, handleToggleShowProductContentSpy } = setup();

            toggleShowProductContentButton().simulate("click");
            expect(handleToggleShowProductContentSpy.calledOnce).to.equal(true);
        });
    });
});