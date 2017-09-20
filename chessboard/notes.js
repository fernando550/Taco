<script>
                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
            
                        reader.onload = function (e) {
                            var newImage = $(`<div class='drag loaded-image' style='display:inline-block'>
                                                <span style='float:right; margin: -3px 0 0 0' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'>
                                                    <i class="fa fa-window-close fa-lg" aria-hidden="true"></i>
                                                </span>
                                                <img src=e.target.result style='width: 100%; height: 100%'/>
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
                        
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                
                $("#files").on('change', function(){
                    readURL(this);
                });
        </script>