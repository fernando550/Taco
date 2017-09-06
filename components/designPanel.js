import React from 'react';
import { render } from 'react-dom';

class DesignPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="tile box" id="design-panel">
                <div className="box" id="design-container">
                </div>
            </div>
        );
    }
}

export default DesignPanel;