import React from 'react';
import ImagesPanel from './imagesPanel'
import DesignPanel from './designPanel'
import Header from './header'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          canvasObj: null
        };
  }
  
  componentDidMount() {
      this.setState({canvasObj: new fabric.Canvas('design-canvas', {preserveObjectStacking: true})})
      console.log('<App> component mounted: canvas loaded');
  }
  
  render() {
    return (
      <div>
        <Header/>
        <section className="">
            <div className="tile is-ancestor" id="main-panel">
                <ImagesPanel canvasObj={this.state.canvasObj}/>
                <DesignPanel canvasObj={this.state.canvasObj}/>
            </div>
        </section>
      </div>
    );
  }
}

export default App;