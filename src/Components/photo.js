import React, { Component } from "react";
import photoWall from "./photowall";
import propTypes from 'prop-types'


function Photo(props) {
    const post = props.post;
    return (
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}Remover</p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button" onClick = {() => {
            props.onRemovePhoto(post)
          }}>Delete</button>
        </div>
      </figure>
    );
}

Photo.protoTypes = {
  post: propTypes.object.isRequired,
  onRemovePhoto: propTypes.func.isRequired
}

export default Photo;
