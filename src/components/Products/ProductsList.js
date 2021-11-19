import { Grid } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ products }) => {

    const cart = JSON.parse(localStorage.getItem('cart')) ?? false;
    

    return (
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid item xs={4} key={product.id}>
                    <ProductCard product={product} cart={cart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsList;
