import React from "react";

function LoftRadioInstance({width, height, backgroundColor}) {
    return (
        <iframe title="Interspace loft.radio" src="https://loft.radio/" style={{height: `${height}px`, width: `${width}px`, border: '0px', backgroundColor: `${backgroundColor}`}}></iframe>
    )
}

export default LoftRadioInstance;