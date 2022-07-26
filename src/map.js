import React, {useState} from "react";
import MapAPI from "./mapcomponents/mapAPI";
import MapHeader from "./mapcomponents/MapHeader";
import Mapmain from "./mapcomponents/mapmain";
function Map(){
    return(
        <div>
            <MapHeader/>
            <MapAPI/>
        </div>
    )
}
export default Map;
