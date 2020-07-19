import React from 'react';
import { Link } from 'gatsby';

const PostBox = ({ title, description, createdOn, image, slug}) => {
  return (
    <div>
      <Link to={ slug }>
        <p>{ createdOn } </p>
        <p>{ title} </p>
        <p>{ description } </p>
      </Link>
      <hr />
    </div>
  )
}

export default PostBox;