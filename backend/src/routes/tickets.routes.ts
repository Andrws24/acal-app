import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { prisma } from "../config/database";

const router = Router();

router.get("/tickets", authenticate, async (_req, res) => {
  const tickets = await prisma.ticket.findMany({
    include: { client: true },
    orderBy: { createdAt: "desc" },
  });
  res.json(tickets);
});

router.post("/tickets", authenticate, async (req, res) => {
  const ticket = await prisma.ticket.create({ data: req.body });
  res.status(201).json(ticket);
});

router.patch("/tickets/:id", authenticate, async (req, res) => {
  const ticket = await prisma.ticket.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(ticket);
});

export default router;
