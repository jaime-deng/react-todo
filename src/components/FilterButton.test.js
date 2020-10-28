import renderer from "react-test-renderer"
import FilterButton from "./FilterButton"
import React from "react"
import ReactDOM from "react-dom"

test("App snapshot test", () => {
    const component = renderer.create(<FilterButton />)
    const comp = component.toJSON();
    expect(comp).toMatchSnapshot()
})

it("renders FilterButton component properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FilterButton />, div)
})