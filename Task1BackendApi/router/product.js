import { Router } from "express";
import { getProduct } from "../controller/product.js";

const router = Router();




router.get('/', getProduct );   




export {router as productRouter}