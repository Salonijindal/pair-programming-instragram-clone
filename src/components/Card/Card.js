import React from "react";
import "./Card.scss";
import Profile from "../Profile/Profile";
import { ReactComponent as CardButton } from "../../assets/images/cardButton.svg";
import CardMenu from "../CardMenu/CardMenu";
import Comment from "../Comment/Comment.js";

function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
}

export default Card;
