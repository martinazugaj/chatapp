import React from "react";
import MessageItem from "../MessageItem/MessageItem";

class Messages extends React.Component {
  state = { message: [], newItem: "" };

  setNewItem = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addNewItem = () => {
    if (this.state.newItem === "") return;
    let { message } = this.state;
    message.push(this.state.newItem);
    this.setState({
      message: message,
      newItem: "",
    });
  };

  render() {
    const { message } = this.state;

    return (
      <>
        {message.length === 0 ? (
          <p>No messages.</p>
        ) : (
          message.map((c) => <MessageItem message={c} />)
        )}
      </>
    );
  }
}

export default Messages;
