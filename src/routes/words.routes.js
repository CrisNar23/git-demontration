import { Router } from "express";
import {
  reverseSentencesDB,
  reverseSentencesDB2,
} from "../controllers/words.controller.js";

const router = Router();

// Route to compare two sentences with DB
router.get("/level-1", reverseSentencesDB);

router.get("/level-2", reverseSentencesDB2);

export default router;
