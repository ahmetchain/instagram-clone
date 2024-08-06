import React from "react";
import SuggestionsList from "./components/SuggestionsList";
import PostList from "./components/PostList";
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className=" mx-auto">
          <PostList />
        </div>
        <div className=" h-screen">
          <SuggestionsList />
        </div>
      </div>
    </>
  );
}
