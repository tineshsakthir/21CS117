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




const getProduct = async (req, res) => {
    try {

        const company = req.params.company ;
        const category = req.params.category ;
        const top = req.query.top ;
        const minPrice = req.query.minPrice ;
        const maxPrice = req.query.maxPrice ;

        // const category = 
        console.log("inside get") ; 
        const token = await getToken(); 
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }    
        const products = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, config) ; 

        res.status(200).json(products.data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {
    getProduct
}