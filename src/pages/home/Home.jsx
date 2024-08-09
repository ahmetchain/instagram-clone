import React from "react";
import SuggestionsList from "./components/SuggestionsList";
import PostList from "./components/PostList";
export default function Home() {
  return (
    <>
      <div className="flex">
        <div className=" mx-auto">
          <PostList />
        </div>
        <SuggestionsList />
      </div>
    </>
  );
}
