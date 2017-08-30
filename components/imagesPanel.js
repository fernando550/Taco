import React from 'react';
import { render } from 'react-dom';

class ImagesPanel extends React.Component {
    constructor(props) {
        super(props);
        // this.appendImage = this.appendImage.bind(this);
    }
    
    appendImage(a) {
        console.log(a)
        var newImage = $(`<div id='anImage' style='display:inline-block'><img src=${a} id="loaded-image"/></div>`)
            
        newImage.appendTo("#design-container")
        // $( "#anImage" ).draggable();
        // $( "#loaded-image" ).resizable();
        
        $("#anImage").draggable({
                        containment: "#design-container",
                        cursor: "auto",
                        revert: false
                    })
                    
        $( "#loaded-image" ).resizable({
                                containment: "#design-container"
                            });
    }
    
    render() {
        
        const myImages = [
            "http://orig06.deviantart.net/551f/f/2016/020/2/8/shovel_knight_super_smash_bros_universe_by_game34rules-d9oplbd.png",
            "https://vignette3.wikia.nocookie.net/mcleodgaming/images/4/43/Game_%26_Watch_symbol.svg/revision/latest?cb=20150202072231",
            "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Legend_of_Zelda_icon.png"
        ];
        
        return (
            <div className="tile is-parent is-vertical is-2 boxed">
                <div className="tile is-child">
                    <form id="form1">
                        <label className="button is-dark" htmlFor="files" id="label">Select Image</label>
                        <input id="files" style={{display:'none'}} type="file"/>
                    </form>
                </div>
                {myImages.map((url,i) => {
                    return (
                        <div key={i} className="tile is-child box" id="image-item">
                            <figure key={i} className="image">
                                <img onClick={() => this.appendImage(url)} key={i} src={url} />
                            </figure>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ImagesPanel;
