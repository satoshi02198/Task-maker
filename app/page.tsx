import PostForm from "./PostForm";
import Tasks from "./Tasks";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/getPosts");
  if (!res.ok) {
  }
  return res.json();
}

export default async function Home() {
  const data: {
    id: number;
    title: string;
    content: string;
    timestamp: string;
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
