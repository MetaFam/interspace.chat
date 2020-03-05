import React from "react";

function RTreesInstance({width, height, backgroundColor}) {
    return (
        <iframe title="Interspace rTrees" src="https://rtrees.dappy.dev/" style={{height: `${height}px`, width: `${width}px`, border: '0px', backgroundColor: `${backgroundColor}`}}></iframe>
    )
}

export default RTreesInstance;