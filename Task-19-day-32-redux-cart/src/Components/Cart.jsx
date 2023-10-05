import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { remove } from './store/cartSlice';
import { addQty, removeQty,resetQty } from './store/quantitySlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faSquareMinus, faSquarePlus} from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const productcart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.quantity);
  const dispatch = useDispatch();

  const removeToCart = (productId) => {
    dispatch(remove(productId));
   dispatch(resetQty(productId));
  };
  const grandTotal = productcart.reduce((total, product) => {
    return total + product.price * quantity[product.id];
  }, 0);


  const cards = productcart.map((product) => (
    <div className='col-md-12' style={{padding:"20px 15%",backgroundColor:'antiquewhite'}} key={product.id}>
      <Card className='h-100'>
        <div className='text-center'>
          <Card.Img variant='top' src={product.image} style={{ width: '350px', height: '280px',marginTop:'30px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <div className='button-container'>
            <div className='Total-price'>
              <b>TotalPrice : <FontAwesomeIcon icon={faIndianRupeeSign}/> {(product.price * quantity[product.id]).toFixed(2)|| product.price}</b>
            </div>
            <button
              className='decrement-button button1'
              onClick={() => {
                if (quantity[product.id] > 1) { // Check quantity for the specific product
                  dispatch(removeQty({ productId: product.id }));
                  
                }
              }}
              style={{border:'solid 0.5px black',borderRadius:'5px',marginRight:"5px"}}><FontAwesomeIcon icon ={faSquareMinus}/>
              
            </button>
            <span className='quantity-display' style={{border:'solid 2px #b6a6a6',padding:'1px 10px',borderRadius:'5px'}}>{quantity[product.id] }</span>
            <button 
              className='increment-button buttons'
              onClick={() => {
                dispatch(addQty({ productId: product.id }));
              }}
              style={{border:'solid 0.5px black',borderRadius:'5px',marginLeft:"5px"}}>
              <FontAwesomeIcon icon ={faSquarePlus}/>
            </button>
          </div>
        </Card.Body>
        <Card.Footer className='bg-white'>
          <Button variant='danger' onClick={() => removeToCart(product.id)}>
            Remove item
          </Button>
        </Card.Footer>
      </Card>
     
    </div>
  ));

  return (
    <>
    { productcart.length === 0? <div className="text-center1 empty-cart-message">Your cart is empty</div> :
                        <div className='row'>{cards}</div> }
       <div className='grand-total'>
            <b>Grand Total: <FontAwesomeIcon icon={faIndianRupeeSign} /> <span style={{color:'springgreen'}}>{grandTotal.toFixed(2)}</span></b>
          </div>                 
    </>
  
  )
}

export default Cart;
