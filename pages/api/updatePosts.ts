import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type postProps = {
  editTitle: string;
  editContent: string;
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === "GET") {
  try {
    //get prosma to fetch the posts
    const projectId = parseInt(req.body.editId);
    const post: postProps = JSON.parse(req.body);
    if (req.method === "PUT") {
      try {
        const result = await prisma.post.update({
          where: { id: post.id },
          data: {
            title: post.editTitle,
            content: post.editContent,
          },
        });
        res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ message: "error" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
  // }
}
