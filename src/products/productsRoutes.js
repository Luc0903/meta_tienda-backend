import { Router } from "express";
import { 
getAllProducts, 
createProduct, 
getSingleProduct, 
editProduct, 
deleteProduct 
} from './productsControllers.js'

const router = Router()


router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getSingleProduct).patch(editProduct).delete(deleteProduct)

export default router;