import React from "react";
import Tasks from "@/components/Tasks";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res.json());
  }
  return res.json();
}

export default async function ShowTasks() {
  const data = await getPosts();

  const tasks = () =>
    data
      .reverse()
      .map(
        (post: {
          title: string;
          content: string;
          id: number;
          timestamp: string;
        }) => (
          <Tasks
            title={post.title}
            content={post.content}
            id={post.id}
            timestamp={post.timestamp}
          />
        )
      );

  return (
    <>
      {" "}
      <div className="sm:flex  sm:justify-center sm:items-baseline sm:flex-wrap max-w-7xl mx-auto mt-7">
        {tasks()}
      </div>
    </>
  );
}
