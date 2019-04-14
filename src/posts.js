import React from "react";

class Posts extends React.Component {
  render() {
    return (
      <div className='posts'>
        {this.props.posts.map(post => <div className="post">{post}</div>)}
      </div>
    );
  }
}
export default Posts;