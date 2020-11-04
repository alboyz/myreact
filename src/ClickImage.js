import React, { Component } from "react";
import "./assets/css/style.css";
class ClickImage extends Component {
  constructor() {
    super();
    this.state = { title: "Click Image", isShowing: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShowing: !this.state.isShowing });
  }

  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={() =>
                {this.handleClick()}
              }
            >
              Toggle Image
            </button>
          </div>
          {this.state.isShowing ? (
            <img
              src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80"
              alt="gambar "
            />
          ) : null}
        </div>
      </section>
    );
  }
}
export default ClickImage;
