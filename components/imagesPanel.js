import React from 'react';
import { render } from 'react-dom';
import FileUpload from './fileupload';

class ImagesPanel extends React.Component {
    constructor(props) {
        super();
    }
    
    appendImage(url) {
        console.log(url)
        
        var newImage = $(`<div class='drag loaded-image'>
                            <span onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'>
                                <i class="fa fa-window-close fa-lg" aria-hidden="true"></i>
                            </span>
                            <img src=${url}/>
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