import React from "react";
import "./Style/Post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolar site amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}

export default Post;
