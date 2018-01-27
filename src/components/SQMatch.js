import React, { Component } from 'react';

class SQMatch extends Component {
    render(){
        return(
            <svg width="400" height="180">
                <rect x="50" y="20" rx="0" ry="20" width="150" height="150"
                style={{'fill':'white','stroke':'red','strokeWidth':'2','opacity':'0.5'}} />
           </svg>
        )
    }
}

export default SQMatch;