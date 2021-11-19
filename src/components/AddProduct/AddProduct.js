import React, { useState } from 'react';
import { useNavigate } from "react-router";
import Button from '@material-ui/core/Button';
import './AddProduct.css';
import { useProducts } from '../../contexts/ProductsContext';


const AddProduct = () => {
   const [form, setForm] = useState({
      title: "",
      image: "",
      price: "",
      phone: "",
      category: "",
      author: "",
      description: "",
   });
   const navigate = useNavigate()
   // const history = useHistory();

   const { addProduct } = useProducts();

   const handleChange = (e) => {
      const values = {
         ...form,
         [e.target.name]: e.target.value
      };
      setForm(values);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!form.title && !form.image && !form.price && !form.phone && !form.category && !form.author && !form.description) {
         alert('fill all blanks');
         return;
      }

      // console.log(form, 'formmm')
      await addProduct(form);
      navigate('/'); 
   }

   return (
      <div className="container">
         <h1>Add new product</h1>
         <form action="" className="form" onSubmit={handleSubmit} >
            <input onChange={handleChange} value={form.title} type="text" placeholder="title" name="title" />
            <input onChange={handleChange} value={form.image} type="text" placeholder="image" name="image" />
            <input onChange={handleChange} value={form.price} type="text" placeholder="price" name="price" />
            <input onChange={handleChange} value={form.phone} type="text" placeholder="phone" name="phone" />
            <input onChange={handleChange} value={form.category} type="text" placeholder="category" name="category" />
            <input onChange={handleChange} value={form.author} type="text" placeholder="author" name="author" />
            <textarea 
               className="textarea"
               cols="30" 
               rows="10" 
               value={form.description}
               onChange={handleChange}
               placeholder="description" 
               name="description" 
               ></textarea>
            {/* <Button color="primary" variant="contained" className="btn">Add</Button> */}
            <button className="form-btn" type="submit">Add</button>
         </form>
      </div>
   )
}

export default AddProduct;
