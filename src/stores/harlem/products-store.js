import {
    createStore
} from 'harlem';


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


export const loadProducts = action('load-products', async (mutate) => {
    const response = await fetch(import.meta.env.VITE_API_URL+'/api/products');
    const products = await response.json();

    mutate(state => {
        state.products = products;
    });
});

export const addProduct = action('add-products', async (data, mutate) => {
    const response = await fetch(import.meta.env.VITE_API_URL+'/api/products', {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const newProduct = await response.json();

    mutate(state => {
        state.products.push(newProduct);
    });
});