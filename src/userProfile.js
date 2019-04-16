import React from "react";
import "./userProfile.css";
import ProfileInfo from "./profileInfo";
import ProfileName from "./profileName";
import Posts from "./posts";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      post: 0,
      follower: 0,
      followee: 0,
      posts: []
    };
  }

  componentDidMount() {
    fetch("/profile/name", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: this.props.name
    })
    .then(res => res.json())
    .then(name => this.setState(name));
    
    fetch("/profile/follower",{
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: this.props.name
    })
    .then(res => res.json())
    .then(follower => this.setState(follower));
    
    fetch("/profile/followee",{
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: this.props.name
    })
    .then(res => res.json())
    .then(followee => this.setState(followee));
    
    fetch("/profile/post",{
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: this.props.name
    })
    .then(res => res.json())
    .then(postCount => this.setState(postCount));
    
    fetch("/profile/posts",{
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: this.props.name
    })
      .then(res => res.json())
      .then(posts => this.setState(posts));
  }

  render() {
    return (
      <div className='profile'>
        <ProfileName name={this.state.userName} />
        <ProfileInfo
          post={this.state.post}
          follower={this.state.follower}
          followee={this.state.followee}
        />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default UserProfile;
