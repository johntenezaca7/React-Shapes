import React, { Component } from 'react';
import Draggable from 'react-draggable';

class SQ extends Component {

    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };

    render(){
        return(
            <div className="container">
                <Draggable>
                 <svg width="400" height="180">
                     <rect x="50" y="27" rx="0" ry="20" width="150" height="150"
                     style={{'fill':'red','strokeWidth':'2','opacity':'0.5'}} />
                     Sorry, your browser does not support inline SVG.
                </svg>
                </Draggable>
            </div>
        )
    }
}

export default SQ;