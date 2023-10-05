import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from './Components/store/cartSlice';
import { addQty } from './Components/store/quantitySlice';





function Product() {
 
   const dispatch = useDispatch()
   const[products,setProducts]=useState([]) 
   const [addedToCart, setAddedToCart] = useState({});
   

  useEffect(() => {
     fetch('https://fakestoreapi.com/products')
     .then(data=> data.json())
     .then(result=> setProducts(result))
    
  }, [])

  const addTocart=(product)=>{
    // dispatch
    dispatch(addQty({ productId: product.id }))
    dispatch(add(product))
    // after added to cart button changed to Added to cart
    setAddedToCart({ ...addedToCart, [product.id]: true });
    // console.log(product)
  }
    
  const cards  = products.map(product=>(
   
      <div className='col-md-3' style={{marginBottom:'10px'}}>
         <Card key={product.id} className='h-100'>
              <div className='text-center'>
                  <Card.Img variant="top" src={product.image} style={{width :'100px',height:'130px',padding:'5px'}}/>
               </div>
          <Card.Body>
             <Card.Title>{product.title}</Card.Title> 
             <Card.Text style={{display:'flex',justifyContent:'flex-end',fontWeight:'700'}} >
                {product.price}
             </Card.Text>
          </Card.Body>
            <Card.Footer className='bg-white' style={{display: 'flex',justifyContent:'center'}}>
                    {addedToCart[product.id] ? ( <Button variant='danger'>Added to Cart</Button>  )                
                            : (<Button variant='primary' onClick={() => addTocart(product)}>Add to Cart </Button>)}
            </Card.Footer>
          </Card>
      </div>
    
    ))

  return (
    <>
   
    <div className='container'> 
      <div className='row'>
        {cards}
    </div>
    </div>
    </>
  )
}

export default Product