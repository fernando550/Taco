import React from 'react';
import { render } from 'react-dom';

class FileUpload extends React.Component {
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
			<div className="tile is-child">
				<form onSubmit={(e)=>this.handleSubmit(e)}>
				    <label className="button is-dark" htmlFor="files" id="label" style={{width: '120px'}}>
				    	<span><i className="fa fa-upload" style={{marginRight: '10px', marginTop: '3px'}}></i></span>
				    	<span>Select Image</span>
				    </label>
				    <input id="files" style={{display:'none'}} type="file" onChange={(e)=>this.handleImageChange(e)}/>
					<br/>
					<br/>
					<button style={{width: '120px'}} className="button is-dark" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
				</form>
			    <br/>
				<div className="imgPreview">{$imagePreview}</div>
			</div>
		);
	}
}

export default FileUpload;

