import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsURL, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              
              fontSize:"18px"
            }}
          >
            <span
              className=" badge  bg-danger"
            >
              {source}
            </span>
      </div>

            <img className="card-img-top" src={imgUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>

              <a href={newsURL} target="blank" className="btn-sm btn btn-dark">
                read More
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default NewsItem;
