const Navbar = require("./Navbar")
// @ponicode
describe("Navbar.default", () => {
    test("0", () => {
        let result = Navbar.default()
        expect(result).toMatchSnapshot()
    })
})
