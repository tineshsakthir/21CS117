import express from 'express';
import axios from 'axios';
const app = express();
import { productRouter } from './router/product.js';

import cors from 'cors';
app.use(cors());


app.use('/categories', productRouter ) ; 


// const getToken = async (req, res) => {
//     try {

//         console.log("inside get token") ;
//         const token = await axios.post("http://20.244.56.144/test/auth", 
//         {
//             "companyName": "Ecomerce",
//             "clientID": "0a37d2e1-babc-4a6c-a2c2-3ba412861e13",
//             "clientSecret": "wonEYDXIamRjdpms",
//             "ownerName": "Tinesh Sakthi R",
//             "ownerEmail": "tineshsakthionline@gmail.com",
//             "rollNo": "21CS117"
//         }
//         ) ; 
//         console.log(token) ; 
//         return token.data.access_token;
        

//     }catch(err){
//         console.log(err);
    
//     }
// }




// app.get('/', async (req, res) => {
//     try {
//         console.log("inside get") ; 
//         const token = await getToken(); 
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }    
//         const products = await axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=15000", config) ; 

//         res.status(200).json(products.data);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
// );



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

