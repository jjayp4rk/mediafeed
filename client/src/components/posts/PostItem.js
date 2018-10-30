import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Post from "../post/Post";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick = (e, id) => {
    e.preventDefault();
    this.props.deletePost(id);
  };

  onLikeClick = (e, id) => {
    e.preventDefault();
    this.props.addLike(id);
  };

  onUnlikeClick = (e, id) => {
    e.preventDefault();
    this.props.removeLike(id);
  };

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="post-item">
        <div className="card card-body mb-2">
          <div className="post-content">
            <div className="head">
              <div className="card-text">
                {/* <a href="profile.html">
                <img
                  className="rounded-circle d-none d-md-block"
                  src={avatar}
                  alt=""
                />
              </a> */}
                {post.name}
              </div>
            </div>
            <div className="body">
              <div className="card-text">
                <p className="lead">{post.text}</p>
                {showActions ? (
                  <span>
                    <button
                      onClick={e => this.onLikeClick(e, post._id)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i
                        className={classnames("fas fa-thumbs-up fa-xs", {
                          "text-info": this.findUserLike(post.likes)
                        })}
                      />
                      <span className="badge">{post.likes.length}</span>
                    </button>
                    <button
                      onClick={e => this.onUnlikeClick(e, post._id)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i className="text-secondary fas fa-thumbs-down" />
                    </button>

                    <Link
                      to={`/post/${post._id}`}
                      className="btn btn-info mr-1"
                    >
                      Comments
                    </Link>
                    {post.user === auth.user.id ? (
                      <button
                        onClick={this.onDeleteClick.bind(this, post._id)}
                        type="button"
                        className="btn btn-danger mr-1"
                      >
                        <i className="fas fa-times" />
                      </button>
                    ) : null}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
