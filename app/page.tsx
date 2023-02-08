import Link from "next/link";
import PostForm from "./PostForm";
import Tasks from "./Tasks";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
  }
  return res.json();
}

export default async function Home() {
  const data: {
    id: number;
    title: string;
    content: string;
    timestamp: Date;
  }[] = await getPosts();
  console.log(data);

  return (
    <div>
      <PostForm />
      <div className="sm:flex  sm:justify-center sm:items-baseline sm:flex-wrap max-w-7xl mx-auto mt-7">
        {data.reverse().map((post) => (
          <Tasks
            title={post.title}
            content={post.content}
            id={post.id}
            timestamp={post.timestamp}
          />
        ))}{" "}
      </div>
    </div>
  );
}
