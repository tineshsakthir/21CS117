import React, { useState } from 'react'
import axios from 'axios';


const ProductList = () => {

const [data, setData] = useState([]) ; 
 
// const fetchData =  async () => {
//     const url = 'http://localhost:3000/products' ; 
//     cosnt response = await axios.get(url) ;
//     setData(Response.data) ;

// }


  return (
    <div>
            <select>
                <option value="AMZ">AMZ</option>
                <option value="FLP">FLP</option>
                <option value="SNP">SNP</option>
                <option value="MYN">MYN</option>
                <option value="AZO">AZO</option>
            </select>


    </div>
  )
}

export default ProductList