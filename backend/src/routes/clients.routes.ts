import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { prisma } from "../config/database";

const router = Router();

router.get("/clients", authenticate, async (_req, res) => {
  const clients = await prisma.client.findMany({ orderBy: { createdAt: "desc" } });
  res.json(clients);
});

router.post("/clients", authenticate, async (req, res) => {
  const client = await prisma.client.create({ data: req.body });
  res.status(201).json(client);
});

export default router;
