import express from 'express';
import { createProduct, getProduct, updateProduct, deleteProcuct } from '../controllers/product.controller.js';
const router = express.Router();

router.post('/', createProduct);
router.get('/', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProcuct);

export default router;
