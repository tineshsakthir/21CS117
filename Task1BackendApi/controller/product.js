import axios from "axios";

const getToken = async (req, res) => {
    try {

        console.log("inside get token") ;
        const token = await axios.post("http://20.244.56.144/test/auth", 
        {
            "companyName": "Ecomerce",
            "clientID": "0a37d2e1-babc-4a6c-a2c2-3ba412861e13",
            "clientSecret": "wonEYDXIamRjdpms",
            "ownerName": "Tinesh Sakthi R",
            "ownerEmail": "tineshsakthionline@gmail.com",
            "rollNo": "21CS117"
        }
        ) ; 
        console.log(token) ; 
        return token.data.access_token;
        

    }catch(err){
        console.log(err);
    
    }
}



const allProducts = [] ; 



const getAllProduct = async (category ,req, res) => {
    try {
        // const company = req.params.company ;
        // const category = req.params.category ;

        

        const company = req.query.company ;
        const top = req.query.top ;
        const minPrice = req.query.minPrice ;
        const maxPrice = req.query.maxPrice ;

      
        console.log("inside get") ; 
        const token = await getToken(); 
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }    


        const products = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, config) ; 


         products.data.forEach((product) => {
            product.productId = allProducts.length + 1;
            allProducts.push(product);
        });
        console.log(allProducts) ;

        
        const sortBy = req.query.sortBy ; 

        if(sortBy){
         if(sortBy === 'price'){
            allProducts.sort((a,b) => a.price - b.price) ;
        }
        if(sortBy === 'rating'){
            allProducts.sort((a,b) => b.rating - a.rating) ;
        }
        if(sortBy === 'name'){
            allProducts.sort((a,b) => a.name.localeCompare(b.name)) ;
        }

        if(sortBy === 'discount'){
            allProducts.sort((a,b) => b.discount - a.discount) ;
        }

    }


        res.status(200).json(allProducts);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const getProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = allProducts.find((product) => product.productId == productId) ;
        // if (!product) {
        //     return res.status(404).json({ message: allProducts});
        // }
        console.log(product)
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {
    getAllProduct , getProductById
}