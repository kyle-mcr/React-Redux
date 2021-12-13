import React, {Component} from 'react';
import Photo from './photo';

function PhotoWall(props) {
    return <div>
    {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
    </div>
}



export default PhotoWall