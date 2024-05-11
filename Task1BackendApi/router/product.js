import { Router } from "express";
import { getAllProduct ,getProductById} from "../controller/product.js";

const router = Router();






router.get('/products/categories/:categoryname/products', (req,res) => {
    console.log("at router")
    const category = req.params.categoryname ;
    console.log(`category: ${category}`)
    getAllProduct(category,req,res);
});



router.get('/products/categories/:categoryname/products/:productId', (req,res) => {

    const productId = req.params.productId ;
    console.log(`id: ${productId}`)
    getProductById(req,res);
}
);






export {router as productRouter} ;