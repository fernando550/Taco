import React from 'react';
import { render } from 'react-dom';
import Resizable from 'react-resizable-box';

class Image extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        <Resizable
        className="item"
        width={320}
        height={200}
        >
        Basic Sample
        </Resizable>
    }
}

export default Image;