import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Adminviewitems() {
    let [products,setProducts] = useState([])

    useEffect(()=>{
        function fetchData(){
            axios.get('http://localhost:1000/Product')
            .then((res)=>{
                setProducts(res.data)
            })
            .catch((res)=>{
                console.log(err);
            })
        } 
        fetchData()
    },[])

    console.log(products);
    
    function deleteProduct(id,name){
        axios.delete('http://localhost:1000/Product/${id}')
        .then(()=>{
            toast.success('${name} Deleted Successfully')
        })
        .catch(()=>{
            toast.error('Data not Present')
        })
    }

    
    return {
        <div className='Adminviewitems'>
        {products.map((product)=>{
            return(
                <div className="sub_items">
                    <h1>{product.name}</h1>
                    <h3>
                        {product.category}
                    </h3>
                    <img src={product.image}
                </div>
            )
        })}
        
    }
}