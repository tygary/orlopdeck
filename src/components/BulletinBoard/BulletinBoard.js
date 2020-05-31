import React from "react";
import './BulletinBoard.css';
import { withRouter } from "react-router-dom";

const BulletinBoard = ({ history }) => {
  return (
    <div className="bulletinBoard clickable" onClick={() => history.push('/posts')}>
      <div className="bulletinBoardInner">
        <div className="bulletinBoardTitle">Posts</div>
        <div className="bulletinBoardPost bulletinBoardPost1"></div>
        <div className="bulletinBoardPost bulletinBoardPost2"></div>
        <div className="bulletinBoardPost bulletinBoardPost3"></div>
      </div>
    </div>
  )
};

export default withRouter(BulletinBoard);