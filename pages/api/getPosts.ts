import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "@/lib/prisma/posts";

const handler = async (
  req: NextApiRequest,

  res: NextApiResponse
) => {
  try {
    const { posts } = await getPosts();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default handler;
