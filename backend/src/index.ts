import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import clientsRoutes from "./routes/clients.routes";
import servicesRoutes from "./routes/services.routes";
import ticketsRoutes from "./routes/tickets.routes";
import blogRoutes from "./routes/blog.routes";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api", authRoutes);
app.use("/api", clientsRoutes);
app.use("/api", servicesRoutes);
app.use("/api", ticketsRoutes);
app.use("/api", blogRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
