import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Product/Product';
import PurchaseProduct from '../PurchaseProduct/PurchaseProduct';

const Products = () => {
    const { products } = useAuth();
    return (
        <Container style={{
            margin: '50px auto'
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Products;