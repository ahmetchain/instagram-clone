import Icon from "component/Icon";
import React from "react";
import More from "Icon/more.svg";
import Like from "Icon/Notifications.svg";
import Comment from "Icon/comment.svg";
import Share from "Icon/share.svg";
import Save from "Icon/record.svg";
export default function Post({ id, post }) {
  return (
    <div key={id} className="flex flex-col w-[470px] border-b border-gray-300">
      <header className=" h-[50px] flex ">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-x-3">
            <img
              className="w-10 h-10 rounded-full"
              src={post.profileImage}
              alt="profile"
            />
            <h2 className="font-semibold">{post.username}</h2>
            <p>{post.postTime}</p>
          </div>
          <div>
            <Icon name={More} size={25} />
          </div>
        </div>
      </header>
      <div className=" max-w-[600px] border ">
        <img className="w-full rounded-md" src={post.postImage} alt="post" />
      </div>
      <div className="mt-2">
        <div className="flex justify-between mb-2 ">
          <div className="flex gap-x-3 items-center ">
            <Icon name={Like} size={25} />
            <Icon name={Comment} size={25} />
            <Icon name={Share} size={25} />
          </div>
          <Icon name={Save} size={25} />
        </div>
        <h2 className="font-semibold">{post.like} beğenme</h2>
        <p className="font-semibold mb-3">
          {post.username} <span className="font-normal">{post.description}</span>
        </p>
        <p className="mb-3 text-gray-500">{post.comment} yorumun tümünü gör</p>
      </div>
    </div>
  );
}
