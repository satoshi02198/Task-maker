import PostForm from "../components/PostForm";
import ShowTasks from "./ShowTasks";

export default function Home() {
  return (
    <>
      <PostForm />
      {/* @ts-expect-error Server Component */}
      <ShowTasks />
    </>
  );
}
