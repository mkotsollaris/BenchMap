import React, { Component } from 'react';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

export class OpenLayerMap extends Component {
    render() {
        return (
    <Map view={{center: [0, 0], zoom: 2}}>
    <Layers>
        <layer.Tile/>
      </Layers>
    </Map>
    );  
    }
}