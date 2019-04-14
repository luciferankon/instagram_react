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
    fetch("/profile/name")
      .then(res => res.json())
      .then(name => this.setState(name));

    fetch('/profile/follower')
    .then(res => res.json())
    .then(follower => this.setState(follower));
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
