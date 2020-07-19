import React from 'react';
import PostBox from '../PostBox';

const PostBoxList = ({ posts }) =>{

  return (
    <div>
    {
      posts && posts.map( post => {
        return (<PostBox
                  key = { post.id }
                  title = { post.title }
                  description = { post.description }
                  createOn = { post.createOn }
                  slug = { post.slug }
                />)
      })
    }
    </div>
  )
}

export default PostBoxList;