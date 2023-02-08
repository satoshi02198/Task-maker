import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type postProps = {
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    if (req.method === "DELETE") {
      try {
        const result = await prisma.post.delete({
          where: { id: post.id },
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
