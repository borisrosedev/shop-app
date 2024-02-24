import {
    createStore
} from 'harlem';
import { MongodbService } from '../../services/mongodb.service';


const STATE = {
   products:[]
};


export const {
    state, 
    getter,
    mutation,
    action,
    ...store
} = createStore('products', STATE);


export const loadProducts = action('load-products', async (_, mutate) => {
    const products = await MongodbService.fetchProducts();

    mutate(state => {
        state.products = products;
    });
});

export const addProduct = action('add-products', async (data, mutate) => {
    const newProduct = await MongodbService.storeProduct(data);
    mutate(state => {
        state.products.push(newProduct);
    });
});