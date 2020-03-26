import React from "react";

function RTreesInstance({backgroundColor}) {
    return (
        <iframe
          title="Interspace rTrees"
          src="https://rtrees.dappy.dev/"
          style={{height: '100%', width: '100%', border: '0px', backgroundColor: `${backgroundColor}`}}
        />
    )
}

export default RTreesInstance;