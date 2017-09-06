import React from 'react';
import { render } from 'react-dom';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state);
    
    var newImage = $(`<div class='drag loaded-image' style='display:inline-block'>
                            <span style='float:right; margin: -3px 0 0 0' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'>
                                <i class="fa fa-window-close fa-lg" aria-hidden="true"></i>
                            </span>
                            <img src=${this.state.imagePreviewUrl} style='width: 100%; height: 100%'/>
                          </div>`)
        
        newImage.appendTo("#design-container")
        
            $(".drag").draggable({
                                containment: "#design-container",
                                cursor: "auto",
                                revert: false
                            });
            $(".drag").resizable({
                containment: "parent",
                maxHeight: $("#design-container").height(),
                maxWidth: $("#design-container").width()
            });
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
      $imagePreview = (<img src={imagePreviewUrl} style={{width: '100%', height: '100%'}}/>)
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default FileUpload;