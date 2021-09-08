import express from 'express';

import ticketController from '../controllers/ticket';

const router = express.Router();

/**
 * @route GET api/tickets
 * @desc Get all tickets
 * @access Public
 */
router.get('/', ticketController.index);

export default router;
