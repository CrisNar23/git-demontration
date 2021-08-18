import { Router } from "express";
import {
  reverseSentencesDB,
  reverseSentencesDB2,
  reverseSentencesDB3
} from "../controllers/words.controller.js";

const router = Router();

router.get("/level-1", reverseSentencesDB);

router.get("/level-2", reverseSentencesDB2);

router.get('/level-3', reverseSentencesDB3)

export default router
