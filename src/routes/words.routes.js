import { Router } from 'express'
import {
  reverseSentencesDB
} from '../controllers/words.controller.js'

const router = Router()

// Route to compare two sentences with DB
router.get('/level-1', reverseSentencesDB)

export default router