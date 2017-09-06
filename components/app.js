import React from 'react';
import DesignPanel from './designPanel';
import ImagesPanel from './imagesPanel';
import Header from './header';

class App extends React.Component {
    constructor(props) {
        super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <section className="">
            <div className="tile is-ancestor" id="main-panel">
                <ImagesPanel/>
                <DesignPanel/>
            </div>
        </section>
      </div>
    );
  }
}

export default App;

