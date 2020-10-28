import React from "react"
import ReactDOM from "react-dom"
import {isTSAnyKeyword} from "@babel/types"
import Form from "./Form";

it("renders form component properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div)
})