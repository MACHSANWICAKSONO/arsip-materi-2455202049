import materiRoutes from "./materi.routes.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: /^http:\/\/localhost:\d+$/,
  }),
);

app.use(express.json());

app.get("/api/sehat", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// Route materi
app.use("/api/materi", materiRoutes);

// Penanganan 404
app.use((req, res) => {
  res.status(404).json({
    error: "Rute tidak ditemukan",
  });
});

// Penanganan 500
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: "Terjadi kesalahan pada server",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
