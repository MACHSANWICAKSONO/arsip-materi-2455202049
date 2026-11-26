import express from "express";
import { semua } from "./materi.repository.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await semua();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
