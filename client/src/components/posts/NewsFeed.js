import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

class NewsFeed extends Component {
  render() {
    const { news } = this.props;
    return news.map((article, i) => <NewsItem key={i} article={article} />);
  }
}

NewsFeed.propTypes = {
  news: PropTypes.array.isRequired
};

export default NewsFeed;
