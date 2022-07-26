import React, {useState} from "react";
import MapAPI from "./mapcomponents/mapAPI";
import Mapmain from "./mapcomponents/mapmain";
function Map(){
    return(
        <div>
            <Mapmain/>
            <MapAPI/>
        </div>
    )
}
export default Map;
