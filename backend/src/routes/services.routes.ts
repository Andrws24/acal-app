import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { prisma } from "../config/database";

const router = Router();

router.get("/services", authenticate, async (_req, res) => {
  const services = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });
  res.json(services);
});

router.post("/services", authenticate, async (req, res) => {
  const service = await prisma.service.create({ data: req.body });
  res.status(201).json(service);
});

export default router;
