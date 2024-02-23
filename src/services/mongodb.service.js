export class MongodbService {

    

    static async storeProduct(){
        const response = await fetch(import.meta.env.VITE_API_URL+'/api/products', {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const newProduct = await response.json();
        return newProduct
    }

    static async fetchProducts(){
        const response = await fetch(import.meta.env.VITE_API_URL+'/api/products');
        const products = await response.json();
        return products
    }


}