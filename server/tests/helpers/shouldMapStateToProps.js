import { expect } from "chai";

const shouldMapStateToProps = (expectedProps) => (mapStateToProps, baseState, ownProps = {}) => {
    const props = mapStateToProps(baseState, ownProps);

    it("should map state to props", () => {
        expect(props).to.deep.equal(expectedProps);
    });
};

export default shouldMapStateToProps;