import "./App.scss";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="c-app">
      <div>
        <div className="chatbox"></div>
        <input
          placeholder="Napiši poruku"
          type="text"
          value={this.state.newItem}
          onChange={(e) => this.setNewItem(e)}
        ></input>
        <button onClick={this.addNewItem}>Pošalji</button>
      </div>
      <span>
        <Messages />
      </span>
    </div>
  );
}

export default App;
