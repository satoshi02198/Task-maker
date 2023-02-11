import PostForm from "../components/PostForm";
import Tasks from "../components/Tasks";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const { posts } = await getPosts();
  console.log(posts);

  return (
    <div>
      <PostForm />
      <div className="sm:flex  sm:justify-center sm:items-baseline sm:flex-wrap max-w-7xl mx-auto mt-7">
        {posts
          .reverse()
          .map(
            (post: {
              id: number;
              title: string;
              content: string;
              timestamp: string;
            }) => (
              <Tasks
                title={post.title}
                content={post.content}
                id={post.id}
                timestamp={post.timestamp}
                key={post.id}
              />
            )
          )}{" "}
      </div>
    </div>
  );
}
