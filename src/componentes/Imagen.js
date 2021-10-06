import { queryAllByDisplayValue } from '@testing-library/dom';
import React, {Component} from 'react';

const Imagen = (props) =>{
const{largeImageURL, likes, previewURL, tags, views, comments} = props.imagen;

return(
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card">
            <img src={largeImageURL} alt={tags} className="card-img-top"/>
            <div className="card-body">
                <p className="card-text">{likes} likes</p>
                <p className="card-text">{views} vistas</p>
                <p className="card-text">{comments} Comentarios </p>


              <a href={largeImageURL}  target="_blank" className="btn btn-primary btn-block btn-danger ">ver imagen</a>
            </div>
            
        </div>
    </div>
    
)
}

export default Imagen;