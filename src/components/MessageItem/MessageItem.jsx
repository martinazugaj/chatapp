import React from "react";

class MessageItem extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

export default MessageItem;
