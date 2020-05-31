import React from "react";
import './BulletinBoard.css';

export default () => {
  return (
    <div class="bulletinBoard clickable">
      <div class="bulletinBoardInner">
        <div class="bulletinBoardTitle">Posts</div>
        <div class="bulletinBoardPost bulletinBoardPost1"></div>
        <div class="bulletinBoardPost bulletinBoardPost2"></div>
        <div class="bulletinBoardPost bulletinBoardPost3"></div>
      </div>
    </div>
  )
};