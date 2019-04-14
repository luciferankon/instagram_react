import React from "react";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className='info'>
        <div>{this.props.post}</div>
        <div>{this.props.follower}</div>
        <div>{this.props.followee}</div>
      </div>
    );
  }
}
export default ProfileInfo;