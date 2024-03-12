import React from "react";

function Spinner(){
    return (
        <div className="flex flex-col items-center space-y-0">
            <div className="spinner"></div>
            <p className="text-lg text-blue-950 font-semibold">Loading....</p>
        </div>
    )
}

export default Spinner;