import React, {Component} from 'react';
import Photo from './photo';
import propTypes from 'prop-types';

function PhotoWall(props) {
    return <div>
    {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
    </div>
}

PhotoWall.propTypes = {
    posts: propTypes.array.isRequired,
    onRemovePhoto: propTypes.func.isRequired
}



export default PhotoWall