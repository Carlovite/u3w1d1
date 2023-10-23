import { Component } from "react";
class ImageCompo extends Component {
  render() {
    return (
      <img
        alt="immagine-react"
        src={this.props.src}
        style={{ width: 100 + "px", height: 100 + "px" }}
        className="App-logo"
      ></img>
    );
  }
}
export default ImageCompo;
