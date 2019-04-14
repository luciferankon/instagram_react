import React from "react";

class Posts extends React.Component {
  render() {
    return (
      <div className='posts'>
        {this.props.posts.map((post, id) => (
          <div className='post' key={id + "post"}>
            {post}
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;
