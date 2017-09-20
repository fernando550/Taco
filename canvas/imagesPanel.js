import React from 'react';
import { render } from 'react-dom';
import FileUpload from './fileupload';

class ImagesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }
    
    componentDidMount() {
      console.log('<ImagesPanel> component mounted');
    }
  
    appendImage(myURL) {
        var myCanvas = this.props.canvasObj;
        
        var myImage = new fabric.Image.fromURL(myURL, (img) => {
            myCanvas.add(img);
            console.log('Image added:', myCanvas);
        });
        
        myCanvas.renderAll();
    }

    render() {
        const myImages = [
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231",
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231",
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231"
        ];
        
        let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl}/>);
		} else {
			$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		
        return (
            <div id='design-image-panel' className="tile is-parent is-vertical is-2 boxed">
                <FileUpload canvasObj={this.props.canvasObj}/>
                {myImages.map((url,i) => {
                    return (
                        <div id='design-item' className="tile is-child box image-item" key={i}>
                            <img onClick={()=>this.appendImage(url)} key={i} src={url} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ImagesPanel;




