import React, { useEffect } from 'react'
import { useProducts } from '../../contexts/ProductsContext'
import { calcTotalPrice } from '../../utils/calc';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';
import MyLink from '../../shared/MyLink';
import Button from '@material-ui/core/Button';

const Cart = () => {
   const { cart, getCart, changeProductCount } = useProducts();

   useEffect(() => {
      getCart()
   }, []);

   const handleCountChange = ({ value }, id) => {
      changeProductCount(value, id);
   }


   return (
      <div>
         {cart && cart.products ? (
               <>
               <table>
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Title</th>
                     <th>Price</th>
                     <th>Count</th>
                     <th>Sub Total</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     cart.products.map((item) => (
                        <tr>
                        <td>
                           <img src={item.product.image} alt="" style={{ width: '50px' }} />
                        </td>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>
                           <input 
                              type="number" 
                              value={item.count} 
                              onChange={(e) => handleCountChange(e.target, item.product.id)} 
                           />
                        </td>
                        <td>{item.subPrice}</td>
                        <td>
                           <IconButton>
                              <HighlightOffIcon />
                           </IconButton>
                        </td>
                     </tr>
                     ))
                  }

               </tbody>
            </table>
            <h4>Total: {calcTotalPrice(cart.products)}</h4>
            <MyLink to={`/paymentForm`}>
               <Button color="primary" variant="contained">Оплатить</Button>
            </MyLink>
            </>
            ) : (
               <h1> Cart is empty </h1>
         )}
      </div>
   )
}

export default Cart
