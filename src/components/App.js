import React, { Component } from 'react';
import './css/App.css';

import SQ from './SQ';
import SQM from './SQMatch';


class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="Box1">
                    <SQ />
                </div>
                <div className="Box2">
                    <SQM />
                </div>
            </div>
        )
    }
}

export default App;