import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { article } = this.props;
    const { url, urlToImage, title, description, content } = article;

    return (
      <div className="news-item">
        <div className="card">
          <a href={url} target="_blank">
            <img
              className="card-img-top"
              src={urlToImage}
              alt="Card image cap"
            />
          </a>
          <div className="card-body">
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-text">
              <p>{description ? description : content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
