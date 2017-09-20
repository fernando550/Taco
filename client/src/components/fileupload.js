import React, {Component} from 'react';
import {fabric} from 'fabric';

class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: ''
		};
	}
	
	componentDidMount() {
	  console.log('<FileUpload> component mounted');
	}
  
	handleSubmit(e) {
		e.preventDefault();
		console.log('handle uploading-', this.state);
		
		var myCanvas = this.props.canvasObj;
		var myURL = this.state.imagePreviewUrl;
		var myImage = new fabric.Image.fromURL(myURL, (img) => {
		    myCanvas.add(img);
		});
		    
		myCanvas.renderAll();
	}

	handleImageChange(e) {
		e.preventDefault();
		
		let reader = new FileReader();
		let file = e.target.files[0];
		
		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		};
		
		reader.readAsDataURL(file);
	}

	render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl}/>);
		} else {
			$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		
		return (
			<div>
				<form onSubmit={(e)=>this.handleSubmit(e)}>
				    <label className="button is-dark" htmlFor="files" id="label">Select Image</label>
				    <input id="files" style={{display:'none'}} type="file" onChange={(e)=>this.handleImageChange(e)}/>
					<br/>
					<br/>
					<button className="button is-dark" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
				</form>
			    <br/>
				<div className="imgPreview">{$imagePreview}</div>
			</div>
		);
	}
}

export default FileUpload;

