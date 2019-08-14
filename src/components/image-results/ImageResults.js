import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton"
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialong from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'


 class ImageResults extends Component {
  

    render() {
        //you will get a error if you use const intead of let
        let imageListContent;
        const {images} = this.props;


        //map through images in order to display the array 
        if (images) {
            imageListContent = (
                <GridList cols={3}>
                {images.map(img =>(
                    <GridTile
                    title={img.tags}
                    key={img.id}
                    subtitle={
                    <span>
                        by <strong>{img.user}
                        </strong>
                    </span>
                    }
                    actionIcon={
                        <IconButton>

                            <ZoomIn color="white"/>
                        </IconButton>

                    }>

<img src={img.largeImageURL} />


                    </GridTile>
                ))}
                
                </GridList>
            )

        }else {
            imageListContent =  null;
        }


        return (
            <div>
                {imageListContent}
            </div>
        )
    }
}
  ImageResults.propTypes = {
        images: PropTypes.array.isRequired
    }
    
    
    export default ImageResults