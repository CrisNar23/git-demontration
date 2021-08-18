import { Router } from 'express'
import {
  reverseSentencesDB, reverseSentencesDB3
} from '../controllers/words.controller.js'

const router = Router()

// Route to compare two sentences with DB
router.get('/level-1', reverseSentencesDB)

// Route to compare two sentences with DB
router.get('/level-3', reverseSentencesDB3)

export default router