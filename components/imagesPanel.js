import React from 'react';
import { render } from 'react-dom';
import FileUpload from './fileupload';

class ImagesPanel extends React.Component {
    constructor(props) {
        super();
    }
    
    appendImage(a) {
        console.log(a)
        
        var newImage = $(`<div class='drag loaded-image' style='display:inline-block'>
                            <span style='float:right; margin: -3px 0 0 0' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'>
                                <i class="fa fa-window-close fa-lg" aria-hidden="true"></i>
                            </span>
                            <img src=${a} style='width: 100%; height: 100%'/>
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
    
    render() {
        
        const myImages = [
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231",
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231",
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231"
        ];
        
        return (
            <div className="tile is-parent is-vertical is-2 boxed" style={{display:'inline-block', width: '15%'}}>
                <div className="tile is-child">
                    <FileUpload />
                    
                </div>
                {myImages.map((url,i) => {
                    return (
                        <div key={i} className="tile is-child box image-item">
                                <img onClick={() => this.appendImage(url)} key={i} src={url} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ImagesPanel;

// <form id="form1">
//    <label className="button is-dark" htmlFor="files" id="label">Select Image</label>
//    <input id="files" style={{display:'none'}} type="file"/>
// </form>