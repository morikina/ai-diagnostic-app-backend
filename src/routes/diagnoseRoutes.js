import express from 'express';
const router = express.Router();
import { getDiagnosis } from '../controllers/diagnoseControllers.js';

router.post('/diagnose', getDiagnosis);

export default router;
