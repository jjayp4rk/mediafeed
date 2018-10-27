import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import NewsFeed from "./NewsFeed";
import { getPosts, getNews } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getNews();
  }

  render() {
    const { news, posts, loading } = this.props.post;
    let postContent;
    let newsContent;
    if (news === null || posts === null || loading) {
      postContent = <Spinner />;
      newsContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
      newsContent = <NewsFeed news={news} />;
    }

    return (
      <div className="post-feed">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <PostForm />
              {postContent}
            </div>
            <div className="col-md-9">
              <div className="news-content">{newsContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getNews: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts, getNews }
)(Posts);
