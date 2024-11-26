import express from 'express';
const router = express.Router();
import { getDiagnosis } from '../controllers/diagnoseControllers.js';

router.post('api/diagnose', getDiagnosis);

export default router;
