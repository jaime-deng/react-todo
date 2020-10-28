import React from "react";

let buttonStyle = {
    margin: '10px 10px 10px 0',
    backgroundColor: "#D14233",
    color: "white",
    borderStyle: "none"
}

let containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

}


function ClearButton(props) {
    return (
        <div style={containerStyle}>
            <button
                type="button"
                className="btn btn-default"
                style={buttonStyle}
                onClick={props.clearTasks}
                >
                <span>{props.name}</span>

            </button>
        </div>
    );
}

export default ClearButton;