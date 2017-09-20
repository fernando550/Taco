import React, {Component} from 'react';
import axios from 'axios';
import {fabric} from 'fabric';
import ImagesPanel from './components/imagesPanel'
import DesignPanel from './components/designPanel'
import Header from './layouts/header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasObj: null,
      msg: ''
    };
  }

  componentDidMount() {
    // this.setState({canvasObj: new fabric.Canvas('design-canvas', {preserveObjectStacking: true})})
    axios.get('/api').then(({data}) => {
      this.setState({
        canvasObj: new fabric.Canvas('design-canvas', {preserveObjectStacking: true}),
        msg: data.msg
      });
      console.log('<App> component mounted: canvas loaded');
    })
  }

  render() {
    return (
      <div>
        <Header msg={this.state.msg}/>
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
