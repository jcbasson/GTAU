import React from "react";
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';

import ProductContent from "../../../../src/client/Pages/Product/Components/ProductContent";

describe("Pages::Product::Components::ProductContent", () => {
    const setup = (propOverrides = {}) => {
        const props = {
            thumbnail: "some_cool_pic.jpg",
            description: "So dummy text",
            ...propOverrides
        };
        const wrapper = () => shallow(<ProductContent {...props} />);
        return {
            props,
            wrapper,
            productThumbnail: () => wrapper().find("[data-id='productThumbnail']"),
            productDescription: () => wrapper().find("[data-id='productDescription']")
        };
    };

    describe("render:", () => {
        it("should render the product thumbnail", () => {
            const { productThumbnail, props: { thumbnail } } = setup();
            expect(productThumbnail().prop("src")).to.equal(thumbnail);
        });

        it("should render the toggle product content button with an icon pointing upwards when product content is not visible ", () => {
            const { productDescription, props: { description } } = setup();
            expect(productDescription().text()).to.equal(description);
        });
    });
});