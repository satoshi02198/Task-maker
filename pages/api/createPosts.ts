// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type postProps = {
  title: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === "GET") {
  try {
    //get prosma to fetch the posts
    const post: postProps = JSON.parse(req.body);
    if (req.method === "POST") {
      // if (!post.title.length) {
      //   return res.status(500).json({ message: "dont leave blank" });
      // }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: "error" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
  // }
}
