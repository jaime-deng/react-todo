import ReactDOM from "react-dom"
import React from "react"
import {isTSAnyKeyword} from "@babel/types"
import Todo from "./Todo";

it("Todo component renders properly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo />, div)
})