import PostForm from "../components/PostForm";
import Tasks from "../components/Tasks";

export default async function Home() {
  async function getPosts() {
    const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);

    return res.json();
  }

  const data: {
    id: number;
    title: string;
    content: string;
    timestamp: string;
  }[] = await getPosts();

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
