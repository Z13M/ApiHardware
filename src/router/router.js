import express from 'express'
import { getAll, getName, getCompbyId, getCompName, addComp, removeComp, updateComp } from '../controller/controller.js'

const { Router } = express

const router = Router()

router.get('/', getAll);
router.get('/Comp', getName);
router.get('/id/:id', getCompbyId);
router.get('/Comp/:nome', getCompName);
router.post('/add', addComp);
router.delete('/remove/:id',removeComp);
router.put('/update/:id', updateComp);

export default router;