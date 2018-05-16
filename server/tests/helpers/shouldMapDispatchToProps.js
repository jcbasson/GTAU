import { expect } from "chai";

export const shouldMapDispatchToProps = (actions) => (mapDispatchToProps, props) => {
    const calledDispatch = mapDispatchToProps(undefined, props);
    const dispatchKeys = Object.keys(calledDispatch.actions);

    it("should map dispatch to props", () => {
        expect(dispatchKeys).to.deep.equal(actions);
    });
};

export default shouldMapDispatchToProps;