import React from 'react';

class DesignPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
      console.log('<DesignPanel> component mounted');
    }
      
    commitAction(action) {
        var myCanvas = this.props.canvasObj
        var activeGroup = myCanvas.getActiveGroup();
        var activeItem = myCanvas.getActiveObject();
        
        switch(action) {
            case 'delete':
                if (activeGroup) {
                    var activeObjects = activeGroup.getObjects();
                    for (let i in activeObjects) {
                        myCanvas.remove(activeObjects[i]);
                    }
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group deleted');
                } else {
                    activeItem.remove();
                    console.log('Active item deleted');
                }
                break;
                
            case 'sendBackwards':
                if (activeGroup) {
                    activeGroup.sendBackwards();
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group sent backwards');
                } else {
                    activeItem.sendBackwards();
                    myCanvas.renderAll();
                    console.log('Active item sent backwards');
                }
                break;
                
            case 'sendToBack':
                if (activeGroup) {
                    activeGroup.sendToBack();
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group sent to back');
                } else {
                    activeItem.sendToBack();
                    myCanvas.renderAll();
                    console.log('Active item sent to back');
                }
                break;
                
            case 'bringForward':
                if (activeGroup) {
                    activeGroup.bringForward();
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group brought forward');
                } else {
                    activeItem.bringForward();
                    myCanvas.renderAll();
                    console.log('Active item brought forward');
                }
                break;
                
            case 'bringToFront':
                if (activeGroup) {
                    activeGroup.bringToFront();
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group brought to front');
                } else {
                    activeItem.bringToFront();
                    myCanvas.renderAll();
                    console.log('Active item brought to front');
                }
                break;
                
            case 'flipHorizontally':
                if (activeGroup) {
                    var flipX = activeGroup.getFlipX()
                    activeGroup.set('flipX', !flipX);
                    
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group flipped horizontally');
                } else {
                    var flipX = activeItem.getFlipX()
                    activeItem.set('flipX', !flipX);
                    
                    myCanvas.renderAll();
                    console.log('Active item flipped horizontally');
                }
                break;
                
            case 'flipVertically':
                if (activeGroup) {
                    var flipY = activeGroup.getFlipY()
                    activeGroup.set('flipY', !flipY);
                    
                    myCanvas.discardActiveGroup();
                    myCanvas.renderAll();
                    console.log('Active group flipped vertically');
                } else {
                    var flipY = activeItem.getFlipY()
                    activeItem.set('flipY', !flipY);
                    
                    myCanvas.renderAll();
                    console.log('Active item flipped vertically');
                }
                break;    
        }
    }
    
    render() {
        return (
            <div className="tile is-parent is-vertical box" id="design-panel">
                <div id='design-toolbar' className='tile is-child is-12'>
                    <div className="btn-toolbar" role="group" style={{display: 'inline-block'}}>
                        <div className="btn-group mr-2" role="group" aria-label="First group" style={{display: 'inline-block'}}>
                            <button title="delete selection" type="button" className="button is-dark" onClick={() => this.commitAction('delete')}><i className='fa fa-trash'></i></button>
                            <button title="bring forward" type="button" className="button is-dark" onClick={() => this.commitAction('bringForward')}><i className='fa fa-angle-up'></i></button>
                            <button title="send backwards" type="button" className="button is-dark" onClick={() => this.commitAction('sendBackwards')}><i className='fa fa-angle-down'></i></button>
                            <button title="pull to front" type="button" className="button is-dark" onClick={() => this.commitAction('bringToFront')}><i className='fa fa-angle-double-up'></i></button>
                            <button title="push to back" type="button" className="button is-dark" onClick={() => this.commitAction('sendToBack')}><i className='fa fa-angle-double-down'></i></button>
                        </div>
                        <div className="btn-group mr-2" role="group" aria-label="Second group" style={{display: 'inline-block'}}>
                            <button title="flip horizontally" type="button" className="button is-dark" onClick={() => this.commitAction('flipHorizontally')}><i className='fa fa-arrows-h'></i></button>
                            <button title="flip vertically" type="button" className="button is-dark" onClick={() => this.commitAction('flipVertically')}><i className='fa fa-arrows-v'></i></button>
                            <button type="button" className="button is-dark">Color</button>
                            <button type="button" className="button is-dark">Filter</button>
                        </div>
                    </div>
                </div>
                <div className='time is-child'>
                    <div className="box" id="design-container">
                        <div id='design-canvas-div'>
                            <canvas id='design-canvas' width='350' height='475'>
                                fallback content: currently the canvas is not available 
                            </canvas>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default DesignPanel;