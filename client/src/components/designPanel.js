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
                <div className='tile is-child is-12'>
                    <div className="btn-group" role="group" aria-label="Basic example" style={{display: 'block'}}>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('delete')}>delete</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('bringForward')}>forward</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('bringToFront')}>to front</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('sendBackwards')}>backward</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('sendToBack')}>to back</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('flipHorizontally')}>flipX</button>
                      <button type="button" className="btn btn-secondary" onClick={() => this.commitAction('flipVertically')}>flipY</button>
                      <button type="button" className="btn btn-secondary">Color</button>
                      <button type="button" className="btn btn-secondary">Filter</button>
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