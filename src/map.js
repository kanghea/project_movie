import React, {useState} from "react";
import MapAPI from "./mapcomponents/mapAPI";
import MapHeader from "./mapcomponents/MapHeader";

function Map(){
    return(
        <div>
            <MapHeader/>
            <MapAPI/>
        </div>
    )
}
export default Map;
