import { Router } from 'express' 
import {deleteOne,updateOne,createOne,getOne,getAll} from '../controllers/articleController.js'
const router  = Router()
router.get('/getAll' ,getAll)
router.get('/getOne/:id' ,getOne)
router.post('/createOne', createOne)
router.put('/updateOne/:id' ,updateOne)
router.delete('/deleteOne/:id',deleteOne)

export default router