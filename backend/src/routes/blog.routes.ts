import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { prisma } from "../config/database";

const router = Router();

router.get("/blog", async (_req, res) => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  res.json(posts);
});

router.get("/blog/:slug", async (req, res) => {
  const post = await prisma.blogPost.findUnique({
    where: { slug: req.params.slug },
  });
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

router.post("/blog", authenticate, authorize("ADMIN"), async (req, res) => {
  const post = await prisma.blogPost.create({ data: req.body });
  res.status(201).json(post);
});

export default router;
